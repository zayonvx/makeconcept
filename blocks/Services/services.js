import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
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
import {SectionHeader, TextWrapper} from "../../theme/text";
import {Button} from "@mui/material";
import {TextBlockAbout} from "../About/styles";



const Services = ({data, items}) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


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
                        <ItemButton onClick={handleOpen}>Подробнее</ItemButton>
                        <Modal
                            hideBackdrop
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="child-modal-title"
                            aria-describedby="child-modal-description"
                        >
                            <Box sx={{ ...style, width: 900 }}>
                                <TextBlockAbout dark>
                                    <TextWrapper data={item.moredescription}/>
                                </TextBlockAbout>
                                <Button onClick={handleClose}>Закрыть</Button>
                            </Box>
                        </Modal>
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