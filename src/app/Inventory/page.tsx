import InventoryTable from "@/app/Inventory/InventoryTable";
import { getServerSession } from "next-auth"; // importa a função getServerSession que obtem dados do serverside
import { redirect } from "next/navigation"; // função que redireciona o usuário para outra página

export default async function Page() {
  // Servidor Side Rendering
  const session = await getServerSession();

  if (!session) {
    redirect("/");
  }

  return (
    <>
      <InventoryTable />
    </>
  );
}
