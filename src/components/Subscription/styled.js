import styled from 'styled-components';

export const Anime = styled.section`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    animation: bounceIn 1s;
`;
export const Title = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFF;
    margin-top: 20px;
    margin-bottom: 20px;
`;
export const Box = styled.article`
    display: flex;
    width: 290px;
    height: 180px;
    left: 43px;
    top: 91px;
    background: #0E0E13;
    border: 3px solid #7E7E7E;
    border-radius: 12px;
    margin-bottom: 14px;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;
export const SpanPlan = styled.span`
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
`;
export const ImgPlan = styled.img`
    width: 160px;
    height: 96px;
`;