import PaymentList from '@/components/payment/PaymentList'
import { getQueuePayments } from '@/lib/aws-s3/get-queue-payments'
// ToDo: Establish if want cache for like 2 seconds.

const page = async () => {
  const payments = await getQueuePayments()
  if (!payments) return

  return <PaymentList payments={payments} />
}
export default page
