import styled from "styled-components";
import {ItemImage} from "../../theme/image";

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const ItemWrapper = styled.div`
  position: relative;
  display: flex;
  width: 25%;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
  transition: ease 1s;
  &:hover {
    transform: scale(1.2);
    z-index: 20;
    }
`

export const ItemHeader = styled.h3`
    text-transform: uppercase;
    font-size: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
    position: absolute;
    top: 50%;
`

export const ItemImageServices = styled(ItemImage)`
    filter: brightness(50%);
`