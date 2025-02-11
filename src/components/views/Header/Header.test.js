import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

describe("Header component", () => {
    it("should render without crashing", () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );
        const headerTestId = screen.getByTestId("header");
        expect(headerTestId).toBeInTheDocument();
    });
});