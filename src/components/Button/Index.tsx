import React from "react";
import { ButtonContainer } from "./styles";

export const Button = ({ children }: React.PropsWithChildren) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};
