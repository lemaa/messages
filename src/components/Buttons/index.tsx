import React from "react";
import { IProps } from "./Button";
import { ButtonStyle } from "./style"
const Button: React.FunctionComponent<IProps> = ({buttonType, classIdentifier, children, onClick}: IProps) => {
 
    return (
      <ButtonStyle
        type={buttonType}
        className={classIdentifier}
        onClick={onClick}
      >
        {children}
      </ButtonStyle>
    );
};
export { Button };
