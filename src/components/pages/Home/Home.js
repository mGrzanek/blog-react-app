import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllPosts } from "../../../redux/postsReducer";
import { Row, Button } from "react-bootstrap";
import SinglePost from "../../views/SinglePost/SinglePost";

const Home = () => {
    const posts = useSelector(getAllPosts);
    return (
        <section>
            <div className="d-flex justify-content-between">
                <h1>All posts:</h1>
                <div>
                    <Button as={NavLink} to="/post/add" variant="outline-info">
                        Add post
                    </Button>
                </div>
            </div>
            <Row className="d-flex">
                {posts.map(post => (
                    <SinglePost key={post.id} {...post} />
                ))}
            </Row>
        </section>

    );
}

export default Home;