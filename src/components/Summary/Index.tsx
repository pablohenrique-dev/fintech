import { priceFormatter } from "../utils/formatter";
import { Amount, SummaryElement, Title } from "./styles";

interface SummaryProps {
  title: string;
  amount?: number;
}

export const Summary = ({ title, amount }: SummaryProps) => {
  return (
    <SummaryElement>
      <Title>{title}</Title>
      <Amount>{amount && priceFormatter.format(amount)}</Amount>
    </SummaryElement>
  );
};
