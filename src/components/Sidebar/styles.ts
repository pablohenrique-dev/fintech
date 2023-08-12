import { styled, css } from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.aside`
  height: 100vh;
  width: 28rem;
  background: ${(props) => props.theme["bg-900"]};
  position: sticky;
  top: 0;
  padding: 4.8rem 0;
`;

const baseStyles = css`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  color: ${(props) => props.theme["text-400"]};
  font-size: 1.8rem;
  font-weight: 400;
  padding: 1.6rem 3.2rem;
  transition: 0.2s;
  border-left: 6px solid ${(props) => props.theme["bg-900"]}; 
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme["bg-800"]};
    border-color: ${(props) => props.theme["bg-800"]};
  }
`;

export const StyledNavLink = styled(NavLink)`
  ${baseStyles};
  
  &.active {
    background: ${(props) => props.theme["bg-800"]};
    color: ${(props) => props.theme["white"]};
    border-color: ${(props) => props.theme["primary-300"]};
  }
`;

export const StyledLink = styled.a`
  ${baseStyles};
`;