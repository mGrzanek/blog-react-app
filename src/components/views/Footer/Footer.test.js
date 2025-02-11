import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from "react-router-dom";
import FooterPage from "./Footer";

describe("Footer component", () => {
    it("should render without crashing", () => {
        render(
            <MemoryRouter>
                <FooterPage />
            </MemoryRouter>
        );
        const footerElement = screen.getByTestId('footer-section');
        expect(footerElement).toBeInTheDocument();
        expect(footerElement).toHaveTextContent("Copyright © BlogApp 2025");
    });
});