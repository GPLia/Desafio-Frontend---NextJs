"use client";

import LoginForm from "@/components/Login/LoginForm";
import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Certifica-se de que o código só é executado no lado do cliente
    setIsClient(true);
  }, []);

  return (
    <main>
      <div className="h-screen flex justify-center items-center bg-slate-600 px-5">
        {isClient ? <LoginForm /> : null}
      </div>
    </main>
  );
}
