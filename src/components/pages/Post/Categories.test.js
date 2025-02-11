import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import Categories from "../Categories/Categories";


describe("Categories component", () => {
    it("should render Categories component without crashing", () => {
        render(
            <MemoryRouter initialEntries={["/categories"]}>
                <Provider store={store}>
                    <Categories />
                </Provider>
            </MemoryRouter>
        );
        const categoriesTestId = screen.getByTestId("categories-section");
        expect(categoriesTestId).toBeInTheDocument();
    });
})