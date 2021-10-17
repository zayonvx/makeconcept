import React from 'react';
import {Header, TextBlockAbout, WrapperText} from "./style";
import {ReactCompareSlider, ReactCompareSliderImage} from "react-compare-slider";
import {Container} from "../../components/ui/container";



const About = ({data}) => {
    return (
        <Container id="about">
            <Header dark>{data.title}</Header>
            <WrapperText>
                <TextBlockAbout dark>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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