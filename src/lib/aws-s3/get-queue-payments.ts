import { executeQuery } from '@/lib/aws-rds/execute-queries'
import { getClientByPhoneNumberQuery } from '@/lib/aws-rds/queries'
import { s3 } from '@/lib/aws-s3'
import { getSignedURL } from '@/lib/aws-s3/get-signed-url'
import { userData } from '@/types/payment.type'
import { ListObjectsV2Command } from '@aws-sdk/client-s3'

const params = {
  Bucket: process.env.AWS_PAYMENTS_BUCKET as string,
  Prefix: 'client/',
}

export const getQueuePayments = async () => {
  const command = new ListObjectsV2Command(params)
  const { Contents } = await s3.send(command)
  if (!Contents) return
  // Sorting by Date
  const sortedPayments = Contents.sort((a, b) => (a.LastModified?.getTime() || 0) - (b.LastModified?.getTime() || 0))

  const paymentsData = await Promise.all(
    sortedPayments?.map(async ({ Key, LastModified: lastModified }) => {
      const phoneNumber = Key?.split('/')[1] as string
      // Get userData by RDS query
      const [userData] = (await executeQuery(getClientByPhoneNumberQuery, [phoneNumber])) as userData[]
      // Get signed URL
      const imageURL = (await getSignedURL(params.Bucket, Key as string)) as string

      return {
        phoneNumber,
        userData: userData?.at(0),
        lastModified: lastModified || '',
        imageURL,
        key: Key as string,
      }
    })
  )

  return paymentsData
}
