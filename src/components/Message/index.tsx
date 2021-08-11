import React from "react";
import Col from "react-bootstrap/Col";
import ReadMoreReact from "read-more-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faUser } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { IProps } from "./Message";
import { MessageContainer, TextRow, DateRow} from "./Style";

const Message: React.FunctionComponent<IProps> = ({
  message
}: IProps) => {
 
    return (
      <MessageContainer id={message._id}>
        <TextRow>
          <Col>
            {message.message ? (
              <ReadMoreReact
                text={message.message}
                min={300}
                ideal={350}
                max={400}
                readMoreText="Read more"
              />
            ) : null}
          </Col>
        </TextRow>
        <DateRow>
          <Col>
            {message.isMessagePrivate ? (
              <FontAwesomeIcon icon={faUser} size="xs" />
            ) : (
              <FontAwesomeIcon icon={faUsers} size="xs" />
            )}
            <small> {moment(message.createdAt).fromNow()} </small>
          </Col>
        </DateRow>
      </MessageContainer>
    );
};
export { Message };
