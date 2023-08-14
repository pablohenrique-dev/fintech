import React from "react";
import { Header } from "../../components/Header/Index";
import { Summary } from "../../components/Summary/Index";
import { Container } from "../../components/utils/styles";
import { useFetch } from "../../hooks/useFetch";
import { SummaryContainer } from "./styles";
import { BASE_URL } from "../../components/utils/api";
import { sumValues } from "../../components/utils/sumValues";

export interface Vendas {
  id: string;
  nome: string;
  status: "falha" | "pago" | "processando";
  preco: number;
  pagamento: string;
  parcelas: number | null;
  data: string;
}

interface State {
  inicio: string;
  final: string;
}

export type Action =
  | { type: "SET_INICIO"; payload: string }
  | { type: "SET_FINAL"; payload: string };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_INICIO":
      return {
        ...state,
        inicio: action.payload,
      };
    case "SET_FINAL":
      return {
        ...state,
        final: action.payload,
      };
    default:
      return state;
  }
}

export const Resumo = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    inicio: "",
    final: "",
  });

  const URL = `${BASE_URL}/?inicio=${state.inicio}&final=${state.final}`;

  const { data, error, loading } = useFetch<Vendas[]>(URL);

  const sales = data
    ? sumValues(
        data,
        (value) => value.status === "pago" || value.status === "processando",
        0
      )
    : 0;

  const received = data
    ? sumValues(data, (value) => value.status === "pago", 0)
    : 0;

  const processing = data
    ? sumValues(data, (value) => value.status === "processando", 0)
    : 0;

  return (
    <Container>
      <Header state={state} dispatch={dispatch} />
      <SummaryContainer>
        {sales && <Summary title="Vendas" amount={sales} />}
        {received && <Summary title="Recebido" amount={received} />}
        {processing && <Summary title="Processando" amount={processing} />}
      </SummaryContainer>
    </Container>
  );
};
