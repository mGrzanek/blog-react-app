import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import NavBar from "./NavBar";
import Home from "../../pages/Home/Home";
import About from "./../../pages/About/About";
import Categories from "../../pages/Categories/Categories";


describe("Component NavBar", () => {
    it("should render without crashing", () => {
        render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        );
    });
    it("should render Home component when click on Home link", () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/']}>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </MemoryRouter>
            </Provider>
        );

        const homeLink = screen.getByTestId("home-link");
        userEvent.click(homeLink);
        expect(screen.getByTestId("home-section")).toBeInTheDocument();
    });
    it("should render Categories component when click on Categories link", () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={["/"]}>
                    <NavBar />
                    <Routes>
                        <Route path="/categories" element={<Categories />} />
                    </Routes>
                </MemoryRouter>
            </Provider>
        );

        const categoriesLink = screen.getByTestId("categories-link");
        userEvent.click(categoriesLink);
        expect(screen.getByTestId("categories-section")).toBeInTheDocument();
    });
    it("should render About component when click on About link", () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={["/"]}>
                    <NavBar />
                    <Routes>
                        <Route path="/about" element={<About />} />
                    </Routes>
                </MemoryRouter>
            </Provider>
        );
        const aboutLink = screen.getByTestId("about-link");
        userEvent.click(aboutLink);
        expect(screen.getByTestId("about-section")).toBeInTheDocument();
    });
});