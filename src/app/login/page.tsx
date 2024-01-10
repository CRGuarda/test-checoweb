'use client'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'

const LoginPage = () => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/'

  return (
    <div className='text-9xl flex flex-col gap-10 items-center pt-10'>
      <p>LoginPage</p>
      <button
        onClick={() => signIn('google', { callbackUrl })}
        className='rounded-md p-2 text-2xl text-center w-fit bg-accent-green'
      >
        SIGN IN
      </button>
    </div>
  )
}
export default LoginPage
