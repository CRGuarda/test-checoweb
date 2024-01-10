import { getQueuePayments } from '@/lib/aws-s3/get-queue-payments'

export const GET = async () => {
  try {
    const paymentsData = await getQueuePayments()

    return Response.json(paymentsData || [])
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
    return Response.json(error, { status: 404 })
  }
}
