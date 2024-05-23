import styled from 'styled-components';

export const PostContainer = styled.div`
    max-width: 100%;
    background-color: ${(props) => props.theme.corBackPost};
    padding: 4px;
    box-shadow: 1px 2px 6px ${(props) => props.theme.corShadowText};
    border-radius: 16px;
    text-align: center;
`;

export const PostImage = styled.img`
    max-width: 25%;
`;

export const PostText = styled.p`
    color: ${(props) => props.theme.corShadowText};
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
`;
