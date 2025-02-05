import { ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const CategoryLink = ({ id, category }) => {
    return(
        <ListGroup.Item key={id} as={NavLink} to={`/categories/${(category).toLowerCase()}`}>{category}</ListGroup.Item>
    );
}

export default CategoryLink;