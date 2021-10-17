import React from 'react';
import {Header, TextBlockAbout, WrapperText} from "./style";
import {StructuredText} from "react-datocms";
import {ReactCompareSlider, ReactCompareSliderImage} from "react-compare-slider";
import {Container} from "../../components/ui/container";



const About = ({data}) => {
    return (
        <Container id="about">
            <Header dark>{data.title}</Header>
            <WrapperText>
                <TextBlockAbout dark>
                    <StructuredText data={data.atext}/>
                </TextBlockAbout>
            </WrapperText>
            <ReactCompareSlider
                itemOne = {<ReactCompareSliderImage src={data.aslider[0].url} alt={data.aslider[0].url}/>}
                itemTwo = {<ReactCompareSliderImage src={data.aslider[1].url} alt={data.aslider[0].url}/>}
            >
            </ReactCompareSlider>
        </Container>
    );
};

export default About;