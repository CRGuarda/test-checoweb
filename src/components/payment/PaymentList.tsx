import { PaymentItem } from '@/components/payment/PaymentItem'
import { queuePayment } from '@/types/payment.type'

export default function PaymentList({ payments }: { payments: queuePayment[] }) {
  return (
    <section className='flex flex-col gap-14 md:gap-8'>
      {payments?.map((payment, index) => (
        <PaymentItem payment={payment} key={index} />
      ))}
    </section>
  )
}
