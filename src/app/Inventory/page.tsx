import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import InventoryTable from "@/app/Inventory/InventoryTable";


export default async function Page() {
    const session = await getServerSession();

    if(!session) {
        redirect("/");
    }

    return (
    <>
     <InventoryTable />  
    </>  
    );
  }

