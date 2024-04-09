import React from "react";
import {AboutText, HomeContainer, MeImage, MushroomImage} from "./HomeComponentElements";

const HomeComponent = () => {
    return (
        <HomeContainer>
            <AboutText>Hi, I'm Maddie Min, a software dev residing in Seattle, WA.
                I grew up in the DC area and spent some time in Chicago for my undergrad (Go Bears). 
                I'm currently working as a full-stack engineer making tools for UI, scale, and resiliency testing.
                Outside of work, you can find me hanging out outside, biking, running, picnicking,
                 and making digital and analog art. I listen to r&b, house, and sometimes techno and folk.
				 I also love traveling, trying out new restaurants, and exploring museums.
            </AboutText>
            <MeImage></MeImage>
            <MushroomImage></MushroomImage>
        </HomeContainer>
    );
};

export default HomeComponent;