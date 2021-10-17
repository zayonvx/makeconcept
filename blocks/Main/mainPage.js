import React, {useEffect} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {motion} from "framer-motion"

import 'swiper/css/bundle';

import SwiperCore, {
    EffectFade,Navigation,Pagination,Autoplay
} from 'swiper';
import {ButtonMain, Container, MainTextBlock, MainTextHeader, SliderImage} from "./styles";
import {hiddenHeader} from "../../theme/text";
import {Button, ButtonBase, ButtonMint} from "../../components/ui/button";

SwiperCore.use([EffectFade,Navigation,Pagination,Autoplay]);

const MainPage = ({title, slider}) => {
    return (
        <Container>
            <div>
            <Swiper spaceBetween={3000} effect={'fade'} speed={5000} className="mySwiper" autoplay={{
                "delay": 10000}}>
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
            <hiddenHeader>
                Студия интерьерного дизайна
            </hiddenHeader>
            <ButtonMain>Подробнее</ButtonMain>
        </Container>
    );
};

export default MainPage;