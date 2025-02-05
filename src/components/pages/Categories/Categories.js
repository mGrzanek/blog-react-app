import { getAllCategories } from "../../../redux/categoriesReducer";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { ListGroup, Container } from "react-bootstrap";

const Categories = () => {
    const categories = useSelector(getAllCategories);

    return(
        <Container className="m-3">
            <h1 className="pb-4">All categories:</h1>
            <ListGroup as="ul" className="col-sm-12 col-md-6 col-lg-4">
                {categories.map(category => <ListGroup.Item key={category.id} as={NavLink} to={`/categories/${(category.category).toLowerCase()}`}>{category.category}</ListGroup.Item> )}
            </ListGroup>
        </Container>
    );
}

export default Categories;