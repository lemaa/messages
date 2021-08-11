import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";
import { render } from "../../../test/utils";
import { Header } from "./index";

afterEach(cleanup);
jest.useFakeTimers();

test("<Header />", () => {
 
    render(
      <Header title="this is a header"/>
    );
});
