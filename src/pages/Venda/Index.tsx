import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { IVenda } from "../../@types/global";
import { BASE_URL } from "../../components/utils/api";
import { PageContainer } from "../../styles/global";
import { Display } from "./styles";
import { priceFormatter } from "../../components/utils/formatter";
import { Loading } from "../../components/Loading/Index";
import { Message } from "../../components/Message/Index";

export const Venda = () => {
  const { id } = useParams();

  const URL_VENDA = BASE_URL + "/" + id;

  const { data, loading, error } = useFetch<IVenda>(URL_VENDA);

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
        {data && (
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
        )}
      </PageContainer>
    );
};
