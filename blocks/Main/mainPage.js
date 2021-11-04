import React, {useEffect} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {motion} from "framer-motion"

import 'swiper/css/bundle';

import SwiperCore, {
    EffectFade,Navigation,Pagination,Autoplay
} from 'swiper';
import {ButtonMain, Description, Header, InfoWrapper, SliderImage} from "./styles";
import {Container} from "../../components/ui/container";

SwiperCore.use([EffectFade,Navigation,Pagination,Autoplay]);

const MainPage = ({data}) => {
    return (
        <Container full>
            <div>
                <Swiper spaceBetween={3000} effect={'fade'} speed={5000} className="mySwiper" autoplay={{
                    "delay": 10000}}>
                    {data.slider.map(slide =>
                        <SwiperSlide key={slide.url}>
                            <motion.div
                                animate={{ scale: 1.2}}
                                transition={{ease: "easeOut", duration: 60, repeat: Infinity, repeatType: "reverse", repeatDelay: 0}}
                            >
                                <SliderImage src={slide.url}/>
                            </motion.div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
            <InfoWrapper>
                <Header>
                    {data.title}
                </Header>
                <Description>
                    {data.description}
                </Description>
                <ButtonMain>Подробнее</ButtonMain>
            </InfoWrapper>
        </Container>
    );
};

export default MainPage;