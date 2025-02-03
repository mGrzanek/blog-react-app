import { Form, Container, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/postsReducer";
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [content, setContent] = useState('');

    const add = e => {
        //e.preventDefault();
        dispatch(addPost({ title, author, publishedDate, shortDescription, content }));
        setTitle('');
        setAuthor('');
        setPublishedDate('');
        setShortDescription('');
        setContent('');
        navigate("/");
    }

    return (
        <Container>
            <Form onSubmit={add}>
                <Form.Group className="col-4" controlId="formInputs" >
                    <Form.Label>Title</Form.Label>
                    <Form.Control className="mb-2" type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} required />
                    <Form.Label>Author</Form.Label>
                    <Form.Control className="mb-2" type="text" placeholder="Enter author" value={author} onChange={e => setAuthor(e.target.value)} required />
                    <Form.Label>Published:</Form.Label>
                    <Form.Control className="mb-2" type="text" placeholder="Enter date" value={publishedDate} onChange={e => setPublishedDate(e.target.value)} required />
                </Form.Group>
                <Form.Group className="col-12" controlId="formTextArea">
                    <Form.Label>Short description:</Form.Label>
                    <Form.Control className="mb-2" as="textarea" rows={3} placeholder="Leave comment here" value={shortDescription} onChange={e => setShortDescription(e.target.value)} required />
                    <Form.Label>Main content:</Form.Label>
                    <Form.Control className="mb-2" as="textarea" rows={6} placeholder="Leave main content here" value={content} onChange={e => setContent(e.target.value)} required />
                </Form.Group>
                <Button type="submit">Add post</Button>
            </Form>
        </Container>
    );
}

export default AddPostForm;