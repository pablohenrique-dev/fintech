import { Header } from "../../components/Header/Index";
import { Summary } from "../../components/Summary/Index";
import { Container } from "../../components/utils/styles";
import { SummaryContainer } from "./styles";

export const Resumo = () => {
  return (
    <Container>
      <Header />
      <SummaryContainer>
        <Summary title="Vendas" amount={2567.56} />
        <Summary title="Recebido" amount={2567.56} />
        <Summary title="Processando" amount={2567.56} />
      </SummaryContainer>
    </Container>
  );
};
