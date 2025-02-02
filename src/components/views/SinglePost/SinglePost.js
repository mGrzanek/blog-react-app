import { Button, Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const SinglePost = ({...post}) => {
    return(
        <Col xs={12} md={6} lg={4} className="pt-4">
            <Card>
                <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text><b>Author: </b> {post.author}</Card.Text>
                <Card.Text><b>Published: </b> {post.publishedDate}</Card.Text>
                <Card.Text>{post.shortDescription}</Card.Text>
                <Button as={NavLink} to={`/post/${post.id}`}>Read more</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

SinglePost.propTypes = {
    post: PropTypes.object.isRequired
}
export default SinglePost;