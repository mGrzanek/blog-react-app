import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import SinglePost from "./SinglePost";
import Post from "../../pages/Post/Post";


describe("Single Post component", () => {
    it("should render without crashing", () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <SinglePost 
                    title="Title 1" 
                    author="John Doe" 
                    publishedDate={new Date('02-01-2025')}
                    category="News"
                    shortDescription="Short description of article"
                    id="4"
                />
            </MemoryRouter>
        );
        const postTitle = screen.getByTestId("singlepost-title");
        const postAuthor = screen.getByTestId("singlepost-author");
        const postPublished = screen.getByTestId("singlepost-published");
        const postCategory = screen.getByTestId("singlepost-category");
        const postDescription = screen.getByTestId("singlepost-description");

        expect(postTitle).toHaveTextContent("Title 1");
        expect(postAuthor).toHaveTextContent("Author: John Doe");
        expect(postPublished).toHaveTextContent("Published: 02/01/2025");
        expect(postCategory).toHaveTextContent("News");
        expect(postDescription).toHaveTextContent("Short description of article");
    });
    it("should render proper post when user click on 'Read more' button", () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <Provider store={store}>
                    <SinglePost 
                        title="Article I" 
                        author="John Doe" 
                        publishedDate={new Date('02-12-2024')}
                        category="News"
                        shortDescription="Integer semper vestibulum."
                        id="1"
                    />
                    <Routes>
                        <Route path="/post/:id" element={<Post />} />
                    </Routes>
                </Provider>
            </MemoryRouter>
        );
        const postBtn = screen.getByText("Read more");
        userEvent.click(postBtn);
        const currentPost = screen.getByTestId("post-section");
        expect(currentPost).toBeInTheDocument();
    });
});