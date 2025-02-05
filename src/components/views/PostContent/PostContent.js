import { Col } from "react-bootstrap";
import { dateToString } from "../../../utils/dateToStr";
import PropTypes from 'prop-types';

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

PostContent.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publishedDate: PropTypes.object.isRequired,
    category: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default PostContent;