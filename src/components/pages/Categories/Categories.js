import { getAllCategories } from "../../../redux/categoriesReducer";
import { useSelector } from "react-redux";
import { ListGroup, Container } from "react-bootstrap";
import CategoryLink from "../../views/CategoryLink/CategoryLink";

const Categories = () => {
    const categories = useSelector(getAllCategories);

    return(
        <Container className="m-3">
            <h1 className="pb-4">All categories:</h1>
            <ListGroup as="ul" className="col-sm-12 col-md-6 col-lg-4">
                {categories.map(category => <CategoryLink {...category} /> )}
            </ListGroup>
        </Container>
    );
}

export default Categories;