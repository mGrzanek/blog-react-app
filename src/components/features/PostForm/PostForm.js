import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import styles from "./PostForm.module.scss";


const PostForm = ({ action, actionTxt, ...props }) => {
    const navigate = useNavigate();

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author  || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate  || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription  || '');
    const [content, setContent] = useState(props.content  || '');

    const handleSubmit = e => {
        e.preventDefault();
        action({ title, author, publishedDate, shortDescription, content });
        navigate("/");
    }

    return(
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="col-4" controlId="formInputs" >
                    <Form.Label>Title</Form.Label>
                    <Form.Control className="mb-2" type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} required />
                    <Form.Label>Author</Form.Label>
                    <Form.Control className="mb-2" type="text" placeholder="Enter author" value={author} onChange={e => setAuthor(e.target.value)} required />
                    <Form.Label>Published:</Form.Label>
                    <Form.Control className="mb-2" type="text" placeholder="Enter date" value={publishedDate} onChange={e => setPublishedDate(e.target.value)} required />
                </Form.Group>
                <Form.Group className="col-12 mb-3" controlId="formTextArea">
                    <Form.Label>Short description:</Form.Label>
                    <Form.Control className="mb-2" as="textarea" rows={3} placeholder="Leave comment here" value={shortDescription} onChange={e => setShortDescription(e.target.value)} required />
                    <Form.Label>Main content:</Form.Label>
                    <ReactQuill className={styles.quillTextarea} theme="snow" value={content} onChange={setContent} required />
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