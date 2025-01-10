"use client";

import data from "@/app/data.json";
import { Modal } from "@/components/Modal";
import { DataTable } from "@/Interface/Itable";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowDown, ArrowLeft } from "lucide-react";
import { useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { LuArrowRight } from "react-icons/lu";

const columns: ColumnDef<(typeof data)[0]>[] = [
  { accessorKey: "ID", header: "ID" },
  { accessorKey: "descricao", header: "Descrição" },
  { accessorKey: "codigo_de_barras", header: "Código de Barras" },
  { accessorKey: "Custo", header: "Custo" },
  { accessorKey: "Preco_de_Venda", header: "Preço de Venda" },
  { accessorKey: "Estoque", header: "Estoque" },
  { accessorKey: "Categoria", header: "Categoria" },
  { accessorKey: "Ofertas", header: "Ofertas" },
  { accessorKey: "descricaoPVD", header: "Descrição PVD" },
  { accessorKey: "NCM", header: "NCM" },
  { accessorKey: "Vinc_Preco", header: "Vinc Preço" },
  { accessorKey: "Marca", header: "Marca" },
  { accessorKey: "Balanca", header: "Balança" },
  { accessorKey: "Embalagem", header: "Embalagem" },
  { accessorKey: "Quantidade_Embalados", header: "Quantidade Embalados" },
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
    <main className="flex flex-col mb-20 mt-4 mx-14 h-full bg-customWhite rounded-md shadow-lg">
      <h1 className="text-xl text-black font-semibold mt-4 ml-4">
        Cadastro de produtos
      </h1>

      <div className="flex items-center justify-between m-6 p-6 bg-customWhite rounded-md shadow-md ">
        <div className="flex items-center gap-5">
          <h1 className="font-bold">Pesquisar</h1>
          <input
            className="input input-info input-sm py-[17px] pl-6"
            placeholder="Digite para pesquisar..."
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
          <div className="text-white bg-customBlue rounded-md py-2 h-fit px-4 cursor-pointer">
            <FaSearch size={20} className="cursor-pointer" />
          </div>
        </div>
        <div
          className={
            "flex items-center gap-5  py-1 h-fit px-2 rounded cursor-pointer"
          }
        >
          <div className="text-white bg-customBlue rounded-md py-2 h-fit px-4 cursor-pointer">
            <IoMdAdd
              size={22}
              onClick={handleOpenModal}
              className="cursor-pointer"
            />{" "}
          </div>
          {table.getCanPreviousPage() && (
            <div className="text-white bg-customBlue rounded-md py-2 h-fit px-4 cursor-pointer">
              <ArrowLeft onClick={() => table.previousPage()} />
            </div>
          )}
          {/* <span>{table.getState().pagination.pageIndex + 1}</span> */}
          {table.getCanNextPage() && (
            <div className="text-white bg-customBlue rounded-md py-2 h-fit px-4 cursor-pointer">
              <LuArrowRight size={22} onClick={() => table.nextPage()} />
            </div>
          )}
        </div>
      </div>
      <div className="overflow-auto w-full h-[80vh]">
        <table className="table">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr className="bg-customBlue text-white" key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    <div className="flex gap-2">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}{" "}
                      <ArrowDown
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
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onClose={handleOpenModal}
        title="Detalhes do Produto"
      >
        {" "}
        {/*Modal que exibe os detalhes do produto*/}
        <div className="w-full flex flex-wrap gap-4 justify-around">
          <div className="flex flex-col">
            <span className="font-semibold">ID</span>
            <input
              className="input input-bordered input-sm"
              type="number"
              placeholder="Digite o ID"
              value={dataTable?.ID}
              onChange={(
                e // ao alterar o valor do input, o valor é armazenado no estado da tabela
              ) =>
                setDataTable({
                  // seta o valor da tabela
                  ...dataTable, // armazena o valor da tabela no estado em que se encontra
                  ID: Number(e.target.value), // pega o valor do input e atribui ao um campo do objeto
                } as DataTable)
              }
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Descrição</span>
            <input
              className="input input-bordered input-sm"
              type="text"
              placeholder="Digite a descrição"
              value={dataTable?.Descricao_PVD}
              onChange={(
                e // ao alterar o valor do input, o valor é armazenado no estado da tabela
              ) =>
                setDataTable({
                  // seta o valor da tabela
                  ...dataTable, // armazena o valor da tabela no estado em que se encontra
                  ID: Number(e.target.value), // pega o valor do input e atribui ao um campo do objeto
                } as DataTable)
              }
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Código de Barras</span>
            <input
              className="input input-bordered input-sm"
              type="number"
              placeholder="Digite o código de barras"
              value={dataTable?.codigo_de_barras}
              onChange={(
                e // ao alterar o valor do input, o valor é armazenado no estado da tabela
              ) =>
                setDataTable({
                  // seta o valor da tabela
                  ...dataTable, // armazena o valor da tabela no estado em que se encontra
                  ID: Number(e.target.value), // pega o valor do input e atribui ao um campo do objeto
                } as DataTable)
              }
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Custo</span>
            <input
              className="input input-bordered input-sm"
              type="text"
              placeholder="Digite o código de barras"
              value={dataTable?.Custo} // esse value é o valor que está no estado da tabela
              onChange={(
                e // ao alterar o valor do input, o valor é armazenado no estado da tabela
              ) =>
                setDataTable({
                  // seta o valor da tabela
                  ...dataTable, // armazena o valor da tabela no estado em que se encontra
                  ID: Number(e.target.value), // pega o valor do input e atribui ao um campo do objeto
                } as DataTable)
              }
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Preço de Venda</span>
            <input
              className="input input-bordered input-sm"
              type="text"
              placeholder="Digite o código de barras"
              value={dataTable?.Preco_de_Venda} // esse value é o valor que está no estado da tabela
              onChange={(
                e // ao alterar o valor do input, o valor é armazenado no estado da tabela
              ) =>
                setDataTable({
                  // seta o valor da tabela
                  ...dataTable, // armazena o valor da tabela no estado em que se encontra
                  ID: Number(e.target.value), // pega o valor do input e atribui ao um campo do objeto
                } as DataTable)
              }
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Estoque</span>
            <input
              className="input input-bordered input-sm"
              type="text"
              placeholder="Digite o código de barras"
              value={dataTable?.Estoque} // esse value é o valor que está no estado da tabela
              onChange={(
                e // ao alterar o valor do input, o valor é armazenado no estado da tabela
              ) =>
                setDataTable({
                  // seta o valor da tabela
                  ...dataTable, // armazena o valor da tabela no estado em que se encontra
                  ID: Number(e.target.value), // pega o valor do input e atribui ao um campo do objeto
                } as DataTable)
              }
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Categoria</span>
            <input
              className="input input-bordered input-sm"
              type="text"
              placeholder="Digite o código de barras"
              value={dataTable?.Categoria} // esse value é o valor que está no estado da tabela
              onChange={(
                e // ao alterar o valor do input, o valor é armazenado no estado da tabela
              ) =>
                setDataTable({
                  // seta o valor da tabela
                  ...dataTable, // armazena o valor da tabela no estado em que se encontra
                  ID: Number(e.target.value), // pega o valor do input e atribui ao um campo do objeto
                } as DataTable)
              }
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Oferta</span>
            <input
              className="input input-bordered input-sm"
              type="text"
              placeholder="Digite o código de barras"
              value={dataTable?.Ofertas} // esse value é o valor que está no estado da tabela
              onChange={(
                e // ao alterar o valor do input, o valor é armazenado no estado da tabela
              ) =>
                setDataTable({
                  // seta o valor da tabela
                  ...dataTable, // armazena o valor da tabela no estado em que se encontra
                  ID: Number(e.target.value), // pega o valor do input e atribui ao um campo do objeto
                } as DataTable)
              }
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Descrição PDV</span>
            <input
              className="input input-bordered input-sm"
              type="text"
              placeholder="Digite o código de barras"
              value={dataTable?.Descricao_PVD} // esse value é o valor que está no estado da tabela
              onChange={(
                e // ao alterar o valor do input, o valor é armazenado no estado da tabela
              ) =>
                setDataTable({
                  // seta o valor da tabela
                  ...dataTable, // armazena o valor da tabela no estado em que se encontra
                  ID: Number(e.target.value), // pega o valor do input e atribui ao um campo do objeto
                } as DataTable)
              }
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">NCM</span>
            <input
              className="input input-bordered input-sm"
              type="text"
              placeholder="Digite o código de barras"
              value={dataTable?.NCM} // esse value é o valor que está no estado da tabela
              onChange={(
                e // ao alterar o valor do input, o valor é armazenado no estado da tabela
              ) =>
                setDataTable({
                  // seta o valor da tabela
                  ...dataTable, // armazena o valor da tabela no estado em que se encontra
                  ID: Number(e.target.value), // pega o valor do input e atribui ao um campo do objeto
                } as DataTable)
              }
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Estoque</span>
            <input
              className="input input-bordered input-sm"
              type="text"
              placeholder="Digite o código de barras"
              value={dataTable?.Estoque} // esse value é o valor que está no estado da tabela
              onChange={(
                e // ao alterar o valor do input, o valor é armazenado no estado da tabela
              ) =>
                setDataTable({
                  // seta o valor da tabela
                  ...dataTable, // armazena o valor da tabela no estado em que se encontra
                  ID: Number(e.target.value), // pega o valor do input e atribui ao um campo do objeto
                } as DataTable)
              }
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Vinc Preço</span>
            <input
              className="input input-bordered input-sm"
              type="text"
              placeholder="Digite o código de barras"
              value={dataTable?.Vinc_Preco} // esse value é o valor que está no estado da tabela
              onChange={(
                e // ao alterar o valor do input, o valor é armazenado no estado da tabela
              ) =>
                setDataTable({
                  // seta o valor da tabela
                  ...dataTable, // armazena o valor da tabela no estado em que se encontra
                  ID: Number(e.target.value), // pega o valor do input e atribui ao um campo do objeto
                } as DataTable)
              }
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Marca</span>
            <input
              className="input input-bordered input-sm"
              type="text"
              placeholder="Digite o código de barras"
              value={dataTable?.Marca} // esse value é o valor que está no estado da tabela
              onChange={(
                e // ao alterar o valor do input, o valor é armazenado no estado da tabela
              ) =>
                setDataTable({
                  // seta o valor da tabela
                  ...dataTable, // armazena o valor da tabela no estado em que se encontra
                  ID: Number(e.target.value), // pega o valor do input e atribui ao um campo do objeto
                } as DataTable)
              }
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Balança</span>
            <input
              className="input input-bordered input-sm"
              type="text"
              placeholder="Digite o código de barras"
              value={dataTable?.Balanca} // esse value é o valor que está no estado da tabela
              onChange={(
                e // ao alterar o valor do input, o valor é armazenado no estado da tabela
              ) =>
                setDataTable({
                  // seta o valor da tabela
                  ...dataTable, // armazena o valor da tabela no estado em que se encontra
                  ID: Number(e.target.value), // pega o valor do input e atribui ao um campo do objeto
                } as DataTable)
              }
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Embalagem</span>
            <input
              className="input input-bordered input-sm"
              type="text"
              placeholder="Digite o código de barras"
              value={dataTable?.Embalagem} // esse value é o valor que está no estado da tabela
              onChange={(
                e // ao alterar o valor do input, o valor é armazenado no estado da tabela
              ) =>
                setDataTable({
                  // seta o valor da tabela
                  ...dataTable, // armazena o valor da tabela no estado em que se encontra
                  ID: Number(e.target.value), // pega o valor do input e atribui ao um campo do objeto
                } as DataTable)
              }
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Quantidade de Embalados</span>
            <input
              className="input input-bordered input-sm"
              type="text"
              placeholder="Digite o código de barras"
              value={dataTable?.Quantidade_Embalados} // esse value é o valor que está no estado da tabela
              onChange={(
                e // ao alterar o valor do input, o valor é armazenado no estado da tabela
              ) =>
                setDataTable({
                  // seta o valor da tabela
                  ...dataTable, // armazena o valor da tabela no estado em que se encontra
                  ID: Number(e.target.value), // pega o valor do input e atribui ao um campo do objeto
                } as DataTable)
              }
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Etiquetas</span>
            <input
              className="input input-bordered input-sm"
              type="text"
              placeholder="Digite o código de barras"
              value={dataTable?.Etiqueta} // esse value é o valor que está no estado da tabela
              onChange={(
                e // ao alterar o valor do input, o valor é armazenado no estado da tabela
              ) =>
                setDataTable({
                  // seta o valor da tabela
                  ...dataTable, // armazena o valor da tabela no estado em que se encontra
                  ID: Number(e.target.value), // pega o valor do input e atribui ao um campo do objeto
                } as DataTable)
              }
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Ativo</span>
            <input
              className="input input-bordered input-sm"
              type="text"
              placeholder="Digite o código de barras"
              value={dataTable?.Ativo} // esse value é o valor que está no estado da tabela
              onChange={(
                e // ao alterar o valor do input, o valor é armazenado no estado da tabela
              ) =>
                setDataTable({
                  // seta o valor da tabela
                  ...dataTable, // armazena o valor da tabela no estado em que se encontra
                  ID: Number(e.target.value), // pega o valor do input e atribui ao um campo do objeto
                } as DataTable)
              }
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Bloqueado</span>
            <input
              className="input input-bordered input-sm"
              type="text"
              placeholder="Digite o código de barras"
              value={dataTable?.Bloqueado} // esse value é o valor que está no estado da tabela
              onChange={(
                e // ao alterar o valor do input, o valor é armazenado no estado da tabela
              ) =>
                setDataTable({
                  // seta o valor da tabela
                  ...dataTable, // armazena o valor da tabela no estado em que se encontra
                  ID: Number(e.target.value), // pega o valor do input e atribui ao um campo do objeto
                } as DataTable)
              }
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Empresa</span>
            <input
              className="input input-bordered input-sm"
              type="text"
              placeholder="Digite o código de barras"
              value={dataTable?.Empresa} // esse value é o valor que está no estado da tabela
              onChange={(
                e // ao alterar o valor do input, o valor é armazenado no estado da tabela
              ) =>
                setDataTable({
                  // seta o valor da tabela
                  ...dataTable, // armazena o valor da tabela no estado em que se encontra
                  ID: Number(e.target.value), // pega o valor do input e atribui ao um campo do objeto
                } as DataTable)
              }
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Preço Final</span>
            <input
              className="input input-bordered input-sm"
              type="text"
              placeholder="Digite o código de barras"
              value={dataTable?.Custo_Final} // esse value é o valor que está no estado da tabela
              onChange={(
                e // ao alterar o valor do input, o valor é armazenado no estado da tabela
              ) =>
                setDataTable({
                  // seta o valor da tabela
                  ...dataTable, // armazena o valor da tabela no estado em que se encontra
                  ID: Number(e.target.value), // pega o valor do input e atribui ao um campo do objeto
                } as DataTable)
              }
            />
          </div>
        </div>
      </Modal>
    </main>
  );
}

export default InventoryTable;
