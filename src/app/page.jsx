'use client'

import MainLayout from './Layouts/MainLayout'

import { useSession, signOut } from 'next-auth/react'

export default function Home () {
  const { data: session } = useSession()
  return (
    <>
      <MainLayout>
        Contenido principal

        Hola <span>{session.user?.name}</span>
        <img
          src={session.user?.image}
          width={100}
          height={100}
        />
        <button onClick={() => signOut()}>Cerrar sesión</button>
      </MainLayout>
    </>
  )
}
