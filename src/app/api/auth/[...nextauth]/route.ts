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

        if (
          credentials.login === "teste@gmail.com" &&
          credentials.password === "123456"
        ) {
          return {
            id: "1",
            name: "Teste",
            email: "teste@gmail.com",
          };
        }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
