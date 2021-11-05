import React, {useState} from 'react';
import 'swiper/css/bundle';


import {Container} from "../../components/ui/container";
import {SectionHeader} from "../../theme/text";


const Portfolio = ({data, gallery}) => {
    return (
        <Container id="portfolio">
            <SectionHeader dark>{data.title}</SectionHeader>
            <div>
            </div>
        </Container>
    );
};

export default Portfolio;