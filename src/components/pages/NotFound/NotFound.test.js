import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";

describe("NotFound component", () => {
    it("should render NotFound component when invalid path", () => {
        render(
            <MemoryRouter initialEntries={["/invalid-path"]}>
                <Routes>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </MemoryRouter>
        );
        expect(screen.getByText("404 Not Found...")).toBeInTheDocument();
    });
});