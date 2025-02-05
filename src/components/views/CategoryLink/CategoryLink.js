import { ListGroup, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { getPostByCategory } from "../../../redux/postsReducer";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';

const CategoryLink = ({ id, category }) => {
    const posts = useSelector(state => getPostByCategory(state, category));
    
    return(
        <ListGroup.Item 
            className="d-flex justify-content-between align-items-center" 
            key={id} as={NavLink} 
            to={`/categories/${(category).toLowerCase()}`}
        >
            {category}
            <Badge bg="primary">{posts.length}</Badge>
        </ListGroup.Item>
    );
}

CategoryLink.propTypes = {
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
}

export default CategoryLink;