import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"

import SwiperCore, {
    EffectFade,Navigation,Pagination,Autoplay
} from 'swiper';
import {SliderImage} from "./styles";

SwiperCore.use([EffectFade,Navigation,Pagination,Autoplay]);

const MainPage = ({title, slider}) => {
    return (
        <div>
            <Swiper spaceBetween={3000} effect={'fade'} className="mySwiper" autoplay={{
                "delay": 5000,}}>
                <SwiperSlide>
                    <SliderImage src={slider[0].url}/>
                </SwiperSlide>
                <SwiperSlide>
                    <SliderImage src={slider[1].url}/>
                </SwiperSlide>
                <SwiperSlide>
                    <SliderImage src={slider[2].url}/>
                </SwiperSlide>
                <SwiperSlide>
                    <SliderImage src={slider[3].url}/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default MainPage;