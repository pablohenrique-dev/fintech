import { Vendas } from "../../pages/Resumo/Index";

export function sumValues(data: Vendas[] | undefined, condition: (value: Vendas) => boolean , initialValue: number) {
  return data?.reduce((acc, value) => {
    if (condition(value)) {
      return acc + value.preco;
    } else {
      return acc;
    }
  }, initialValue);
}