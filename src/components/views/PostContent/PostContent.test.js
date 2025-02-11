import { render , screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import PostContent from "./PostContent.js";

describe("PostContent Component", () => {
    it("should render without crashing", () => {
        render(
            <PostContent 
                title="Title 1" 
                author="John Doe" 
                publishedDate={new Date('02-01-2025')}
                category="News"
                content="Lorem ipsum"
            />
        );
        const titlePost = screen.getByTestId("post-title");
        const authorPost = screen.getByTestId("post-author");
        const publishedDatePost = screen.getByTestId("post-published");
        const categoryPost = screen.getByTestId("post-category");
        const contentPost = screen.getByTestId("post-content");

        expect(titlePost).toHaveTextContent("Title 1");
        expect(authorPost).toHaveTextContent("Author: John Doe");
        expect(publishedDatePost).toHaveTextContent("Published: 02/01/2025");
        expect(categoryPost).toHaveTextContent("Category: News");
        expect(contentPost).toHaveTextContent("Lorem ipsum");
    });
});