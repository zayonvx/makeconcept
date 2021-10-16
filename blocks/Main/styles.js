import styled from "styled-components";
import colors from "../../theme/colors";
import {textHeader} from "../../theme/text";

export const SliderImage = styled.img`
  width: 100%;
  height: 100%;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  position: relative;
`

export const MainTextBlock = styled.div`
  display: flex;
  padding: 25px;
  z-index: 10;
  align-self: center;
  position: absolute;
  top: 40%;
  background: rgba(25,25,25,0.7);
`
export const MainTextHeader = styled(textHeader)`

`