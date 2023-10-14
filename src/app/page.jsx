'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

import MainLayout from './Layouts/MainLayout'

export default function Home () {
  const { data: session } = useSession()
  return (
    <>
      <MainLayout>
        <span className='text-white bg-red-600 h-12 w-12'>Hola</span>
        {
          !session
            ? (
              <button onClick={() => signIn()} className='text-white'>Iniciar sesión</button>
              )
            : (
              <div>
                <span className='text-white'>Bienvenido {session.user?.name}</span>
                <button onClick={() => signOut()} className='text-white'>Cerrar sesión</button>
              </div>
              )
        }
      </MainLayout>
    </>
  )
}
