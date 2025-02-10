import { render } from "@testing-library/react";
import About from "./About";

describe("About component", () => {
    it("should render without crashing", () => {
        render(<About />);
    });
});