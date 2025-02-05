import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostById } from "../../../redux/postsReducer";
import { editPost } from "../../../redux/postsReducer";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import PostForm from "../PostForm/PostForm";
import { Navigate } from "react-router-dom";

const EditPostForm = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const post = useSelector(state => getPostById(state, id));
    const { setValue } = useForm();

    const edit = post => {
       dispatch(editPost({ id, ...post }));
    }

    useEffect(() => {
        if (post) {
            setValue("title", post.title);
            setValue("author", post.author);
            setValue("publishedDate", post.publishedDate);
            setValue("shortDescription", post.shortDescription);
            setValue("content", post.content);
        }
    }, [post]);

    if(!post) return <Navigate to="/" />
    else return(
        <PostForm action={edit} actionTxt="Save" { ...post } />
    );
}

export default EditPostForm;