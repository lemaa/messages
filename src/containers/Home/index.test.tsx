import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";
import { render } from "../../../test/utils";
import { Home } from "./index";

afterEach(cleanup);
jest.useFakeTimers();

test("<Home />", () => {

    render( <Home/> );
});
