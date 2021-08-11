import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";
import { render } from "../../../test/utils";
import { SwitchButtons } from "./index";

afterEach(cleanup);
jest.useFakeTimers();
 
const options = [
  { value: 0, text: "public" },
  { value: 1, text: "private" },
];
const onChange = jest.fn();
 
test("<SwitchButtons />", () => {
 
    render(
      <SwitchButtons
        options={options}
        buttonType="radio"
        nameIdentifier="class"
        value="1"
        onChange={onChange}
      />
    );
});
