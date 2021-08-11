import axios from 'axios';
import { Message } from "../models/Message";
import { MessageActionTypes } from "./actionTypes";
import { MESSAGE_ENDPOINT } from '../constants';

export type MessageAction = {
    type: MessageActionTypes;
    payload?: Message;
};

export const createMessageDispatch = (message: Message) =>
{
    return {
        type: MessageActionTypes.FETCH_MESSAGES,
        payload: message
    };
};

export const fetchMessageDispatch = (messages: Message[]) =>
{
    return {
        type: MessageActionTypes.FETCH_MESSAGES,
        payload: messages
    };
};

export const createMessage = (message: Message) => {
    return async (dispatch: React.Dispatch<MessageAction>) => {
        try {
            const response = await axios.post(`${MESSAGE_ENDPOINT}/create`, message);
            dispatch(createMessageDispatch(response.data.message));
        }
        catch (error) {
            throw (error);
        }
    };
};

export const fetchAllMessages =  async (dispatch: any) => {
    try {
        const response = await axios.get(`${MESSAGE_ENDPOINT}/messages`);

            return dispatch(fetchMessageDispatch(response.data));
        }
        catch (error) {
            throw (error);
        }
    };
