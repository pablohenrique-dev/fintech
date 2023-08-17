import React from "react";
import { SalesContext } from "../../contexts/SalesContext";
import { PageContainer } from "../../styles/global";
import { NavLink } from "./styles";
import { priceFormatter } from "../../components/utils/formatter";
import { Loading } from "../../components/Loading/Index";
import { Head } from "../../components/Head/Index";
import { Message } from "../../components/Message/Index";

export const Vendas = () => {
  const { data, loading, error } = React.useContext(SalesContext);

  if (loading)
    return (
      <div style={{ width: "100%" }}>
        <Loading />
      </div>
    );
  if (error)
    return (
      <PageContainer>
        <Message>{error}</Message>
      </PageContainer>
    );
  if (data)
    return (
      <PageContainer>
        <Head
          title="Vendas"
          description="Tenha acesso à todas as vendas que foram realizadas nos últimos 4 meses"
        />
        {data &&
          data.map((venda) => (
            <NavLink key={venda.id} to={venda.id}>
              <span>{venda.id}</span>
              <p>{venda.nome}</p>
              <p>{priceFormatter.format(venda.preco)}</p>
            </NavLink>
          ))}
        {data?.length === 0 && (
          <Message>Nenhuma venda realizada nesta data! 😅</Message>
        )}
      </PageContainer>
    );
};
