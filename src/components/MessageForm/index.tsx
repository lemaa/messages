import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from 'react-hook-form';
import { SwitchButtons } from '../SwitchButtons';
import { IProps } from "./MessageForm";
import { Errors, FormContainer } from "./Style";
import { Button } from "../Buttons";

type MessageFormType = {
  text: string;
  isMessagePrivate: number | string;
};

const MessageForm: React.FunctionComponent<IProps> = ({ onSubmit }: IProps) => {
  const [isMessagePrivate, setPrivacyValue] = useState(1);
  const privacyOptions = [
    { value: 0, text: "public" },
    { value: 1, text: "private" },
  ];
    
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<MessageFormType>({
    defaultValues: {
      text: "",
      isMessagePrivate: isMessagePrivate,
    },
  });

    
const submitClickHandler = (data: MessageFormType, e: any) => {
    onSubmit(data);
    reset();
    setValue("isMessagePrivate", isMessagePrivate);

};
  const handlePrivacyChange = (val: any) => {
    setValue("isMessagePrivate", val);
    setPrivacyValue(val);
  };
  return (
    <FormContainer>
      <Row>
        <Col style={{ padding: 0 }}>
          <Form onSubmit={handleSubmit(submitClickHandler)}>
            <Form.Group as={Row} controlId="messageRow">
              <Col xs={12}>
                <Form.Control
                  {...register("text", { required: true })}
                  as="textarea"
                  rows={3}
                />
                {errors.text && <Errors>This field is required</Errors>}
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="buttons" className="float-right">
              <Col xs={12}>
                <Button
                  buttonType="submit"
                  classIdentifier="btn btn-dark"
                >
                  <>Post</>
                </Button>
                <SwitchButtons
                  buttonType={"radio"}
                  nameIdentifier={"privacyOptions"}
                  options={privacyOptions}
                  value={isMessagePrivate}
                  onChange={handlePrivacyChange}
                />
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </FormContainer>
  );
};
export { MessageForm };
