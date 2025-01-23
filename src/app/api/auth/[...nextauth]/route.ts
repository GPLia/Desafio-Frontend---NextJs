import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  // Configuracao do NextAuth
  pages: {
    // cfg das rotas
    signIn: "/", // rota de login
  },
  providers: [
    // provedores de autenticacao
    CredentialsProvider({
      // provedor de credenciais
      name: "Credentials",
      credentials: {
        // campos de login
        login: { label: "Login", type: "login", placeholder: "Login" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        if (credentials.login === "teste" && credentials.password === "123") {
          return {
            id: "1",
            name: "Teste",
            login: "teste",
          };
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
console.log(process.env.NEXTAUTH_SECRET);

export { handler as GET, handler as POST };
