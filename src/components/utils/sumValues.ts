import { ISale } from "../../@types/global";

export function sumValues(
  data: ISale[] | undefined,
  condition: (value: ISale) => boolean,
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
