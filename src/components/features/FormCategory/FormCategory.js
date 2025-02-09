import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../../../redux/categoriesReducer";
import { Button, Form } from "react-bootstrap";


const FormCategory = () => {

    const dispatch = useDispatch();
    const [newCategory, setNewCategory] = useState('');

    const add = e => {
        e.preventDefault();
        dispatch(addCategory({category: newCategory}));
        setNewCategory('');
    };

    return (
        <div className="py-2">
            <Form onSubmit={add} className="d-flex justify-content-between align-items-center">
                <Form.Control placeholder="Add new category..." value={newCategory} onChange={e => setNewCategory(e.target.value)} />
                <Button className="mx-2" type="submit">Add</Button>
            </Form>
        </div>
    );
}

export default FormCategory;