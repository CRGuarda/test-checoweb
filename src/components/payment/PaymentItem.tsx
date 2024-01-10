'use client'
import { ChangeEvent, useState } from 'react'
import Image from 'next/image'
import { queuePayment } from '@/types/payment.type'
import { getLocalDate } from '@/utils/getLocalDate'
import Swal from 'sweetalert2'

export const PaymentItem = ({ payment }: { payment: queuePayment }) => {
  const [paymentForm, setPaymentForm] = useState({
    ID_CLIENTE: payment?.userData?.ID_CLIENTE,
    ID_PRESTAMO: payment?.userData?.ID_PRESTAMO,
    PAGO: payment?.userData?.CUOTA,
    Key: payment?.key,
  })

  const handleQuotaChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPaymentForm((prevState) => ({
      ...prevState,
      PAGO: e.target.value,
    }))

  const handleDelete = async (key: string) => {
    const { isConfirmed } = await Swal.fire({
      title: `¿Estás seguro que deseas eliminar esta imagen?`,
      icon: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonColor: '#F87171',
      confirmButtonText: 'Sí, eliminar',
      heightAuto: false,
    })
    // eslint-disable-next-line no-console
    console.log(isConfirmed, key)
    if (!isConfirmed) return

    const deleteBody = { key }

    const isDeleted = await fetch('/api/payments/delete', {
      method: 'DELETE',
      body: JSON.stringify(deleteBody),
    })
    // eslint-disable-next-line no-console
    console.log(isDeleted)
  }

  const handleConfirmation = async () => {
    const deleteConfirmation = await Swal.fire({
      title: `¿Registrar S/${paymentForm.PAGO} de ${payment?.userData?.NOMBRE_COMPLETO}`,
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonColor: '#49a080',
      confirmButtonText: 'Sí, registrar',
      heightAuto: false,
    })
    // eslint-disable-next-line no-console
    console.log(deleteConfirmation.isConfirmed)
  }

  return (
    <div className='w-full flex flex-col md:flex-row sm:gap-10 justify-center h-auto items-center gap-5'>
      <section className='flex justify-center w-[300px]'>
        <Image
          src={payment?.imageURL as string}
          alt={`Payment voucher for ${payment?.userData?.NOMBRE_COMPLETO}`}
          width={380}
          height={500}
          style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8c+fXfwAJAQOzmNNi7wAAAABJRU5ErkJggg=='
          priority
        />
      </section>
      <section className='flex flex-col gap-2 md:gap-3 uppercase w-full max-w-[300px] text-sm md:text-base border-l-4 border-l-primary pl-6'>
        <div className='flex flex-col'>
          <span className='font-bold'>Código de préstamo</span>
          <span>{payment?.userData?.ID_PRESTAMO}</span>
        </div>
        <div className='flex flex-col'>
          <span className='font-bold'>Código de cliente</span>
          <span>{payment?.userData?.ID_CLIENTE}</span>
        </div>
        <div className='flex flex-col'>
          <span className='font-bold'>Nombre completo</span>
          <span>{payment?.userData?.NOMBRE_COMPLETO}</span>
        </div>
        <div className='flex flex-col'>
          <span className='font-bold'>Fecha y hora</span>
          <span>{getLocalDate(payment?.lastModified)}</span>
        </div>
        <div className='flex flex-col'>
          <span className='font-bold'>Monto de cuota</span>
          <input
            value={paymentForm?.PAGO}
            className='border-2 rounded-md pt-1 pl-2 border-accent-lilac invalid:bg-red-400'
            onChange={handleQuotaChange}
            pattern='^[0-9]+([,.][0-9]{1,2})?$'
          />
        </div>
        <div className='flex justify-between'>
          <button
            className='border-red-400 rounded-lg bg-red-200 px-2 py-1 border'
            onClick={() => handleDelete(payment?.key)}
          >
            Eliminar
          </button>
          <button
            className='border border-green-400 bg-green-100 px-2 py-1 rounded-lg'
            onClick={() => handleConfirmation()}
          >
            Registrar
          </button>
        </div>
      </section>
    </div>
  )
}
