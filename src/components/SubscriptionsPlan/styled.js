import styled from 'styled-components';

export const Anime = styled.section`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    animation: fadeInDown 1s;
`;
export const LogoPlan = styled.img`
    margin-bottom: 12px;
    margin-left: 5%;
    margin-right: 5%;
`;
export const NamePlan = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFF;
    margin-bottom: 30px;
`;
export const BoxInfo = styled.article`
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 5%;
    margin-right: 5%;
    flex-wrap: wrap;
    width: 300px;
    margin-bottom: 10px;
`;
export const ImgTodo = styled.img`
    width: 20px;
    height: 12px;
`;
export const ImgClose = styled.img`
    position: fixed;
    top: 0;
    right: 0;
    margin-right: 5%;
    margin-top: 30px;
    width: 60px;
    height: 36px;
`;
export const Modal = styled.div`
    position: fixed;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
`;
export const Box = styled.div`
    width: 248px;
    height: 210px;
    left: 64px;
    top: 229px;
    background: #FFFFFF;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    animation: fadeInUpBig 1s;
`;
export const BoxBtn = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
`
export const InfoModal = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #000000;
    margin-left: 5%;
    margin-right: 5%;
`;
export const BtnModal1 = styled.button`
    width: 95px;
    height: 52px;
    background: #CECECE;
    border-radius: 8px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    margin-top: 50px;
`;
export const BtnModal2 = styled.button`
    width: 95px;
    height: 52px;
    background: #FF4791;
    border-radius: 8px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    margin-left: 15px;
    margin-top: 50px;
`;
export const BoxTitle = styled.div`
    flex-direction: row;
`;
export const ImgSetinha = styled.img`
    margin-left: 5%;
    margin-top: 30px;
    width: 60px;
    height: 36px;
`;
export const HeaderPlan = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
`;
export const SpanTitle = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
`;
export const BoxSpan = styled.article`
    display: flex;
    align-content: flex-start;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
    margin-left: 10px;
`;
export const SpanInfo = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
`;
export const ImgCash = styled.img`
    width: 20px;
    height: 12px;
`;
export const InputCard1 = styled.input`
    width: 299px;
    height: 52px;
    background: #FFFFFF;
    border-radius: 8px;
    padding-left: 10px;
    margin-bottom: 5px;
`;
export const InputCard2 = styled.input`
    width: 145px;
    height: 52px;
    background: #FFFFFF;
    border-radius: 8px;
    padding-left: 10px;
    margin-bottom: 15px;
`;
export const BtnPlan = styled.button`
    width: 299px;
    height: 52px;
    background: #FF4791;
    border-radius: 8px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
`;
export const FormPlan = styled.form`
    width: 300px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    justify-content: space-between
`;