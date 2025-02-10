import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import userEvent from "@testing-library/user-event";
import Home from "./Home";
import AddPost from "../AddPost/AddPost";

describe("Home component", () => {
    it("should render Home component without crashing", () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <Home />
                </Provider>
            </MemoryRouter>
        );
    });
    it("should render AddPost component when user click on 'Add post' button", () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <Provider store={store}>
                    <Home />
                    <Routes>
                        <Route path="/post/add" element={<AddPost />} />
                    </Routes>
                </Provider>
            </MemoryRouter>
        );
        const addPostBtn = screen.getByText("Add post");
        userEvent.click(addPostBtn);
        expect(screen.getByText("Add Post")).toBeInTheDocument();
    });
});