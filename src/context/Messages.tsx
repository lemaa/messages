
import * as React from "react";
import { messageReducer } from "../reducers/messageReducer";
import { Message } from "../models/Message"
import { MessageAction } from "../actions/messageActions";

type MessageProviderProps = { children: React.ReactNode };

export const MessageStateContext = React.createContext<
  Message[] | undefined
>(undefined);

export const MessageDispatch = React.createContext<
  React.Dispatch<MessageAction> | undefined
    >(undefined);

const initialState: Message = {
    _id: '',
    text: '',
    isMessagePrivate: false,
    createdAt: new Date()
};

const MessageProvider = ({ children }: MessageProviderProps) => {
    const [state, dispatch] = React.useReducer(messageReducer, initialState);
    return (
        <MessageStateContext.Provider value={state}>
            <MessageDispatch.Provider value={dispatch}>
                {children}
            </MessageDispatch.Provider>
       </MessageStateContext.Provider>
    );
};

const useMessageState = (): Message[] => {
  const context = React.useContext(MessageStateContext);
  if (context === undefined) {
    throw new Error("used must be used within a MessageStateProvider");
  }
  return context;
};

const useMessageDispatch = (): React.Dispatch<MessageAction> => {
  const context = React.useContext(MessageDispatch);
  if (undefined === context) {
    throw new Error("Please use within MessageDispatchProvider");
  }
  return context;
};
export { MessageProvider, useMessageState, useMessageDispatch };