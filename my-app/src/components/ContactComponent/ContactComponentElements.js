import styled from "styled-components";

export const ContactText = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 16pt;
    line-height: 50px;
    position: absolute;
    padding-top: 15vh;
    padding-left: 15vw;
    @media screen and (max-width: 768px) {
        padding-top: 8vh;
        font-size: 11pt;
        padding-left: 8vw;
        margin-right: 5vw;
    }
`;

export const ContactContainer = styled.div`
    display: flex;
    background-color: #00BFB2;
    width: 100vw;
    height: 85vh;
`