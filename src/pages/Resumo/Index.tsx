import React from "react";
import { Summary } from "../../components/Summary/Index";
import { SummaryContainer } from "./styles";
import { sumValues } from "../../components/utils/sumValues";
import { SalesContext } from "../../contexts/SalesContext";
import { PageContainer } from "../../styles/global";

export const Resumo = () => {
  const { data } = React.useContext(SalesContext);

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
    <PageContainer>
      <SummaryContainer>
        {sales !== null && <Summary title="Vendas" amount={sales} />}
        {received !== null && <Summary title="Recebido" amount={received} />}
        {processing !== null && (
          <Summary title="Processando" amount={processing} />
        )}
      </SummaryContainer>
    </PageContainer>
  );
};
