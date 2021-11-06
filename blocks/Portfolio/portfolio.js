import React, {useState} from 'react';
import 'swiper/css/bundle';
import {Container} from "../../components/ui/container";
import {SectionHeader} from "../../theme/text";
import {Swiper, SwiperSlide} from "swiper/react";

import SwiperCore, {
    FreeMode,Navigation,Thumbs
} from 'swiper';
import {ItemImage} from "../../theme/image";
import {GalleryPopup, SwiperWrapper, ThumbsWrapper} from "./styles";
import Arrow from "../../components/Arrow/arrow";
import {Button} from "../../components/Arrow/styles";
SwiperCore.use([FreeMode,Navigation,Thumbs]);



const Portfolio = ({data, gallery}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [fullView, changeViewTo] = useState(false);

    const setFullView = () => {
        changeViewTo(true);
    }

    const setNormalView = () => {
        changeViewTo(false);
    }


    return (
        <Container id="portfolio">
            <SectionHeader dark>Портфолио</SectionHeader>
            <SwiperWrapper>
                <Swiper spaceBetween={10} loop={true} thumbs={{ swiper: thumbsSwiper }}
                    navigation={{
                        prevEl: '.button__prev',
                        nextEl: '.button__next',
                    }}
                    className="mySwiper2">
                    <Arrow/>
                    <Arrow right/>
                        {gallery.images.map(image =>
                            <SwiperSlide key={image.url}>
                                <ItemImage src={image.url}/>
                            </SwiperSlide>
                        )}
                    </Swiper>
            </SwiperWrapper>
            <ThumbsWrapper>
                <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} loop={true} className="mySwiper">
                    {gallery.images.map(image =>
                        <SwiperSlide key={image.url}>
                            <ItemImage src={image.url}/>
                        </SwiperSlide>
                    )}
                </Swiper>
            </ThumbsWrapper>
        </Container>
    );
};

export default Portfolio;