import React from "react";
import { ButtonContainer } from "./styles";

type ButtonProps = React.ComponentProps<"button">;

export const Button = ({ children, ...props }: ButtonProps) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};
