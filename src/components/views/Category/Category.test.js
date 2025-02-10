/*import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import store from "../../../redux/store";
import Category from "./Category";
import '@testing-library/jest-dom/extend-expect';


describe("Category", () => {
    // it("should render without crashing", () => {
    //     render(
    //         <Provider store={store}>
    //             <Category />
    //         </Provider>
    //     );
    // });
    it("should return info about the lack of articles when postsByCategory is empty", () => {
        const testStore = {
            posts: [
                {
                    id: '2',
                    title: 'Article II',
                    shortDescription: 'Lorem ipsum dolor sit amet.',
                    content: ' Pellentesque vulputate nisl et congue vehicula. Aliquam cursus pharetra pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper vestibulum pharetra. Pellentesque vulputate nisl et congue vehicula. Aliquam cursus pharetra pulvinar. Etiam mauris eros, tempus vitae posuere at, maximus eu tellus. Proin in rhoncus lectus. Vivamus vel purus placerat, vestibulum lacus et, tempus lorem. Nam tincidunt congue bibendum. ',
                    publishedDate: new Date('02-01-2025'),
                    category: "Movies",
                    author: 'Amanda Doe'
                }
            ]
          };
      
        render(
            <Provider store={{ ...store, getState: () => testStore }}>
                 <BrowserRouter>
                    <Routes>
                        <Route path="/category/news" element={<Category />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        );
        render(<Category />);
        const articlesArea = screen.getByTestId("articlesArea");
        expect(articlesArea).toHaveTextContent("No posts in this category...");
    });
    // it("should return proper articles when postsByCategory is not empty", () => {
    //     const testStore = {
    //         posts: [
    //             {
    //                 id: '2',
    //                 title: 'Article II',
    //                 shortDescription: 'Lorem ipsum dolor sit amet.',
    //                 content: ' Pellentesque vulputate nisl et congue vehicula. Aliquam cursus pharetra pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper vestibulum pharetra. Pellentesque vulputate nisl et congue vehicula. Aliquam cursus pharetra pulvinar. Etiam mauris eros, tempus vitae posuere at, maximus eu tellus. Proin in rhoncus lectus. Vivamus vel purus placerat, vestibulum lacus et, tempus lorem. Nam tincidunt congue bibendum. ',
    //                 publishedDate: new Date('02-01-2025'),
    //                 category: "Movies",
    //                 author: 'Amanda Doe'
    //             }
    //         ]
    //       };
    //     render(
    //         <Provider store={{ ...store, getState: () => testStore }}>
    //             <Category />
    //         </Provider>
    //     );
    // });
}); */