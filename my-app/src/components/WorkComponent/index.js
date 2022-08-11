import React from "react";
import {WorkContainer, IconContainer, DeskIcon1, DeskIcon2, DeskIcon3, DeskIcon4, DeskIcon5, DeskIcon6, CaptionText} from "./WorkComponentElements";
import Grid from '@material-ui/core/Grid';

const WorkComponent = () => {
    return (
        <WorkContainer>
            <IconContainer>
            <Grid container spacing={7}>
                <Grid item xs={5} sm={3} md={2}>
                    <a href='https://github.com/madeleinemin8/madeleinemin8.github.io/tree/master/vr-frog-trip'><DeskIcon1></DeskIcon1></a>
                    <CaptionText>FrogWrld</CaptionText>
                </Grid>
                <Grid item xs={5} sm={3} md={2}>
                    <a href='https://github.com/madeleinemin8/SoundSNEK---Emerging-Interface-Technologies-Project-1'><DeskIcon6></DeskIcon6></a>
                    <CaptionText>SoundSNEK</CaptionText>
                </Grid>
                <Grid item xs={5} sm={3} md={2}>
                    <a href='https://github.com/madeleinemin8/fractions-game-java'><DeskIcon3></DeskIcon3></a>
                    <CaptionText>MathGame</CaptionText>
                </Grid>
                <Grid item xs={5} sm={3} md={2}>
                    <a href='https://github.com/maddiesmin/maddiesmin.github.io/tree/master/loadingman'><DeskIcon4></DeskIcon4></a>
                    <CaptionText>LoadingMan</CaptionText>
                </Grid>
                <Grid item xs={5} sm={3} md={2}>
                    <a href='https://github.com/madeleinemin8/dom-project'><DeskIcon5></DeskIcon5></a>
                    <CaptionText>PartyTime</CaptionText>
                </Grid>
                <Grid item xs={5} sm={3} md={2}>
                    <a href='https://github.com/madeleinemin8/stormsupport'><DeskIcon2></DeskIcon2></a>
                    <CaptionText>StormSupport</CaptionText>
                </Grid>
            </Grid>
            </IconContainer>
        </WorkContainer>
    );
};

export default WorkComponent;

// https://github.com/madeleinemin8/embodied-data-gamified-interfaces-projects/tree/master/Beat-Detection
// 