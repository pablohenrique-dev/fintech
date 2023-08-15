import { styled, keyframes } from "styled-components";

const Loading = keyframes`
  from{
    transform: rotateZ(0deg)
  }
  to{
    transform: rotateZ(360deg)
  }
`;

export const LoadingContainer = styled.div`
  width: 10%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 10px solid ${(props) => props.theme["bg-700"]};
  border-left-color: ${(props) => props.theme["primary-300"]};
  animation: ${Loading} 1s infinite linear;
  margin: 6.4rem auto;
`;
