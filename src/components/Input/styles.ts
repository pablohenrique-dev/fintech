import { styled } from "styled-components";

export const InputDate = styled.input`
  background: ${(props) => props.theme["bg-700"]};
  padding: 1rem;
  color: ${(props) => props.theme["text-400"]};
  font-size: 1.6rem;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;

  &:focus {
    /* border: 3px solid #007bff; */
    box-shadow: 0 0 0 2px ${(props) => props.theme["primary-300"]};
    outline: none;
  }

  &::-webkit-calendar-picker-indicator {
    background-color: #ffffff;
    padding: 5px;
    cursor: pointer;
    border-radius: 3px;
  }
`;

export const Label = styled.label`
  color: ${(props) => props.theme["text-400"]};
  font-size: 1.8rem;
  display: block;
  margin-bottom: 2.4rem;
  cursor: pointer;
`;
