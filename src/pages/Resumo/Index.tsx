import React from "react";
import { Summary } from "../../components/Summary/Index";
import { SummaryContainer } from "./styles";
import { sumValues } from "../../components/utils/sumValues";
import { SalesContext } from "../../contexts/SalesContext";
import { PageContainer } from "../../styles/global";
import { Loading } from "../../components/Loading/Index";
import { Chart } from "../../components/Chart/Index";
import { Head } from "../../components/Head/Index";
import { Message } from "../../components/Message/Index";

export const Resumo = () => {
  const { data, isLoading, error } = React.useContext(SalesContext);

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

  if (isLoading)
    return (
      <div style={{ width: "100%" }}>
        <Loading />
      </div>
    );
  if (data?.length === 0)
    return (
      <PageContainer>
        <Message>
          Nenhuma transação foi realizada no período selecionado! 😅
        </Message>
      </PageContainer>
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
          title="Resumo"
          description="Insights poderosos das estatísticas de vendas da Fintech!"
        />
        <SummaryContainer>
          {sales !== null && <Summary title="Vendas" amount={sales} />}
          {received !== null && <Summary title="Recebido" amount={received} />}
          {processing !== null && (
            <Summary title="Processando" amount={processing} />
          )}
        </SummaryContainer>
        <Chart data={data} />
      </PageContainer>
    );
};
