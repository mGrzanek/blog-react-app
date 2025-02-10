import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import EditPost from "./EditPost";

describe("EditPost component", () => {
    it("should render EditPost component without crashing", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <EditPost />
                </Provider>
            </BrowserRouter>
        );
    });
});