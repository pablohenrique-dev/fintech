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
import { SalesContext } from "../../contexts/SalesContext";

export const Header = () => {
  const { state, dispatch } = React.useContext(SalesContext);

  const { pathname } = useLocation();
  const location = pathname === "/" ? "resumo" : pathname.replace("/", "");

  const handleChangeInicio: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    dispatch({ type: "SET_INICIO", payload: e.target.value });
  };

  const handleChangeFinal: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch({ type: "SET_FINAL", payload: e.target.value });
  };

  return (
    <HeaderContainer>
      <HeaderFirstLine>
        <DateSelectorContainer>
          <Input
            type="date"
            value={state?.inicio}
            onChange={handleChangeInicio}
            label="Início"
          />
          <Input
            type="date"
            value={state?.final}
            onChange={handleChangeFinal}
            label="Final"
          />
        </DateSelectorContainer>
        <Summary title={location} />
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
