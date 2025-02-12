import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import userEvent from "@testing-library/user-event";
import ModalPage from "./ModalPage";

describe("ModalPage component", () => {
    it("should render without crashing", () => {
        render(<ModalPage action={() => { }} buttonName="Delete" content="Lorem ipsum" />);
        const deleteButton = screen.getByText("Delete");
        userEvent.click(deleteButton);
        const modalContent = screen.getByText("Lorem ipsum");
        expect(modalContent).toBeInTheDocument();
    });
    it("should run action callback", () => {
        const action = jest.fn();
        render(<ModalPage action={action} buttonName="Delete" content="Lorem ipsum" />);
        const deleteButton = screen.getByText("Delete");
        userEvent.click(deleteButton);
        const modalDeleteBtn = screen.getByText("Accept");
        userEvent.click(modalDeleteBtn);
        expect(action).toHaveBeenCalledTimes(1);
    });
});