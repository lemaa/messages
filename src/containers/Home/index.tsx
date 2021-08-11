
import React, { useEffect, useRef } from "react";
import Col from "react-bootstrap/Col";
import { Message as MsgComponent } from "../../components/Message";
import { MessageForm } from "../../components/MessageForm";
import { fetchAllMessages, createMessage } from "../../actions/messageActions";
import { useMessageState, useMessageDispatch } from "../../context/Messages";
import { Message } from "../../models/Message";
import {
  MainContainer,
  NoMessages,
  MessageSection,
  FormSection,
} from "./style";


const Home: React.FunctionComponent = () => {

    const listMessages = useMessageState();
    const dispatch = useMessageDispatch();
    const CreateMessageHandler = (data: {
      text: string;
      isMessagePrivate: number | string;
    }) => {

        const message = {
          message: data.text,
          isMessagePrivate: data.isMessagePrivate === 1 ? true : false,
        };
      createMessage(message, dispatch);
    };

  React.useEffect(() => {
      listMessages.length === 0 && fetchAllMessages(dispatch);
  }, [dispatch, listMessages]);

  return (
    <MainContainer className="main-section" fluid>
      <MessageSection>
        <Col>
          {listMessages.length > 0 &&
            listMessages.map((message: Message, index) => (
              <MsgComponent
                key={index.toString()}
                message={message}
              ></MsgComponent>
            ))}

          {listMessages.length === 0 && (
            <NoMessages>No messages to display :(</NoMessages>
          )}
        </Col>
      </MessageSection>
      <FormSection>
        <Col>
          <MessageForm onSubmit={CreateMessageHandler} />
        </Col>
      </FormSection>
    </MainContainer>
  );
};

export { Home };