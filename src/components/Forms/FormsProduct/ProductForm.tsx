import { DataTable } from "@/Interface/Itable";
import { Dispatch, SetStateAction } from "react";
interface IProducutForm {
  dataTable: DataTable | null;
  setDataTable: Dispatch<SetStateAction<DataTable | null>>;
}

export default function FormsProduct({
  dataTable,
  setDataTable,
}: IProducutForm) {
  return (
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
              ID: Number(e.target.value), // pega o valor do input e atribui a um campo do objeto
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
  );
}
