import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const user = {
                    id: "1",
                    name: "user",
                    username: "user",
                    password: "password123"
                }

                if (
                    credentials?.username === user.username &&
                    credentials?.password === user.password
                ) {
                    return { id: user.id, name: user.name }
                }

                return null
            }
        })
    ],
    pages: {
        signIn: '/login',
    },
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }
