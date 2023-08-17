import React from "react";
import { MessageComponent } from "./styles";

export const Message = ({ children }: React.PropsWithChildren) => {
  return <MessageComponent>{children}</MessageComponent>;
};
