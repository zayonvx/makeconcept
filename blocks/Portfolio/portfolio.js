import React from 'react';
import {Header, SliderImage, SwiperWrapper} from "./styles";
import 'swiper/css/bundle';

import SwiperCore, {
    EffectFade,Navigation,Pagination,Autoplay
} from 'swiper';

SwiperCore.use([EffectFade,Navigation,Pagination,Autoplay]);
import { Swiper, SwiperSlide } from "swiper/react";

import {Container} from "../../components/ui/container";


const Portfolio = ({data, gallery}) => {
    return (
        <Container id="portfolio">
            <Header dark>{data.title}</Header>
            <SwiperWrapper>
                <Swiper navigation={true} watchSlidesProgress={true} slidesPerView={1} className="mySwiper">
                    {gallery.images.map(image =>
                        <SwiperSlide key={image.url}>
                                <SliderImage src={image.url}/>
                        </SwiperSlide>
                    )}
                </Swiper>
            </SwiperWrapper>
        </Container>
    );
};

export default Portfolio;