import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostById } from "../../../redux/postsReducer";
import { editPost } from "../../../redux/postsReducer";
import PostForm from "../PostForm/PostForm";
import { Navigate } from "react-router-dom";

const EditPostForm = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const post = useSelector(state => getPostById(state, id));

    const edit = post => {
       dispatch(editPost({ id, ...post }));
    }

    if(!post) return <Navigate to="/" />
    else return(
        <PostForm action={edit} actionTxt="Save" { ...post } />
    );
}

export default EditPostForm;