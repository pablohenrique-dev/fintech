import React from "react";
import { SalesContext } from "../../contexts/SalesContext";
import { PageContainer } from "../../styles/global";

export const Vendas = () => {
  const { data } = React.useContext(SalesContext);

  return (
    <PageContainer>
      <ul>
        {data &&
          data.map((venda) => {
            if (venda.status !== "falha")
              return (
                <li key={venda.id}>
                  <h2>{venda.nome}</h2>
                </li>
              );
          })}
      </ul>
      {data?.length === 0 && <h1>Nenhuma venda realizada nesta data!</h1>}
    </PageContainer>
  );
};
