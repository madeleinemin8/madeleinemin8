import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import nameCirclesImage from "../../assets/namecircles.png";
import frogImage from "../../assets/frog.png";
  
export const Nav = styled.nav`
  background: #809A18;
  height: 15vh;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 0.2rem 8vw;
  z-index: 12;
`;
  
export const NavLink = styled(Link)`
  color: #000000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: 'Remnant', sans-serif;
  font-size: 20pt;
  @media screen and (max-width: 768px) {
    font-size: 15pt;
    padding: 0 0.8rem;
  }
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1 rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
`;

/*export const WhiteNav = styled.div`
  background: #FFFFFF;
  display: flex;
  align-items: center;
  margin: 0px 0px 0px 0px;
  padding-bottom: 7px;
  height: 100%;
`;*/

export const NameCircles = styled.div`
  background-image: url(${nameCirclesImage});
  align-items: center;
  width: 55vh;
  height: 13vh;
  position: absolute;
  top: 5vh;
  left: 15vw;
  background-repeat: no-repeat;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const FrogImage = styled.div`
  background-image: url(${frogImage});
  width: 12vh;
  height: 10vh;
  position: absolute;
  top: 3vh;
  left: 3vh;
  background-repeat: no-repeat;
  @media screen and (max-width: 345px) {
    display: none;
  }
`
