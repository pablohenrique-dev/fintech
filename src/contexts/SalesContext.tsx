import React from "react";
import { BASE_URL } from "../components/utils/api";
import { ISale } from "../@types/global";
import { dateNow } from "../components/utils/time";
import { useQuery } from "@tanstack/react-query";

interface State {
  inicio: string;
  final: string;
}

type Action =
  | { type: "SET_INICIO"; payload: string }
  | { type: "SET_FINAL"; payload: string };

interface ISales {
  data: ISale[] | undefined;
  isLoading: boolean;
  error: string | undefined;
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const SalesContext = React.createContext<ISales>({} as ISales);

async function getSales(
  initialDate: string,
  finalDate: string
): Promise<ISale[]> {
  const response = await fetch(
    `${BASE_URL}/?inicio=${initialDate}&final=${finalDate}`
  );

  if (!response.ok) throw new Error("Ocorreu um erro ao buscar as vendas");

  return response.json();
}

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

export const SalesContextProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = React.useReducer(reducer, {
    inicio: dateNow(true),
    final: dateNow(),
  });

  const { data, isFetching, error } = useQuery({
    queryKey: ["sales", state.inicio, state.final],
    queryFn: () => getSales(state.inicio, state.final),
    staleTime: 1000 * 60,
  });

  return (
    <SalesContext.Provider
      value={{
        data,
        isLoading: isFetching,
        error: error?.message,
        state,
        dispatch,
      }}
    >
      {children}
    </SalesContext.Provider>
  );
};
