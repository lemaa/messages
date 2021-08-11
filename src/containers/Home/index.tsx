
import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
// import moment from "moment";
// import allActions from "../../actions";
import {
  MainContainer,
  NoMessages,
  MessageSection,
  FormSection,
} from "./style";
import { useMessageState } from "../../context/Messages";

const Home: React.FunctionComponent = () => {
   const listMessages = useMessageState();
    console.log(listMessages)

  return (
    <MainContainer className="main-section" fluid>
      <MessageSection>
              <Col>
                  aez
          {/* {messages.length > 0 &&
            messages.map((message) => (
              <Message
                key={message._id.toString()}
                id={message._id}
                text={message.message}
                isMessagePrivate={message.isMessagePrivate}
                createdAt={moment(message.createdAt).fromNow()}
              ></Message>
            ))}
          {messages.length === 0 && (
            <NoMessages>No messages to display :(</NoMessages>
          )}*/}
        </Col> 
      </MessageSection>
      <FormSection>
        <Col>
          {/* <MessageForm submitClickHandler={CreateMessageHandler} /> */}
        </Col>
      </FormSection>
    </MainContainer>
  );
};

export { Home };