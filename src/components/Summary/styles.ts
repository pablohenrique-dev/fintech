import { styled } from "styled-components";

export const SummaryElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props) => props.theme["bg-900"]};
  padding: 2.4rem;
  border-radius: 4px;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  text-transform: capitalize;
  color: ${(props) => props.theme["text-400"]};
  padding-bottom: 1.6rem;
`;

export const Amount = styled.span`
  font-size: 3.2rem;
  color: ${(props) => props.theme["white"]};
`;
