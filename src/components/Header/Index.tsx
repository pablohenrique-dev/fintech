import React from "react";
import { useLocation } from "react-router-dom";
import { Input } from "../Input/Index";
import {
  HeaderContainer,
  DateSelectorContainer,
  HeaderFirstLine,
  MonthsButtonContainer,
} from "./styles";
import { Button } from "../Button/Index";
import { Summary } from "../Summary/Index";

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
        <Summary title={location} amount={total} />
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
