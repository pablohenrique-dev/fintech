import React from "react";
import { useFetch } from "../hooks/useFetch";
import { BASE_URL } from "../components/utils/api";
import { IVenda } from "../@types/global";
import { dateNow } from "../components/utils/time";

interface State {
  inicio: string;
  final: string;
}

type Action =
  | { type: "SET_INICIO"; payload: string }
  | { type: "SET_FINAL"; payload: string };

interface ISales {
  data: IVenda[] | null;
  loading: boolean;
  error: string | null;
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const SalesContext = React.createContext<ISales>({} as ISales);

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

  const URL = `${BASE_URL}/?inicio=${state.inicio}&final=${state.final}`;

  const { data, loading, error } = useFetch<IVenda[]>(URL);

  return (
    <SalesContext.Provider value={{ data, loading, error, state, dispatch }}>
      {children}
    </SalesContext.Provider>
  );
};
