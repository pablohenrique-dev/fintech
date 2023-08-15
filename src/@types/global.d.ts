export interface IVenda {
  id: string;
  nome: string;
  status: "falha" | "pago" | "processando";
  preco: number;
  pagamento: string;
  parcelas: number | null;
  data: string;
}