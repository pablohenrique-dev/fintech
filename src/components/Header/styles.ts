import { css, styled } from "styled-components";

const gridLayout = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const gap = css`
  gap: 3.2rem;
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  ${gap};
`;

export const HeaderFirstLine = styled.div`
  ${gridLayout};
  ${gap};
`;

export const DateSelectorContainer = styled.div`
  background: ${(props) => props.theme["bg-900"]};
  ${gap};
  border-radius: 4px;
  padding: 3.2rem;
  ${gridLayout};
`;

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props) => props.theme["bg-900"]};
  padding: 3.2rem;
  border-radius: 4px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  text-transform: capitalize;
  color: ${(props) => props.theme["text-400"]};
`;

export const MonthsButtonContainer = styled.div`
  display: flex;
  ${gap};
`;

export const Amount = styled.span`
  font-size: 3.8rem;
  color: ${(props) => props.theme["white"]};
`;
