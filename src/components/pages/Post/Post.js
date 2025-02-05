import { getPostById, removePost } from "../../../redux/postsReducer";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Navigate, NavLink } from "react-router-dom";
import { Col, Row, Button, Container } from "react-bootstrap";
import PostContent from "../../views/PostContent/PostContent";
import ModalPage from "../../features/ModalPage/ModalPage";

const Post = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const postData = useSelector(state => getPostById(state, id));
    
    const remove = e => {
        e.preventDefault();
        dispatch(removePost(postData.id));
    }
    if(!postData) return <Navigate to="/" />
    else return(
        <Row className="pt-3">
            <Container className="d-flex justify-content-center">
                <PostContent {...postData} />
                <Col xs={2}>
                    <Button variant="outline-info" className="m-1" as={NavLink} to={`/post/edit/${id}`}>Edit</Button>
                    <ModalPage action={ remove } buttonName="Delete" content="This action will completely remove this post from the app. Are you sure you want to do this?" />
                </Col>
            </Container>
        </Row>
    );
}

export default Post;