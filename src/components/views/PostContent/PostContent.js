import { Col } from "react-bootstrap";
import { dateToString } from "../../../utils/dateToStr";

const PostContent = ({ title, author, publishedDate, category, content }) => {
    return (
        <Col xs={6}>
            <h3>{title}</h3>
            <p><b>Author: </b>{author}</p>
            <p><b>Published: </b>{dateToString(publishedDate)}</p>
            <p><b>Category: </b>{category}</p>
            <p dangerouslySetInnerHTML={{ __html: content }} />
        </Col>
    );
}

export default PostContent;