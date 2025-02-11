import { Button, Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { dateToString } from "../../../utils/dateToStr";
import PropTypes from 'prop-types';

const SinglePost = ({title, author, publishedDate, category, shortDescription, id}) => {
    return(
        <Col xs={12} md={6} lg={4} className="pt-4">
            <Card>
                <Card.Body>
                <Card.Title data-testid="singlepost-title">{title}</Card.Title>
                <Card.Text data-testid="singlepost-author"><b>Author: </b> {author}</Card.Text>
                <Card.Text data-testid="singlepost-published"><b>Published: </b> {dateToString(publishedDate)}</Card.Text>
                <Card.Text data-testid="singlepost-category"><b>Category: </b> {category}</Card.Text>
                <Card.Text data-testid="singlepost-description">{shortDescription}</Card.Text>
                <Button as={NavLink} to={`/post/${id}`}>Read more</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

SinglePost.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publishedDate: PropTypes.object.isRequired,
    shortDescription: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}
export default SinglePost;