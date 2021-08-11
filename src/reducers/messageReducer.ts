import { Message } from "../models/Message";
import { MessageActionTypes } from "../actions/actionTypes";
import { MessageAction } from "../actions/messageActions";

export const messageReducer = (state: Message[], action: MessageAction): any => {
    switch (action.type) {
        case MessageActionTypes.CREATE_MESSAGE:
            return [...state, action.payload];
        case MessageActionTypes.FETCH_MESSAGES:
          return action.payload
        default:
            return state;
    }
};
