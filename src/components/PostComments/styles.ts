import styled from 'styled-components';

export const CommentList = styled.ul`
    list-style: none;
    padding: 0;
`;

export const CommentItem = styled.li`
    color:${(props) => props.theme.corColorComment};
    font-size: 12px;
    line-height: 20px;
    background-color: ${(props) => props.theme.corBackComment};
    padding: 8px 16px;
    border-radius: 8px;
    margin-bottom: 8px;
`;

export const CommentContent = styled.p`
    font-style: italic;
`;

export const CommentForm = styled.form`
    margin-top: 16px;
    text-align: right;
`;

export const CommentTextarea = styled.textarea`
    display: block;
    resize: none;
    width: 100%;
    margin-bottom: 8px;
    padding: 8px 16px;
    font-size: 14px;
    line-height: 22px;
`;

export const CommentButton = styled.button`
    padding: 8px 16px;
    font-weight: bold;
    border-radius: 8px;
    border: none;
    background-color: ${(props) => props.theme.corButton};
    color: ${(props) => props.theme.corBody};
    cursor: pointer;
`;
