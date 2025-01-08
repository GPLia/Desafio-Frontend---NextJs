'use client';

import { signOut } from "next-auth/react";

export default function LogOutButton() {
 return (
   <button 
   className="btn btn-outline btn-ghost normal-case text-xl" 
   onClick={() => signOut()}>
    Sair
   </button>
 );
}