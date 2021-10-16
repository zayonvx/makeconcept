import React, {useEffect} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {motion} from "framer-motion"

import 'swiper/css/bundle';

import SwiperCore, {
    EffectFade,Navigation,Pagination,Autoplay
} from 'swiper';
import {Container, MainTextBlock, SliderImage} from "./styles";

SwiperCore.use([EffectFade,Navigation,Pagination,Autoplay]);

const MainPage = ({title, slider}) => {
    return (
        <Container>
            <div>
            <Swiper spaceBetween={3000} effect={'fade'} speed={5000} className="mySwiper" autoplay={{
                "delay": 20000}}>
                {slider.map(slide =>
                    <SwiperSlide>
                        <motion.div
                            animate={{ scale: 1.7}}
                            transition={{ease: "easeOut", duration: 120, repeat: Infinity,
                                repeatType: "reverse", repeatDelay: 1}}
                        >
                        <SliderImage src={slide.url}/>
                        </motion.div>
                    </SwiperSlide>
                )}
            </Swiper>
            </div>
            <MainTextBlock>
                <h1>{title}</h1>
            </MainTextBlock>
        </Container>
    );
};

export default MainPage;