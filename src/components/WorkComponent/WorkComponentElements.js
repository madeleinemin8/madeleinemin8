import styled from "styled-components";
import desktopIcon1 from "../../assets/desktopIcon1.png";
import desktopIcon2 from "../../assets/desktopIcon2.png";
import desktopIcon3 from "../../assets/desktopIcon3.png";
import desktopIcon4 from "../../assets/desktopIcon4.png";
import desktopIcon5 from "../../assets/desktopIcon5.png";
import desktopIcon6 from "../../assets/desktopIcon6.png";

export const DeskIcon1 = styled.div`
    background-image: url(${desktopIcon1});
    width: 100px;
    height: 100px;
    position: absolute;
    padding-left: 0px;
    background-repeat: no-repeat;
    display: block;
`

export const DeskIcon2 = styled.div`
    background-image: url(${desktopIcon2});
    width: 100px;
    height: 100px;
    position: absolute;
    padding-left: 0px;
    background-repeat: no-repeat;
`
export const DeskIcon3 = styled.div`
    background-image: url(${desktopIcon3});
    width: 100px;
    height: 100px;
    position: absolute;
    padding-left: 0px;
    background-repeat: no-repeat;
`
export const DeskIcon4 = styled.div`
    background-image: url(${desktopIcon4});
    width: 100px;
    height: 100px;
    position: absolute;
    padding-left: 0px;
    background-repeat: no-repeat;
`
export const DeskIcon5 = styled.div `
    background-image: url(${desktopIcon5});
    width: 100px;
    height: 100px;
    position: absolute;
    padding-left: 0px;
    background-repeat: no-repeat;
`

export const DeskIcon6 = styled.div `
    background-image: url(${desktopIcon6});
    width: 100px;
    height: 100px;
    position: absolute;
    padding-left: 0px;
    background-repeat: no-repeat;
`

export const WorkContainer = styled.div`
    display: block;
    background-color: #91A6FF;
    width: 100vw;
    height: 85vh;
    top:0;
`

export const IconContainer = styled.div`
    display: block;
    width: 80vw;
    height: 35vh;
    padding-left: 10vw;
    padding-right: 10vw;
    padding-top: 20vh;
    @media screen and (max-width: 600px) {
        padding-left: 20vw;
        padding-top: 8vh;
        padding-right: 0vw;
    }
    @media screen and (max-width: 400px) {
        padding-left: 15vw;
        padding-top: 5.5vh;
        padding-right: 0vw;
    }
    padding-bottom: 70px;
`
export const CaptionText = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 11pt;
    text-align: left;
    padding-top: 17vh;
`