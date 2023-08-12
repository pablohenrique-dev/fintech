import React from "react";
import { useLocation } from "react-router-dom";
import { Input } from "../Input/Index";
import {
  HeaderContainer,
  DateSelectorContainer,
  SummaryContainer,
  Title,
  HeaderFirstLine,
  MonthsButtonContainer,
  Amount,
} from "./styles";
import { Button } from "../Button/Index";
import { priceFormatter } from "../utils/formatter";

export const Header = () => {
  const { pathname } = useLocation();
  const location = pathname === "/" ? "resumo" : pathname.replace("/", "");

  const [total, setTotal] = React.useState(2364.55);

  return (
    <HeaderContainer>
      <HeaderFirstLine>
        <DateSelectorContainer>
          <Input type="date" label="Início" />
          <Input type="date" label="Final" />
        </DateSelectorContainer>
        <SummaryContainer>
          <Title>{location}</Title>
          <Amount>{priceFormatter.format(total)}</Amount>
        </SummaryContainer>
      </HeaderFirstLine>
      <MonthsButtonContainer>
        <Button>Maio</Button>
        <Button>Junho</Button>
        <Button>Julho</Button>
        <Button>Agosto</Button>
      </MonthsButtonContainer>
    </HeaderContainer>
  );
};
