import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import userEvent from "@testing-library/user-event";
import EditPost from "../EditPost/EditPost";
import Home from "../Home/Home";
import Post from "./Post";

describe("Post component", () => {
    it("should render Post component without crashing when the article exist", () => {
        render(
            <MemoryRouter initialEntries={["/post/1"]}>
                <Provider store={store}>
                    <Routes>
                        <Route path="/post/:id" element={<Post />} />
                    </Routes>
                </Provider>
            </MemoryRouter>
        );
        const postTestId = screen.getByTestId("post-section");
        expect(postTestId).toBeInTheDocument();
    });
    it("should render Home component when the article not exist", () => {
        render(
            <MemoryRouter initialEntries={["/post/invalid-id"]}>
                <Provider store={store}>
                    <Routes>
                        <Route path="/post/:id" element={<Post />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Provider>
            </MemoryRouter>
        );
        const homeTestId = screen.getByTestId("home-section");
        expect(homeTestId).toBeInTheDocument();
    });
    it("should render EditPost component when user click on 'Edit' button", ()  => {
        render(
            <MemoryRouter initialEntries={["/post/1"]}>
                <Provider store={store}>
                    <Routes>
                        <Route path="/post/:id" element={<Post />} />
                        <Route path="/post/edit/:id" element={<EditPost />} />
                    </Routes>
                </Provider>
            </MemoryRouter>
        );
        const editBtn = screen.getByText("Edit");
        userEvent.click(editBtn);
        const editPostTitle = screen.getByText("Edit Post");
        expect(editPostTitle).toBeInTheDocument();
    });
    it("should render ModalPage component when user click on 'Delete' button", () => {
        render(
            <MemoryRouter initialEntries={["/post/1"]}>
                <Provider store={store}>
                <Routes>
                    <Route path="/post/:id" element={<Post />} />
                </Routes>
                </Provider>
            </MemoryRouter>
        );
        const deleteBtn = screen.getByText("Delete");
        userEvent.click(deleteBtn);
        const modalPageTitle = screen.getByText("Are you sure?");
        expect(modalPageTitle).toBeInTheDocument();
    });
});