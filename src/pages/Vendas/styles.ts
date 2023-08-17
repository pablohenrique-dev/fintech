import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
  background: ${(props) => props.theme["bg-700"]};
  width: 100%;
  color: ${(props) => props.theme["text-400"]};
  cursor: pointer;
  padding: 1.6rem 2.4rem;
  font-size: 1.8rem;
  border-radius: 4px;
  border: none;
  transition: 0.2s;
  display: grid;
  align-items: center;
  grid-template-columns: 30% 60% auto;

  &:hover {
    background: ${(props) => props.theme["bg-900"]};
  }

  span {
    font-size: 1.2rem;
  }

  @media (max-width: 1088px) {
    grid-template-columns: 50% 30% auto;
  }
`;

