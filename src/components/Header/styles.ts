import { css, styled } from "styled-components";

const gridLayout = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const gap = css`
  gap: 2.4rem;
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
  padding: 2.4rem;
  ${gridLayout};
`;

export const MonthsButtonContainer = styled.div`
  display: flex;
  ${gap};
`;

