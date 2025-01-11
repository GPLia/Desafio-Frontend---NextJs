"use client";

import data from "@/app/data.json";
import FormsProduct from "@/components/Forms/FormsProduct/ProductForm";
import { Modal } from "@/components/Modal/Modal";
import { DataTable } from "@/Interface/Itable";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import {
  PiArrowDownBold,
  PiArrowLeftBold,
  PiArrowRightBold,
  PiMagnifyingGlassBold,
  PiPlusBold,
} from "react-icons/pi";

const columns: ColumnDef<(typeof data)[0]>[] = [
  { accessorKey: "ID", header: "ID" },
  { accessorKey: "descricao", header: "Descrição" },
  { accessorKey: "codigo_de_barras", header: "Código de Barras" },
  { accessorKey: "Custo", header: "Custo" },
  { accessorKey: "Preco_de_Venda", header: "Preço de Venda" },
  { accessorKey: "Estoque", header: "Estoque" },
  { accessorKey: "Categoria", header: "Categoria" },
  { accessorKey: "Ofertas", header: "Ofertas" },
  { accessorKey: "Descricao_PVD", header: "Descrição PVD" },
  { accessorKey: "NCM", header: "NCM" },
  { accessorKey: "Vinc_Preco", header: "Vinc Preço" },
  { accessorKey: "Marca", header: "Marca" },
  { accessorKey: "Balanca", header: "Balança" },
  { accessorKey: "Embalagem", header: "Embalagem" },
  { accessorKey: "Quantidade_Embalados", header: "Quant Emb" },
  { accessorKey: "Etiqueta", header: "Etiqueta" },
  { accessorKey: "Ativo", header: "Ativo" },
  { accessorKey: "Bloqueado", header: "Bloqueado" },
  { accessorKey: "Empresa", header: "Empresa" },
  { accessorKey: "Custo_Final", header: "Custo Final" },
];

function InventoryTable() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dataTable, setDataTable] = useState<DataTable | null>(null);

  function handleOpenModal() {
    setModalIsOpen(!modalIsOpen);
  }
  const [globalFilter, setGlobalFilter] = useState("");

  const filteredData = useMemo(() => {
    if (!globalFilter) return data;
    return data.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(globalFilter.toLowerCase())
      )
    );
  }, [globalFilter]);

  const table = useReactTable({
    columns,
    data: filteredData,
    state: {
      globalFilter,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: "includesString",
  });

  return (
    <main className="flex flex-col  px-20 py-6 h-[100vh] w-screen bg-customWhite ">
      <div className="bg-customWhite px-6 h-full w-full mx-auto rounded-md shadow-custom">
        <h1 className="text-xl text-black font-semibold my-6">
          Cadastro de produtos
        </h1>

        <div className="flex items-center justify-between px-6 py-4 bg-customWhite rounded-md shadow-custom ">
          <div className="flex items-center gap-5">
            <h1 className="font-bold text-[0.9rem]">Pesquisar</h1>
            <input
              className="input input-info input-xs h-1 py-[17px] pl-6"
              placeholder="Digite para pesquisar..."
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
            />
            <div className="text-white bg-customBlue hover:bg-black transition-all duration-300 rounded-md py-2 h-fit px-4 cursor-pointer">
              <PiMagnifyingGlassBold className="cursor-pointer" />
            </div>
          </div>
          <div
            className={
              "flex items-center gap-5  py-1 h-fit px-2 rounded cursor-pointer"
            }
          >
            <div className="text-white bg-customBlue hover:bg-black transition-all duration-300 rounded-md py-2 h-fit px-4 cursor-pointer">
              <PiPlusBold
                size={22}
                onClick={handleOpenModal}
                className="cursor-pointer"
              />{" "}
            </div>
            {table.getCanPreviousPage() && (
              <div className="text-white bg-customBlue hover:bg-black transition-all duration-300 rounded-md py-2 h-fit px-4 cursor-pointer">
                <PiArrowLeftBold
                  size={22}
                  onClick={() => table.previousPage()}
                />
              </div>
            )}
            {/* <span>{table.getState().pagination.pageIndex + 1}</span> */}
            {table.getCanNextPage() && (
              <div className="text-white bg-customBlue hover:bg-black transition-all duration-300 rounded-md py-2 h-fit px-4 cursor-pointer">
                <PiArrowRightBold size={22} onClick={() => table.nextPage()} />
              </div>
            )}
          </div>
        </div>
        <div className="bg-white overflow-auto h-[70vh] w-full mt-5">
          <table className="table">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr className="bg-customBlue text-white" key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id}>
                      <div className="text-[12px] flex gap-2">
                        {flexRender(
                          // renderiza a tabela
                          header.column.columnDef.header,
                          header.getContext()
                        )}{" "}
                        <PiArrowDownBold
                          size={16}
                          className="cursor-pointer"
                          onClick={() => header.column.toggleSorting(false)}
                        />
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  onClick={() => {
                    setDataTable(row.original); // pega o conteudo da tabela/coluna
                    setModalIsOpen(true); // abre o modal ao clicar na linha
                  }}
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onClose={handleOpenModal}
        title="Detalhes do Produto"
      >
        {" "}
        {/*Modal que exibe os detalhes do produto*/}
        <FormsProduct setDataTable={setDataTable} dataTable={dataTable} />
      </Modal>
    </main>
  );
}

export default InventoryTable;
