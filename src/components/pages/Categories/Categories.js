import { getAllCategories } from "../../../redux/categoriesReducer";
import { useSelector, useDispatch } from "react-redux";
import { addCategory } from "../../../redux/categoriesReducer";
import { ListGroup, Container, Form, Button } from "react-bootstrap";
import CategoryLink from "../../views/CategoryLink/CategoryLink";
import { useState } from "react";

const Categories = () => {
    const dispatch = useDispatch();
    const categories = useSelector(getAllCategories);
    const [newCategory, setNewCategory] = useState('');

    const add = e => {
        e.preventDefault();
        dispatch(addCategory({category: newCategory}));
        setNewCategory('');
    }
    
    return(
        <Container className="m-3">
            <h1 className="pb-4">All categories:</h1>
            <ListGroup as="ul" className="col-sm-12 col-md-6 col-lg-4">
                {categories.map(category => <CategoryLink key={category.id} {...category} /> )}
                <div className="py-2">
                    <Form onSubmit={add} className="d-flex justify-content-between align-items-center">
                        <Form.Control placeholder="Add new category..." value={newCategory} onChange={e => setNewCategory(e.target.value)} />
                        <Button type="submit">Add</Button>
                    </Form>
                </div>
            </ListGroup>
        </Container>
    );
}

export default Categories;