import AddPostForm from "../../features/AddPostForm/AddPostForm";
import { Container } from "react-bootstrap";

const AddPost = () => {
    return (
        <Container className="col-8">
            <h2 className="pb-4">AddPost</h2>
            <AddPostForm />
        </Container>
    );
}

export default AddPost;