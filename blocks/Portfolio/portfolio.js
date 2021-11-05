import React, {useState} from 'react';
import 'swiper/css/bundle';
import {Container} from "../../components/ui/container";
import {SectionHeader} from "../../theme/text";
import {Swiper, SwiperSlide} from "swiper/react";

import SwiperCore, {
    FreeMode,Navigation,Thumbs
} from 'swiper';
import {ItemImage} from "../../theme/image";
import {SwiperWrapper, ThumbsWrapper} from "./styles";
SwiperCore.use([FreeMode,Navigation,Thumbs]);

const Portfolio = ({data, gallery}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <Container id="portfolio">
            <SectionHeader dark>Портфолио</SectionHeader>
            <SwiperWrapper>
                <Swiper style={{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}} spaceBetween={10} navigation={true} loop={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2">
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