import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCategories } from "../../../redux/categoriesReducer";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import styles from "./PostForm.module.scss";



const PostForm = ({ action, actionTxt, ...props }) => {
    const navigate = useNavigate();
    const categories = useSelector(getAllCategories);
    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [selectedCategory, setSelectedCategory] = useState(props.category || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const [contentError, setContentError] = useState(false);
    const [dateError, setDateError] = useState(false);

    const handleSubmit = () => {
        if (!publishedDate) {
            setDateError(true);
        } else if (!content) {
            setContentError(true);
        } else {
            action({ title, author, publishedDate, selectedCategory, shortDescription, content });
            navigate("/");
        }
    }

    return (
        <Container>
            <Form onSubmit={validate(handleSubmit)}>
                <Form.Group className="col-4" controlId="formInputs" >
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        {...register("title", { required: true, minLength: 4 })}
                        className="mb-2"
                        type="text"
                        placeholder="Enter title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    {errors.title && <small className="d-block form-text text-danger mt-2">More than 3 chars required</small>}
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                        {...register("author", { required: true, minLength: 4 })}
                        className="mb-2"
                        type="text"
                        placeholder="Enter author"
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                    />
                    {errors.author && <small className="d-block form-text text-danger mt-2">More than 3 chars required</small>}
                    <Form.Label>Published:</Form.Label>
                    <DatePicker
                        className="mb-3"
                        selected={publishedDate}
                        onChange={(date) => setPublishedDate(date)}
                    />
                    {dateError && <small className="d-block form-text text-danger mt-2">Date is required</small>}
                    <Form.Select 
                        {...register("category", { required: true, validate: value => value !== "default" })}
                        className="my-2"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="default">Select category...</option>
                        {categories.map(category => <option key={category.id} value={category.category} >{category.category}</option>)}
                    </Form.Select>
                    {errors.category && <small className="d-block form-text text-danger mt-2">Category is required</small>}
                </Form.Group>
                <Form.Group className="col-12 mb-3" controlId="formTextArea">
                    <Form.Label>Short description:</Form.Label>
                    <Form.Control
                        {...register("shortDescription", { required: true, minLength: 20 })}
                        className="mb-2"
                        as="textarea"
                        rows={3}
                        placeholder="Leave comment here"
                        value={shortDescription}
                        onChange={e => setShortDescription(e.target.value)}
                    />
                    {errors.shortDescription && <small className="d-block form-text text-danger mt-2">At least 20 chars required</small>}
                    <Form.Label>Main content:</Form.Label>
                    <ReactQuill
                        className={styles.quillTextarea}
                        theme="snow" value={content}
                        onChange={setContent}
                    />
                    {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty!</small>}
                </Form.Group>
                <Button type="submit">{actionTxt}</Button>
            </Form>
        </Container>
    );
}

PostForm.propTypes = {
    action: PropTypes.func.isRequired,
    actionTxt: PropTypes.string.isRequired,
    title: PropTypes.string,
    author: PropTypes.string,
    publishedDate: PropTypes.string,
    shortDescription: PropTypes.string,
    content: PropTypes.string
}

export default PostForm;