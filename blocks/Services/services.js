import React, {useState} from 'react';
import {Container} from "../../components/ui/container";
import {ItemHeader, ItemImageServices, ItemsWrapper, ItemWrapper, Text} from "./styles";
import {SectionHeader} from "../../theme/text";

const Services = ({data, items}) => {
    return (
        <Container dark>
            <SectionHeader>{data.title}</SectionHeader>
            <ItemsWrapper>
            {items.map(item =>
            <ItemWrapper key={item.title}>
                    <ItemImageServices src={item.image.url} alt="test"/>
                    <ItemHeader>{item.title}</ItemHeader>
            </ItemWrapper>
            )}
            </ItemsWrapper>
        </Container>

    );
};

export default Services;