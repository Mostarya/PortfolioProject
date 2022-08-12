import React from 'react';
import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import Comment from './Comment';
//import { selectCommentsById } from './commentsSlice';
import CommentForm from './CommentForm';
import { COMMENTS } from '../../assets/COMMENTS';

const CommentsList = () => {
    const comments = useSelector({ COMMENTS });

    if (comments && comments.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />;
                })}
                <CommentForm />
            </Col>
        );
    }
    return (
        <Col md='5' className='m-1'>
            There are no comments yet.
        </Col>
    );
};

export default CommentsList;