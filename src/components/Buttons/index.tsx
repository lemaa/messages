import React from "react";
import { IProps } from "./Button";

const Button: React.FunctionComponent<IProps> = ({buttonType, classIdentifier, children, onClick}: IProps) => {
 
    return (
      <button
        type={buttonType}
        className={classIdentifier}
        onClick={onClick}
      >
        {children}
      </button>
    );
};
export { Button };
