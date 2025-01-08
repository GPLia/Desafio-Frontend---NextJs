import NextAuth from "next-auth";
import  CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    pages: {
        signIn: "/",   
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Email" },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials, req) {
                if(!credentials) {
                  return null;
                }

                if(credentials.email === "teste@gmail.com" && credentials.password === "123456") {
                    return {
                        id: "1",  
                        name: "Teste",
                        email: "teste@gmail.com"
                    }
                }
                return null;
            },
       })
    ]
});

export { handler as GET, handler as POST };