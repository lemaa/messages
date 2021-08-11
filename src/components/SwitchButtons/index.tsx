import React from "react";
import { ToggleContainer, ToggleChild } from "./Style";
import { IProps } from "./SwitchButton";

const SwitchButtons: React.FunctionComponent<IProps> = ({buttonType, nameIdentifier, options, value, onChange}: IProps) => {


    return (
      <ToggleContainer
        type={buttonType}
        name={nameIdentifier}
        value={value}
        onChange={onChange}
      >
        {options &&
          options.map((option: any, index) => {
            return (
              <ToggleChild
                key={index.toString()}
                value={option.value}
                id={index.toString()}
                variant={"dark"}
                className={ value === option.value ?" active" : ""}
              >
                {option.text}
              </ToggleChild>
            );
          })}
      </ToggleContainer>
    );
};
export { SwitchButtons };
