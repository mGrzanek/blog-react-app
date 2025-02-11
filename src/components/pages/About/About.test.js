import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import About from "./About";

describe("About component", () => {
    it("should render without crashing", () => {
        render(<About />);
        const aboutTestId = screen.getByTestId("about-section");
        expect(aboutTestId).toBeInTheDocument();
    });
});