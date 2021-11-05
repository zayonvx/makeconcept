import React, {useState} from 'react';
import {Container} from "../../components/ui/container";
import {
    ItemButton,
    ItemDescription,
    ItemHeader,
    ItemImageServices,
    ItemsWrapper,
    ItemTextWrapper,
    ItemWrapper, MoreButton
} from "./styles";
import {SectionHeader} from "../../theme/text";



const Services = ({data, items}) => {
    const [itemsToShow, setItemsToShow] = useState(4);

    const showMore = () => {
        setItemsToShow(items.length)
    }

    const showLess = () => {
        setItemsToShow(4)
    }
    return (
        <Container>
            <SectionHeader dark>{data.title}</SectionHeader>
            <ItemsWrapper>
            {items.slice(0, itemsToShow).map(item =>
            <ItemWrapper key={item.title}>
                    <ItemImageServices src={item.image.url} alt="test"/>
                    <ItemTextWrapper>
                        <ItemHeader>{item.title}</ItemHeader>
                        <ItemDescription>{item.description}</ItemDescription>
                        <ItemButton>Перейти</ItemButton>
                    </ItemTextWrapper>
            </ItemWrapper>
            )}
            </ItemsWrapper>
            {(itemsToShow === 4) ? <MoreButton onClick={showMore}>Показать больше</MoreButton>
                : <MoreButton onClick={showLess}>Скрыть элементы</MoreButton>}

        </Container>

    );
};

export default Services;