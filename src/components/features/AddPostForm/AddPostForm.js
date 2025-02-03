import PostForm from "../PostForm/PostForm";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/postsReducer";

const AddPostForm = () => {
    const dispatch = useDispatch();

    const add = post => {
        dispatch(addPost(post));
    }

    return (
        <PostForm action={add} actionTxt="Add" />
    );
}

export default AddPostForm;