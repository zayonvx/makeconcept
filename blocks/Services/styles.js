import styled from "styled-components";
import {sectionHeader} from "../../theme/text";

export const SectionHeader = styled(sectionHeader)`
margin-bottom: 20px;
`

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 50px;
  padding-right: 50px;
`

export const ItemWrapper = styled.div`
  display: flex;
  width: 25%;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
`

export const ItemHeader = styled.h3`
    text-transform: uppercase;
    font-size: 14px;
    margin-bottom: 10px;
`

export const ItemImage = styled.img`
width: 100%;
height: auto;
margin-bottom: 10px;  
`