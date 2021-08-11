import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IProps } from "./Footer";
import { FooterStyle } from "./Style";

const Footer: React.FunctionComponent<IProps> = ({
  children
}: IProps) => {

  return (
    <FooterStyle className="container-fluid">
      <Row className="footer-title">
        <Col>{children}</Col>
      </Row>
    </FooterStyle>
  );
};
export { Footer };
