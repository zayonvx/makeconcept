import styled from "styled-components";
import {StructuredText} from "react-datocms";
import {ButtonBase} from "../../theme/buttons";
import colors from "../../theme/colors";
import {ButtonOrange} from "../../components/ui/button";
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
    h3 {
      background: ${colors.bg.primary};
      border-radius: 2px;
      padding-left: 5px;
      padding-right: 5px;
      transition: ease 1s;
      &:hover {
        transform: translateY(10%);
      }
    }
    img {
      filter: brightness(85%);
    }
  }
`

export const ItemHeader = styled.h3`
    text-transform: uppercase;
    font-size: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
    filter: brightness(100%);
    position: absolute;
    top: 50%;
`
export const ItemButton = styled(ButtonOrange)`
    padding: 5px 10px;
    font-size: 14px;
`

export const ItemImageServices = styled(ItemImage)`
    filter: brightness(40%);
`