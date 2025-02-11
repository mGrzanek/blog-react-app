import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import AddPost from "./AddPost";

describe("AddPost component", () => {
    it("should render AddPost component without crashing", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <AddPost />
                </Provider>
            </BrowserRouter>
        );
        const addPostTitle = screen.getByText("Add Post");
        expect(addPostTitle).toBeInTheDocument();
    });
});