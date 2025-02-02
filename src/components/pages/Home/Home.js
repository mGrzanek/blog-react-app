import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsReducer";
import { Row } from "react-bootstrap";
import SinglePost from "../../views/SinglePost/SinglePost";

const Home = () => {
    const posts = useSelector(getAllPosts);
    return(
        <section>
            <h1 className="pb-4">All posts:</h1> 
            <Row className="d-flex">
                {posts.map(post => (
                    <SinglePost key={post.id} {...post} />
                ))}
            </Row>
        </section>
       
    );
}

export default Home;