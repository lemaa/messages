import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";
import { render } from "../../../test/utils";
import { Button } from "./index";

afterEach(cleanup);
jest.useFakeTimers();

test("<Button />", () => {
    const onClick = jest.fn();

    render(
        <Button
            buttonType="button"
            classIdentifier="class"
            onClick={onClick}
        ><span>Button</span></Button>
    );
});
