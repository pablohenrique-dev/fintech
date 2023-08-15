import React from "react";
import { Summary } from "../../components/Summary/Index";
import { SummaryContainer } from "./styles";
import { sumValues } from "../../components/utils/sumValues";
import { SalesContext } from "../../contexts/SalesContext";
import { PageContainer } from "../../styles/global";
import { Loading } from "../../components/Loading/Index";

export const Resumo = () => {
  const { data, loading } = React.useContext(SalesContext);

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

  if (loading)
    return (
      <div style={{ width: "100%" }}>
        <Loading />
      </div>
    );
  if (data)
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
