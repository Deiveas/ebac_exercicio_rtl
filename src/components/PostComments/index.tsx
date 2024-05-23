import React, { FormEvent, useState } from 'react';
import { CommentList, CommentItem, CommentContent, CommentForm, CommentTextarea, CommentButton } from './styles';

import Comment from '../../models/Comment';

const PostComments = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [tempComment, setTempComment] = useState('');

    function handleAddComment(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newComment = new Comment(comments.length, tempComment);
        setTempComment('');
        setComments([...comments, newComment]);
    }

    return (
        <div>
            <CommentList>
                {comments.map(({ comment, id }) => (
                    <CommentItem key={id}>
                        <CommentContent>{comment}</CommentContent>
                    </CommentItem>
                ))}
            </CommentList>
            <CommentForm onSubmit={handleAddComment}>
                <CommentTextarea
                    value={tempComment}
                    onChange={e => setTempComment(e.target.value)}
                    required
                />
                <CommentButton type="submit">Comentar</CommentButton>
            </CommentForm>
        </div>
    );
}

export default PostComments;
