import React from "react";
import {AboutText, HomeContainer, MeImage, MushroomImage} from "./HomeComponentElements";

const HomeComponent = () => {
    return (
        <HomeContainer>
            <AboutText>Hi, I'm Maddie Min, a software development engineer currently residing in Brooklyn, NY.
                I grew up in the DC area and spent some time in Chicago for my undergrad before moving to the city. 
                I'm interested in iOS development, web development (live laugh love React), and have experience with scale testing as well.
                Outside of work, you can find me hanging out outside, biking, running, picnicking,
                 and making digital and analog art. I listen to r&b, soul, house, italo disco, and sometimes techno. 
                 I also love traveling, trying out new restaurants, and exploring museums and galleries.
            </AboutText>
            <MeImage></MeImage>
            <MushroomImage></MushroomImage>
        </HomeContainer>
    );
};

export default HomeComponent;