import { Col } from "react-bootstrap";
import { dateToString } from "../../../utils/dateToStr";
import PropTypes from 'prop-types';

const PostContent = ({ title, author, publishedDate, category, content }) => {
    return (
        <Col xs={8} md={6}>
            <h3 data-testid="post-title">{title}</h3>
            <p data-testid="post-author"><b>Author: </b>{author}</p>
            <p data-testid="post-published"><b>Published: </b>{dateToString(publishedDate)}</p>
            <p data-testid="post-category"><b>Category: </b>{category}</p>
            <p data-testid="post-content" dangerouslySetInnerHTML={{ __html: content }} />
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