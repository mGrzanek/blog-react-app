import { getPostById } from "../../../redux/postsReducer";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Row, Button, Container, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Post = () => {
    const { id } = useParams();
    const postData = useSelector(state => getPostById(state, id));
    console.log(id);
    return(
        <Row className="pt-3">
            <Container className="d-flex justify-content-center">
                <Col xs={6}>                
                    <h3>{postData.title}</h3>
                    <p><b>Author: </b>{postData.author}</p>
                    <p><b>Published: </b>{postData.publishedDate}</p>
                    <p>{postData.content}</p>                   
                </Col>
                <Col xs={2}>
                    <Button variant="outline-info" className="m-1" as={NavLink} to="/post/edit/:id">Edit</Button>
                    <Button variant="outline-danger" className="m-1">Delete</Button>
                </Col>
            </Container>
        </Row>
    );
}

export default Post;