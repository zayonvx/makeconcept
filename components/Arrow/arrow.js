import React from 'react';
import {BsChevronDoubleLeft, BsChevronDoubleRight} from "react-icons/bs";
import {Button} from "./styles";


const Arrow = ({right}) => {
    if (right) {
        return (
            <Button right className={`button__next`} type={"button"}>
                <BsChevronDoubleRight/>
            </Button>
        );
    } else {
        return (
            <Button className={`button__prev`} type={"button"}>
                <BsChevronDoubleLeft/>
            </Button>
        );
    }
};

export default Arrow;