import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  react: {
    useSuspense: false, // Desativa o Suspense
  },
  /* outras opções de configuração aqui */
};

export default nextConfig;
