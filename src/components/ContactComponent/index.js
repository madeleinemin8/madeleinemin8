import React from "react";
import {ContactContainer, ContactText} from "./ContactComponentElements.js";

const ContactComponent = () => {
    return (
        <ContactContainer>
            <ContactText>
                <h3>beep me if you want to reach me!</h3>
                email: maddiem2018@gmail.com <br></br> 
                linkedout: <a href='https://www.linkedin.com/in/maddiemin'>://</a><br></br>
                github: <a href='https://github.com/madeleinemin8'>@madeleinemin8</a><br></br>
            </ContactText>
        </ContactContainer>
    );
};

export default ContactComponent;