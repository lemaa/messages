import React from "react";
import Col from "react-bootstrap/Col";
import { IProps } from "./Header";
import { HeaderStyle, HeaderTitle } from "./Style";

const Header: React.FunctionComponent<IProps> = ({
  title
}: IProps) => {
 
    return (
    <HeaderStyle className="app-header" fluid>
      <HeaderTitle className="header-title">
        <Col>
          <h5 className="font-weight-bold text-center">{title}</h5>
        </Col>
      </HeaderTitle>
    </HeaderStyle>
  );
};
export { Header };
