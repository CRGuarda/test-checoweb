import { s3 } from '@/lib/aws-s3'
import { CopyObjectCommand } from '@aws-sdk/client-s3'

export const copyObject = async (sourceBucket: string, destinationBucket: string, objectKey: string) => {
  try {
    const command = new CopyObjectCommand({
      CopySource: sourceBucket,
      Bucket: destinationBucket,
      Key: objectKey,
    })

    await s3.send(command)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}
