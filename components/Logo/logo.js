import React from 'react';
import {Container} from "./styles";

const Logo = (logo) => {
    return (
        <Container>
        <img src={logo.data.url} alt="test" height='90' width='90'/>
        </Container>
    );
};

export default Logo;