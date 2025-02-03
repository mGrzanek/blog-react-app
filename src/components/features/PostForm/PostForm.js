import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
                <Form.Group className="col-12" controlId="formTextArea">
                    <Form.Label>Short description:</Form.Label>
                    <Form.Control className="mb-2" as="textarea" rows={3} placeholder="Leave comment here" value={shortDescription} onChange={e => setShortDescription(e.target.value)} required />
                    <Form.Label>Main content:</Form.Label>
                    <Form.Control className="mb-2" as="textarea" rows={6} placeholder="Leave main content here" value={content} onChange={e => setContent(e.target.value)} required />
                </Form.Group>
                <Button type="submit">{actionTxt}</Button>
            </Form>
        </Container>
    );
}

export default PostForm;