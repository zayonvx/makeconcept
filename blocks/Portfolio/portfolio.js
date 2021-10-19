import React from 'react';
import {Header, SliderImage, SwiperWrapper} from "./styles";
import 'swiper/css/bundle';

import SwiperCore, {
    EffectFade,Navigation,Pagination,Autoplay
} from 'swiper';

SwiperCore.use([EffectFade,Navigation,Pagination,Autoplay]);
import { Swiper, SwiperSlide } from "swiper/react";

import {Container} from "../../components/ui/container";
import {SectionHeader} from "../../theme/text";
import {ItemImage} from "../../theme/image";


const Portfolio = ({data, gallery}) => {
    return (
        <Container id="portfolio">
            <SectionHeader dark>{data.title}</SectionHeader>
            <SwiperWrapper>
                <Swiper navigation={true} watchSlidesProgress={true} slidesPerView={1} className="mySwiper">
                    {gallery.images.map(image =>
                        <SwiperSlide key={image.url}>
                                <ItemImage src={image.url}/>
                        </SwiperSlide>
                    )}
                </Swiper>
            </SwiperWrapper>
        </Container>
    );
};

export default Portfolio;