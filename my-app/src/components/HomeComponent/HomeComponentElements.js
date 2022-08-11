import styled from "styled-components";
import mushroomImage from "../../assets/mushrooms.png";
import meImage from "../../assets/me.png";

export const AboutText = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 14pt;
    position: absolute;
    padding-top: 15vh;
    padding-left: 12vw;
    margin-right: 20vw;
    @media screen and (max-width: 1100px) {
        font-size: 12pt;
        padding-top: 9vh;
    }
    @media screen and (max-width: 643px) {
        font-size: 12pt;
        padding-top: 7vh;
        margin-right: 10vw;
    }
    @media screen and (max-width: 538px) {
        padding-top: 4vh;
        font-size: 11pt;
        padding-left: 8vw;
    }
    @media screen and (max-width: 435px) {
        padding-top: 4vh;
        font-size: 10pt;
        padding-left: 7vw;
    }
`;

export const MushroomImage = styled.div`
    background-image: url(${mushroomImage});
    width: 20vw;
    height: 20vh;
    position: absolute;
    left: 0px;
    bottom: 0;
    background-repeat: no-repeat;
    @media screen and (max-width: 800px) {
        width: 38vw;
        height: 20vh;
    }
    @media screen and (max-width: 700px) {
        width: 47vw;
        height: 20vh;
    }
`

export const MeImage = styled.div`
    background-image: url(${meImage});
    position: absolute;
    width: 13vw;
    max-width: 198px;
    max-height: 232px;
    height: 30vh;
    right: 0;
    bottom: 0px;
    padding-bottom: 0px;
    background-repeat: no-repeat;
    @media screen and (max-width: 1200px) {
        width: 15vw;
    }
    @media screen and (max-width: 1000px) {
        width: 20vw;
    }
    @media screen and (max-width: 800px) {
        width: 25vw;
    }
    @media screen and (max-width: 500px) {
        width: 30vw;
    }
`

export const HomeContainer = styled.div`
    display: flex;
    background-color: #F4BA32;
    width: 100vw;
    height: 85vh;
`