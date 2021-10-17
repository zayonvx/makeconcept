import React from 'react';
import {Header, SliderImage, SwiperWrapper} from "./styles";
import 'swiper/css/bundle';

import SwiperCore, {
    EffectFade,Navigation,Pagination,Autoplay,Zoom
} from 'swiper';

SwiperCore.use([EffectFade,Navigation,Pagination,Autoplay,Zoom]);
import { Swiper, SwiperSlide } from "swiper/react";

import {Container} from "../../components/ui/container";


const Portfolio = ({data, gallery}) => {
    return (
        <Container full id="portfolio">
            <Header dark>{data.title}</Header>
            <div>
                <Swiper zoom={true} navigation={true} watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
                    {gallery.images.map(image =>
                        <SwiperSlide key={image.url}>
                                <SliderImage src={image.url}/>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </Container>
    );
};

export default Portfolio;