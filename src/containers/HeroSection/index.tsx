import React from 'react';
import { HeroContainer, HeroTitle, HeroSubtitle } from './styles';

type HeroSectionProps = {
    title: string;
    subtitle: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
    return (
        <HeroContainer>
            <HeroTitle>{title}</HeroTitle>
            <HeroSubtitle>{subtitle}</HeroSubtitle>
        </HeroContainer>
    );
};

export default HeroSection;
