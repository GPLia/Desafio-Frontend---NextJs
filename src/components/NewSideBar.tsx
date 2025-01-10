"use client";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeLine } from "react-icons/ri";
import { useOpenSideBar } from "./SideBar/hooks/useOpenSideBar";
import SideBar from "./SideBar/SideBar";

export default function NewSideBar() {
  const pathname = usePathname(); // obter a rota atual

  const { handleToogle, isOpen } = useOpenSideBar();

  if (pathname === "/") {
    return null;
  }

  return (
    <div
      className={`flex absolute z-10 h-screen ${isOpen ? "w-60" : "w-16"} transition-all duration-300`}
    >
      {isOpen && <SideBar />}
      <div
        onClick={() => handleToogle()}
        className={`${isOpen ? "bg-black hover:bg-customBlue" : "bg-customBlue hover:bg-black"} text-white py-1 h-fit mt-6 px-3 rounded-e-md cursor-pointer`}
      >
        {isOpen ? (
          <RiCloseLargeLine size={23} />
        ) : (
          <GiHamburgerMenu size={25} />
        )}
      </div>
    </div>
  );
}
