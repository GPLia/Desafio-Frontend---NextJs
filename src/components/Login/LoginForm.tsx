"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function LoginForm() {
  const searchparams = useSearchParams();

  // Obtém o parâmetro de erro da URL, se existir
  const error = searchparams.get("error");

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    // Cria um objeto FormData com os dados do formulário
    const formData = new FormData(e.currentTarget);
    // Extrai os dados do formulário
    const Data = {
      login: formData.get("login"),
      password: formData.get("password"),
    };
    // funcao do nextauth para fazer login
    signIn("credentials", {
      ...Data,
      callbackUrl: "/Inventory",
    });
  }

  return (
    !error && (
      <form
        onSubmit={login}
        className="bg-white p-12 rounded-lg w-96 max-w-full flex justify-center items-center flex-col gap-2"
      >
        <h2 className="text-black font-bold text-xl mb-3">Faça seu Login</h2>
        <input
          name="login"
          type="login"
          placeholder="Login"
          className="input input-primary w-full"
        />
        <input
          name="password"
          type="password"
          placeholder="Senha"
          className="input input-primary  w-full"
        />
        <button className="text-white btn w-full bg-customBlue" type="submit">
          Login
        </button>
        {error === "CredentialsSignin" && (
          <div className="text-red-500">Email ou senha inválidos</div>
        )}
      </form>
    )
  );
}
