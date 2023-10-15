'use client'

import { signIn } from 'next-auth/react'

import { FcGoogle } from 'react-icons/fc'

const onSubmit = async () => {
  await signIn('google', {
    redirect: true,
    callbackUrl: '/'
  })
}

export default function Login () {
  return (
    <>
      <div className='flex flex-[1] w-full mt-11 mb-0 mx-auto py-0 px-8 items-center relative max-w-[480px] flex-col'>
        <div className='py-8 px-0'>
          <h2 className='text-[#161823] mx-auto my-4 text-2xl text-center font-bold'>
            Iniciar sesión en TikTok
          </h2>
          <h4 className='text-[#0000008f] mt-3 mb-8 mx-0 text-[15px] text-center leading-[18px]'>
            Gestiona tu cuenta, lee notificaciones, comenta sobre videos y más.
          </h4>

          <button
            className='text-[#161823] w-full font-bold border border-solid border-[#1618231f] rounded-lg text-[15px] py-0 px-3 flex items-center justify-center h-11 relative break-all whitespace-nowrap mb-3'
            onClick={onSubmit}
          >
            <FcGoogle
              size={24}
              className='left-3 absolute flex'
            />
            Continuar con Google
          </button>
        </div>
      </div>
    </>
  )
}
