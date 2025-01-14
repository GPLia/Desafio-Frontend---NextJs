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
  PiFunnelFill,
  PiMagnifyingGlassBold,
  PiPencilSimpleFill,
  PiPlusBold,
  PiTrashSimpleFill,
  PiXBold,
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
    <main
      className="flex flex-col  px-20 py-6 h-[100vh] w-screen bg-customWhite
      max-sm:text-start max-md:p-3 max-md:text-center max-md:w-full max-md:fixed "
    >
      <div
        className="bg-customWhite px-6 h-full w-full mx-auto rounded-md shadow-custom
        max-md:min-w-full"
      >
        <h1
          className="text-xl text-black font-semibold my-6
          max-md:text-sm"
        >
          Cadastro de produtos
        </h1>

        <div
          className="flex items-center justify-between px-6 py-4 bg-customWhite rounded-md shadow-custom
          max-md:flex-col max-md:px-3 max-md:text-start max-md:text-xs"
        >
          <div
            className="flex items-center gap-5
            max-md:flex max-md:flex-wrap max-md:w-auto"
          >
            <h1
              className="font-bold text-[0.9rem] 
                max-md:text-[0.7rem]"
            >
              Pesquisar
            </h1>
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
              "flex items-center gap-5 py-1 h-fit px-2 rounded cursor-pointer"
            }
          >
            <div className="text-white bg-customBlue hover:bg-black transition-all duration-300 rounded-md py-2 h-fit px-4 cursor-pointer">
              <PiPlusBold
                onClick={handleOpenModal}
                className="cursor-pointer"
              />{" "}
            </div>
            <div className="text-white bg-customBlue hover:bg-black transition-all duration-300 rounded-md py-2 h-fit px-4 cursor-pointer">
              <PiFunnelFill
                // onClick={handleOpenModal}
                className="cursor-pointer"
              />
            </div>
            {table.getCanPreviousPage() && (
              <div className="text-white bg-customBlue hover:bg-black transition-all duration-300 rounded-md py-2 h-fit px-4 cursor-pointer">
                <PiArrowLeftBold onClick={() => table.previousPage()} />
              </div>
            )}
            {/* <span>{table.getState().pagination.pageIndex + 1}</span> */}
            {table.getCanNextPage() && (
              <div className="text-white bg-customBlue hover:bg-black transition-all duration-300 rounded-md py-2 h-fit px-4 cursor-pointer">
                <PiArrowRightBold onClick={() => table.nextPage()} />
              </div>
            )}
          </div>
        </div>
        <div className="bg-white overflow-auto md: h-[70vh] w-full mt-5 scrollbar-thin scrollbar-thumb-[#cddbfa] scrollbar-track-[#f5f7fc]   scrollbar-corner-white ">
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
                  className="text-[12px]"
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
        <div className="flex flex-col gap-4">
          <div
            className="flex px-10 py-2 h-[50vh] w-full shadow-custom bg-white rounded-md
               max-lg:h-full max-md:h-full"
          >
            <FormsProduct setDataTable={setDataTable} dataTable={dataTable} />
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="text-white bg-customBlue hover:bg-black transition-all duration-300 rounded-md py-2 h-fit px-4 cursor-pointer">
              <PiPlusBold className="cursor-pointer" />
            </div>
            <div className="text-white bg-customBlue hover:bg-black transition-all duration-300 rounded-md py-2 h-fit px-4 cursor-pointer">
              <PiFunnelFill className="cursor-pointer" />
            </div>
            <div className="text-white bg-customBlue hover:bg-black transition-all duration-300 rounded-md py-2 h-fit px-4 cursor-pointer">
              <PiXBold className="cursor-pointer" />
            </div>
            <div className="text-white bg-customBlue hover:bg-black transition-all duration-300 rounded-md py-2 h-fit px-4 cursor-pointer">
              <PiTrashSimpleFill className="cursor-pointer" />
            </div>
            <div className="text-white bg-customBlue hover:bg-black transition-all duration-300 rounded-md py-2 h-fit px-4 cursor-pointer">
              <PiPencilSimpleFill className="cursor-pointer" />
            </div>
          </div>
        </div>
      </Modal>
    </main>
  );
}

export default InventoryTable;
