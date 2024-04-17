import React from 'react';
import {
    StyledButton,
    StyledContainer,
    StyledIcon,
    StyledInfoSection,
    StyledInfoSpan,
    StyledInfoSubSpan
} from './styles';
import { IBlogProps } from './types';

const Blog: React.FunctionComponent<IBlogProps> = ({ data }) => {
    return (
        <StyledContainer>
            <StyledIcon src={data.iconSrc} />
            <StyledInfoSection>
                <StyledInfoSpan>{data.title}</StyledInfoSpan>
                <StyledInfoSubSpan>{data.description}</StyledInfoSubSpan>
                <StyledButton>Know More</StyledButton>
            </StyledInfoSection>
        </StyledContainer>
    );
};

export default Blog;
