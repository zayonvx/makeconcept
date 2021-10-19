import React, {useState} from 'react';
import {Container} from "../../components/ui/container";
import {ItemButton, ItemHeader, ItemsWrapper, ItemWrapper, Text} from "./styles";
import {SectionHeader, TextWrapper} from "../../theme/text";
import {ItemImage} from "../../theme/image";

const Services = ({data, items}) => {
    const [visible, setVisible] = useState(false);
    return (
        <Container dark>
            <SectionHeader>{data.title}</SectionHeader>
            <ItemsWrapper>
            {items.map(item =>
            <ItemWrapper key={item.title}>
                    <ItemImage src={item.image.url} alt="test"/>
                    <ItemHeader>{item.title}</ItemHeader>
                    <ItemButton onClick={() => setVisible(true)}>Подробнее</ItemButton>
                    { visible ? <TextWrapper data={item.description}/> : null}
            </ItemWrapper>
            )}
            </ItemsWrapper>
        </Container>

    );
};

export default Services;