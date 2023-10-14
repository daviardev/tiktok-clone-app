import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID ?? '',
      clientSecret: process.env.SECRET_CLIENT_ID ?? ''
    })
  ],
  callback: {
    async session ({ session, token }) {
      session.user.tag = session.user.name
        .split(' ')
        .join('')
        .toLocaleLowerCase()

      session.user.uid = token.sub
      return session
    }
  },

  secret: process.env.NEXTAUTH_SECRET
}

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
