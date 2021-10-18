import React from 'react';
import {StructuredText} from "react-datocms";
import {Container} from "../../components/ui/container";
import {ItemHeader, ItemImage, ItemsWrapper, ItemWrapper, SectionHeader} from "./styles";

const Services = ({data, items}) => {
    return (
        <Container dark>
            <SectionHeader>{data.title}</SectionHeader>
            <ItemsWrapper>
            {items.map(item =>
            <ItemWrapper>
                    <ItemImage src={item.image.url} alt="test"/>
                    <ItemHeader>{item.title}</ItemHeader>
                    <StructuredText data={item.description}/>
            </ItemWrapper>
            )}
            </ItemsWrapper>
        </Container>

    );
};

export default Services;