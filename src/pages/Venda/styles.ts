import { styled } from "styled-components";

export const Display = styled.div`
  background: ${props=> props.theme["bg-900"]};
  padding: 1.6rem 2.4rem; 
  color: ${props=> props.theme.white};
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 2.4rem;

  span {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.6rem;
    color: ${props=> props.theme["text-500"]};
  }
`;