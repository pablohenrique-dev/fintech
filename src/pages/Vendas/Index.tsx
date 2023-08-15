import React from "react";
import { SalesContext } from "../../contexts/SalesContext";
import { PageContainer } from "../../styles/global";
import { Message, NavLink } from "./styles";
import { priceFormatter } from "../../components/utils/formatter";
import { Loading } from "../../components/Loading/Index";

export const Vendas = () => {
  const { data, loading } = React.useContext(SalesContext);

  if (loading)
    return (
      <div style={{ width: "100%" }}>
        <Loading />
      </div>
    );
  if (data)
    return (
      <PageContainer>
        {data &&
          data.map((venda) => (
            <NavLink key={venda.id} to={venda.id}>
              <span>{venda.id}</span>
              <p>{venda.nome}</p>
              <p>{priceFormatter.format(venda.preco)}</p>
            </NavLink>
          ))}
        {data?.length === 0 && (
          <Message>Nenhuma venda realizada nesta data!</Message>
        )}
      </PageContainer>
    );
};
