import { Sidebar } from "./components/Sidebar/Index";
import { Routes, Route } from "react-router-dom";

import { Resumo } from "./pages/Resumo/Index";
import { Vendas } from "./pages/Vendas/Index";
import { Header } from "./components/Header/Index";
import { SalesContextProvider } from "./contexts/SalesContext";
import { AppContainer } from "./styles/global";
import { Venda } from "./pages/Venda/Index";

function App() {
  return (
    <>
      <AppContainer>
        <Sidebar />
        <SalesContextProvider>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Resumo />} />
              <Route path="/vendas" element={<Vendas />} />
              <Route path="/vendas/:id" element={<Venda />} />
            </Routes>
          </div>
        </SalesContextProvider>
      </AppContainer>
    </>
  );
}

export default App;
