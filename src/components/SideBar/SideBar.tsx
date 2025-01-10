"use client";
import { signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

export default function SideBar() {
  const pathname = usePathname(); // obter a rota atual
  const router = useRouter(); // obter a rota atual

  const links = [
    { id: 1, name: "Home", action: "/home" },
    { id: 2, name: "Product", action: "/Inventory" },
    { id: 3, name: "Logout", action: "/" },
  ];

  const handleNavigate = (location: string) => {
    if (location === "/") {
      return signOut();
    }
    return router.push(location);
    // return redirect(location);
  };

  if (pathname === "/") {
    return null;
  }

  return (
    <div className="bg-customBlue w-full h-full">
      <div className="mt-10 px-1">
        {links.map((link) => (
          <div
            key={link.id}
            className="w-full flex flex-col justify-center items-center text-white font-semibold py-1 mb-5 cursor-pointer hover:bg-black rounded"
            onClick={() => handleNavigate(link.action)}
          >
            {" "}
            {link.name}{" "}
          </div>
        ))}
      </div>
    </div>
  );
}
