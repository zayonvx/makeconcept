import styled from "styled-components";
import {ItemImage} from "../../theme/image";
import {TextBlock} from "../../theme/text";
import {ButtonMint, ButtonOrange} from "../../components/ui/button";

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const ItemWrapper = styled.div`
  position: relative;
  display: flex;
  width: 24%;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
  &:hover{
    h3, p {
      display: none;
    }
    button {
      display: block;
    }
  }
`

export const ItemHeader = styled.h3`
    text-transform: uppercase;
    font-size: 16px;
    margin-bottom: 10px;
`

export const ItemImageServices = styled(ItemImage)`
    filter: brightness(30%);
`

export const ItemDescription = styled(TextBlock)`
    font-size: 14px;
`

export const ItemTextWrapper = styled.div`
    position: absolute;
    top: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ItemButton = styled(ButtonOrange)`
  display: none;
  border-radius: 0;
  padding: 10px;
`

export const MoreButton = styled(ButtonMint)`
  padding: 10px;
  border-radius: 0;
`