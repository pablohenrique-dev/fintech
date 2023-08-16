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
import { findMonths, getDaysInOneMonth } from "../utils/time";

export const Header = () => {
  const [page, setPage] = React.useState("resumo");
  const { state, dispatch } = React.useContext(SalesContext);
  const { pathname } = useLocation();
  const lastFourMonths = findMonths(new Date().getMonth());

  React.useEffect(() => {
    if (pathname === "/") {
      setPage("resumo");
    } else {
      setPage("vendas");
    }
  }, [page, pathname]);

  const handleChangeInicio: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    dispatch({ type: "SET_INICIO", payload: e.target.value });
  };

  const handleChangeFinal: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch({ type: "SET_FINAL", payload: e.target.value });
  };

  function handleButtonMonth(monthIndex: number) {
    const clickedMonth = String(monthIndex + 1).padStart(2, "0");
    const currentYear = new Date().getFullYear();
    const lastDayOfTheMonth = getDaysInOneMonth(currentYear, monthIndex + 1);
    dispatch({
      type: "SET_INICIO",
      payload: `${currentYear}-${clickedMonth}-01`,
    });
    dispatch({
      type: "SET_FINAL",
      payload: `${currentYear}-${clickedMonth}-${lastDayOfTheMonth}`,
    });
  }

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
        <Summary title={page} />
      </HeaderFirstLine>
      <MonthsButtonContainer>
        {lastFourMonths &&
          lastFourMonths.map((month) => (
            <Button onClick={() => handleButtonMonth(month[1])} key={month[1]}>
              {month[0]}
            </Button>
          ))}
      </MonthsButtonContainer>
    </HeaderContainer>
  );
};
