import { useParams } from "react-router-dom";
import { ISale } from "../../@types/global";
import { BASE_URL } from "../../components/utils/api";
import { PageContainer } from "../../styles/global";
import { Display } from "./styles";
import { priceFormatter } from "../../components/utils/formatter";
import { Loading } from "../../components/Loading/Index";
import { Message } from "../../components/Message/Index";
import { useQuery } from "@tanstack/react-query";

async function getSale(saleId: string | undefined): Promise<ISale> {
  const response = await fetch(`${BASE_URL}/${saleId}`);

  if (!response.ok) throw new Error("Ocorreu um erro ao buscar a venda");

  return response.json();
}

export const Venda = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    enabled: !!id,
    queryKey: ["sale", id],
    queryFn: () => getSale(id),
    staleTime: 1000 * 60,
  });

  if (isLoading)
    return (
      <div style={{ width: "100%" }}>
        <Loading />
      </div>
    );
  if (error)
    return (
      <PageContainer>
        <Message>{error.message}</Message>
      </PageContainer>
    );
  if (data)
    return (
      <PageContainer>
        <>
          <Display>
            <span>ID:</span>
            <p>{data.id}</p>
          </Display>
          <Display>
            <span>Nome:</span>
            <p>{data.nome}</p>
          </Display>
          <Display>
            <span>Preço:</span>
            <p>{priceFormatter.format(data.preco)}</p>
          </Display>
          <Display>
            <span>Status:</span>
            <p>{data.status}</p>
          </Display>
          <Display>
            <span>Pagamento:</span>
            <p>{data.pagamento}</p>
          </Display>
        </>
      </PageContainer>
    );
};
