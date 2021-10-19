import React from 'react';
import {Header, TextBlockAbout, WrapperText} from "./styles";
import {ReactCompareSlider, ReactCompareSliderImage} from "react-compare-slider";
import {Container} from "../../components/ui/container";
import {SectionHeader, TextWrapper, textWrapper} from "../../theme/text";
import {Wrapper} from "./styles";



const About = ({data}) => {
    return (
        <Container id="about">
            <SectionHeader dark>{data.title}</SectionHeader>
            <Wrapper>
                <TextBlockAbout dark>
                    <TextWrapper data={data.atext}/>
                </TextBlockAbout>
            </Wrapper>
            <ReactCompareSlider
                itemOne = {<ReactCompareSliderImage src={data.aslider[0].url} alt={data.aslider[0].url}/>}
                itemTwo = {<ReactCompareSliderImage src={data.aslider[1].url} alt={data.aslider[0].url}/>}
            >
            </ReactCompareSlider>
        </Container>
    );
};

export default About;