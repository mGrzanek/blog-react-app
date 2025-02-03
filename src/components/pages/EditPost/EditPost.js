import { Container } from "react-bootstrap";
import EditPostForm from "../../features/EditPostForm/EditPostForm";

const EditPost = () => {

    return(
        <Container className="col-8">
            <h2 className="pb-4">Edit Post</h2>
            <EditPostForm />
        </Container>
    );
}

export default EditPost;
