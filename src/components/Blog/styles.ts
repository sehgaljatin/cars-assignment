import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    background: #fafafa;
    border-radius: 20px;
    box-shadow: 0 4px 12px 0 rgba(126, 133, 148, 0.08);
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s;
    flex-direction: column;
    width: 100%;
    background: #fff;
    border-bottom: 3px solid rgba(221, 229, 235, 0.5);
    padding: 20px;
`;

export const StyledInfoSection = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0px;
    justify-content: center;
`;

export const StyledIconSection = styled.div`
    display: flex;
    width: 50%;
    justify-content: center;
`;
export const StyledIcon = styled.img`
    height: 170px;
`;

export const StyledInfoSpan = styled.span`
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    width: 100%;
`;

export const StyledInfoSubSpan = styled.span`
    font-size: 16px;
    line-height: 24px;
    color: #465166;
    min-height: 90px;
`;

export const StyledButton = styled.span`
    border: none;
    display: flex;
    color: #ef6e0b;
    cursor: pointer;
    font-family: 'Work Sans';
    margin-top: 10px;
`;
