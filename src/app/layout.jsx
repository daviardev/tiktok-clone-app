import { getServerSession } from 'next-auth'

import SessionProvider from './Layouts/includes/SessionProvider'

import './globals.css'

export const metadata = {
  title: 'TikTok - Make Your Day',
  description: 'Clon de TikTok creado con Nextjs y Firebase'
}

export default async function RootLayout ({ children }) {
  const session = await getServerSession()

  return (
    <html lang='es'>
      <body>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
