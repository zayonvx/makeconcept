import React from 'react';
import {ContainerAbout, Header, TextBlockAbout, WrapperText} from "../About/style";
import {StructuredText} from "react-datocms";
import {ReactCompareSlider, ReactCompareSliderImage} from "react-compare-slider";
import {ContainerPortfolio} from "./styles";

const Portfolio = ({data}) => {
    return (
        <ContainerPortfolio id="portfolio">
            <Header dark>{data.title}</Header>
        </ContainerPortfolio>
    );
};

export default Portfolio;