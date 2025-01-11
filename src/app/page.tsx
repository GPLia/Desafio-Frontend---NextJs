import LoginForm from "@/components/Login/LoginForm";

export default function Home() {
  // exporta a função Home
  return (
    <main>
      <div className="h-screen flex justify-center items-center bg-slate-600 px-5">
        <LoginForm />
      </div>
    </main>
  );
}
