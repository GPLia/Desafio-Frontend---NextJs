"use client";
import { usePathname } from "next/navigation";
import { PiListBold, PiXBold } from "react-icons/pi";
import { useOpenSideBar } from "./hooks/useOpenSideBar";
import SideBar from "./SideBar";

export default function NewSideBar() {
  const pathname = usePathname(); // obter a rota atual

  const { handleToogle, isOpen } = useOpenSideBar(); // hook par gerenciar o estado da sidebar

  // condicional para nao renderizar a sidebar na pagina inicial
  if (pathname === "/") {
    return null;
  }

  return (
    <div
      className={`flex absolute z-10 h-screen ${isOpen ? "w-60" : "w-16"} transition-all duration-300`}
    >
      {isOpen && <SideBar />} {/* renderiza a sidebar se isOpen for true */}
      <div
        onClick={() => handleToogle()} // função para abrir e fechar a sidebar
        className={`${isOpen ? "bg-black hover:bg-customBlue" : "bg-customBlue hover:bg-black"} text-white py-1 h-fit mt-6 px-3 rounded-e-md cursor-pointer`}
      >
        {isOpen ? <PiXBold size={25} /> : <PiListBold size={25} />}
      </div>
    </div>
  );
}
