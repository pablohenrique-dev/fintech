import { IVenda } from "../../@types/global";

export function sumValues(
  data: IVenda[] | undefined,
  condition: (value: IVenda) => boolean,
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
