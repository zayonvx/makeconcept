import React from 'react';
import {ContainerAbout, Header, TextBlockAbout, WrapperText} from "./style";
import {StructuredText} from "react-datocms";



const About = ({data}) => {
    return (
        <ContainerAbout id="about">
            <Header dark>{data.title}</Header>
            <WrapperText>
                <TextBlockAbout dark>
                    <StructuredText data={data.atext}/>
                </TextBlockAbout>
            </WrapperText>

        </ContainerAbout>
    );
};

export default About;