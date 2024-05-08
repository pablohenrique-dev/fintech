export interface ISale {
  id: string;
  nome: string;
  status: "falha" | "pago" | "processando";
  preco: number;
  pagamento: string;
  parcelas: number | null;
  data: string;
}