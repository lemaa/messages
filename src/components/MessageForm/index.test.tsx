import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";
import { render } from "../../../test/utils";
import { MessageForm } from "./index";

afterEach(cleanup);
jest.useFakeTimers();

test("<MessageForm />", () => {
   const onSubmit = jest.fn();
    render(<MessageForm onSubmit={onSubmit} />);
});
