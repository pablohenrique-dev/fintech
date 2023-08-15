import { css, styled } from "styled-components";
import { fadeRight } from "../../styles/global";

const gridLayout = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  @media (max-width: 1000px){
    grid-template-columns: 1fr;

  }
`;

const gap = css`
  gap: 2.4rem;
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  ${gap};
  padding: 2.4rem 2.4rem 0;
  animation: ${fadeRight} .3s forwards;
`;

export const HeaderFirstLine = styled.div`
  ${gridLayout};
  ${gap};
`;

export const DateSelectorContainer = styled.div`
  background: ${(props) => props.theme["bg-900"]};
  ${gap};
  border-radius: 4px;
  padding: 2.4rem;
  ${gridLayout};
`;

export const MonthsButtonContainer = styled.div`
  display: flex;
  ${gap};
`;

