import React from 'react';
import {Container} from "../../components/ui/container";
import {ItemHeader, ItemsWrapper, ItemWrapper, Text} from "./styles";
import {SectionHeader, TextWrapper} from "../../theme/text";
import {ItemImage} from "../../theme/image";

const Services = ({data, items}) => {
    return (
        <Container dark>
            <SectionHeader>{data.title}</SectionHeader>
            <ItemsWrapper>
            {items.map(item =>
            <ItemWrapper key={item.title}>
                    <ItemImage src={item.image.url} alt="test"/>
                    <ItemHeader>{item.title}</ItemHeader>
                    <TextWrapper data={item.description}/>
            </ItemWrapper>
            )}
            </ItemsWrapper>
        </Container>

    );
};

export default Services;