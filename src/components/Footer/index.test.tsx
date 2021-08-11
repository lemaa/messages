import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";
import { render } from "../../../test/utils";
import { Footer } from "./index";

afterEach(cleanup);
jest.useFakeTimers();

test("<Footer />", () => {
 
    render(
      <Footer>
        <p>Footer</p>
      </Footer>
    );
});
