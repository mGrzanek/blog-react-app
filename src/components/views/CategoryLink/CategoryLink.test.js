import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import CategoryLink from "./CategoryLink";
import Category from "../Category/Category";

describe("CategoryLink component", () => {
    it("should render without crashing", () => {
        render(
            <MemoryRouter initialEntries={["/categories"]} >
                <Provider store={store}>
                    <CategoryLink id="1" category="News" />
                </Provider>
            </MemoryRouter>
        );
        const currentCategory = screen.getByText("News");
        expect(currentCategory).toBeInTheDocument();
    });
    it("should render Category component when user click on category link", () => {
        render(
            <MemoryRouter initialEntries={["/categories"]} >
                <Provider store={store}>
                    <CategoryLink id="1" category="News" />
                    <Routes>
                        <Route path="/categories/:category" element={<Category />} />
                    </Routes>
                </Provider>
            </MemoryRouter>
        );
        const link = screen.getByText("News");
        userEvent.click(link);
        const categorySection = screen.getByTestId("category-section");
        expect(categorySection).toBeInTheDocument();
    });
});