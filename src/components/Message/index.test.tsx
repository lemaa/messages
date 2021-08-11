import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";
import { render } from "../../../test/utils";
import { Message } from "./index";

afterEach(cleanup);
jest.useFakeTimers();
const message = {
  _id: "6114127ad4c9d66928be01d3",
  message: "zedzedz",
  isMessagePrivate: true,
  createdAt: new Date(),
};
test("<Message />", () => {
 
    render(
        <Message message={message}/>
    );
});
