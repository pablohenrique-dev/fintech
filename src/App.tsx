import { Sidebar } from "./components/Sidebar/Index";
import { Routes, Route } from "react-router-dom";
import { Resumo } from "./pages/Resumo/Index";

import { styled } from "styled-components";
import { Vendas } from "./pages/Vendas/Index";

const Container = styled.div`
  display: grid;
  grid-template-columns: 28rem 1fr;
  gap: 4rem;
`;

function App() {
  return (
    <>
      <Container>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Resumo />} />
          <Route path="/vendas" element={<Vendas />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
