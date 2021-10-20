import React from 'react';
import {Container} from "./styles";
import Image from 'next/image'

const Logo = (logo) => {
    return (
        <Container>
        <Image src={logo.data.url} alt="test" height='95' width='95'/>
        </Container>
    );
};

export default Logo;