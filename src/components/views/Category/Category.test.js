import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import Category from "./Category";

describe("Category component", () => {
    it("should render without crashing when in selected category some article exist", () => {
        render(
            <MemoryRouter initialEntries={["/categories/news"]}>
                <Provider store={store}>
                    <Routes>
                        <Route path="/categories/:category" element={<Category />} />
                    </Routes>
                </Provider>
            </MemoryRouter>
        );
        const articlesOfCategory = screen.getByTestId("category-articles");
        expect(articlesOfCategory).toBeInTheDocument();
    });
    it("should render info about no post when in selected category any article not exist", () => {
        render(
            <MemoryRouter initialEntries={["/categories/other-category"]}>
                <Provider store={store}>
                    <Routes>
                        <Route path="/categories/:category" element={<Category />} />
                    </Routes>
                </Provider>
            </MemoryRouter>
        );
        const categoryInfo = screen.getByTestId("no-articles");
        expect(categoryInfo).toBeInTheDocument();
        expect(categoryInfo).toHaveTextContent("No posts in this category...");
    });
});