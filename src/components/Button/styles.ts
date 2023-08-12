import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: ${(props) => props.theme["bg-900"]};
  width: 100%;
  color: ${(props)=> props.theme["text-400"]};
  cursor: pointer;
  padding: 1.6rem 0;
  font-size: 1.8rem;
  border-radius: 4px;
  border: none;

  &:hover{
    background: ${(props) => props.theme["bg-700"]};
  }
`;
