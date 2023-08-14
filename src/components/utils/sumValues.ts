import { Vendas } from "../../@types/global";

export function sumValues(
  data: Vendas[] | undefined,
  condition: (value: Vendas) => boolean,
  initialValue: number
) {
  if (data)
    return data.reduce((acc, value) => {
      if (condition(value)) {
        return acc + value.preco;
      } else {
        return acc;
      }
    }, initialValue);
  return initialValue;
}
