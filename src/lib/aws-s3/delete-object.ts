import { DeleteObjectCommand } from '@aws-sdk/client-s3'
import { s3 } from '@/lib/aws-s3'

export const deleteObject = async (bucketName: string, objectKey: string) => {
  try {
    const command = new DeleteObjectCommand({
      Bucket: bucketName,
      Key: objectKey,
    })

    await s3.send(command)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}
