import type {AuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {label: "Email", type: "text"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials, req) {
                if (typeof credentials !== "undefined") {
                    const res = credentials.email === 'admin@mail.com' && credentials.password === 'admin';

                    if (res) {
                        return {id: '1', name: 'Admin', lastName: 'admin', apiToken: Math.random()}
                    }

                    return null

                } else {
                    return null
                }
            }
        })
    ],
    session: {strategy: "jwt", maxAge: 23 * 3600},
    pages: {
        signIn: '/login',
        signOut: '/logout'
    }
}