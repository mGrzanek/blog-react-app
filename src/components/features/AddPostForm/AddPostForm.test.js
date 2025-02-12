import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import AddPostForm from "./AddPostForm";

describe("AddPostForm component", () => {
    it("should render without crashing", () => {
        render(
           <MemoryRouter initialEntries={["/post/add"]}>
                <Provider store={store}>
                    <AddPostForm />
                </Provider>
           </MemoryRouter>
        );
    });
});