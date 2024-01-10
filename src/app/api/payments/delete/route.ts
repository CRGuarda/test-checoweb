import { copyObject } from '@/lib/aws-s3/copy-object'
import { deleteObject } from '@/lib/aws-s3/delete-object'

export const DELETE = async (request: Request) => {
  try {
    const { key } = await request.json()
    await copyObject(`kambia-payments-queue/${key}`, 'kambia-payments-trash', key)
    await deleteObject('kambia-payments-queue', key)
    return Response.json({ message: 'Successfully deleted' })
  } catch (error) {
    let message = 'Unknown Error'
    if (error instanceof Error) message = error.message
    return Response.json({ message }, { status: 404 })
  }
}
