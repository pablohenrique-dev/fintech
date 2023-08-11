import { Logo } from "../Logo/Index";
import { SidebarContainer, StyledNavLink, StyledLink } from "./styles";
import {
  EnvelopeSimple,
  Gear,
  House,
  Storefront,
  WebhooksLogo,
} from "@phosphor-icons/react";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo />
      <nav>
        <StyledNavLink to="/">
          <House size={24} />
          Resumo
        </StyledNavLink>
        <StyledNavLink to="/vendas">
          <Storefront size={24} />
          Vendas
        </StyledNavLink>
        <StyledLink>
          <WebhooksLogo size={24} />
          Webhooks
        </StyledLink>
        <StyledLink>
          <Gear size={24} />
          Configurações
        </StyledLink>
        <StyledLink>
          <EnvelopeSimple size={24} />
          Contato
        </StyledLink>
      </nav>
    </SidebarContainer>
  );
};
