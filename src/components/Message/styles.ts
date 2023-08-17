import { styled } from "styled-components";
import { fadeRight } from "../../styles/global";

export const MessageComponent = styled.h1`
  font-size: 3.2rem;
  font-weight: 400;
  color: ${(props) => props.theme.white};
  animation: ${fadeRight} 0.3s forwards;
`;
