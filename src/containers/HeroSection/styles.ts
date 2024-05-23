import styled from 'styled-components';

export const HeroContainer = styled.div`
    text-align: center;
`;

export const HeroTitle = styled.h1`
    font-size: 40px;
    color: ${(props) => props.theme.corShadowText};
    margin-bottom: 15px;
`;

export const HeroSubtitle = styled.h2`
    font-size: 32px;
    color: ${(props) => props.theme.corSubTitle};
    margin-bottom: 15px;
`;

