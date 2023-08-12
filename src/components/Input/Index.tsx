import React from "react";
import { InputDate, Label } from "./styles";

type InputProps = React.ComponentProps<"input"> & {
  label?: string;
};

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <div>
      <Label htmlFor={label}>{label}</Label>
      <InputDate type="text" id={label} {...props} />
    </div>
  );
};
