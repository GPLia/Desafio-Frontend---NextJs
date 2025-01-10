export interface DataTable {
  // Interface para a tabela de produtos
  ID: number;
  descricao: string;
  codigo_de_barras: string;
  Custo: number;
  Preco_de_Venda: number;
  Estoque: number;
  Categoria: string;
  Ofertas: string;
  Descricao_PVD: string;
  NCM: string;
  Vinc_Preco: string;
  Marca: string;
  Balanca: string;
  Embalagem: string;
  Quantidade_Embalados: number;
  Etiqueta: string;
  Ativo: string;
  Bloqueado: string;
  Empresa: string;
  Custo_Final: number;
}
