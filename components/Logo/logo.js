import React from 'react';
import {Container} from "./styles";

const Logo = (logo) => {
    return (
        <Container>
        <img src={logo.data.url} alt="test" height='60' width='60'/>
        </Container>
    );
};

export default Logo;