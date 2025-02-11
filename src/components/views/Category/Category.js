import { useParams } from "react-router-dom";
import { getPostByCategory } from "./../../../redux/postsReducer.js";
import { useSelector } from "react-redux";
import { Row } from "react-bootstrap";
import { convertText } from "./../../../utils/convertText.js";
import SinglePost from "../SinglePost/SinglePost.js";

const Category = () => {
    const { category } = useParams();
    const currentCategory = convertText(category)
    const postsByCategory = useSelector(state => getPostByCategory(state, currentCategory));

    if(postsByCategory.length === 0) {
        return( 
            <>
                <h2>Category: {currentCategory}</h2>
                <p data-testid="no-articles" className="p-4 text-center">No posts in this category...</p>
            </>
        );
    } else return(
        <>
            <h2>Category: {currentCategory}</h2>
            <Row data-testid="category-articles" className="d-flex">
                {postsByCategory.map(postCategory => <SinglePost key={postCategory.id} {...postCategory} />)}
            </Row>   
        </>  
    );
}

export default Category;