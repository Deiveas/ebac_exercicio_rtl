import React from 'react';
import {
    PostContainer,
    PostImage,
    PostText,
} from './styles';
import PostComments from '../PostComments';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    imageUrl?: string | null;
};

const Post = ({ children, imageUrl }: Props) => (
    <PostContainer>
        {imageUrl ? (
            <PostImage src={imageUrl} alt="Post image" />
        ) : (
            <p>Nenhuma imagem selecionada</p>
        )}
        <PostText>{children}</PostText>
        <PostComments />
    </PostContainer>
);

export default Post;
