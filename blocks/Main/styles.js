import styled from "styled-components";
import colors from "../../theme/colors";
import {ButtonMint} from "../../components/ui/button";

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

export const ButtonMain = styled(ButtonMint)`
  position: absolute;
  z-index: 10;
  align-self: center;
  top: 50vh;
`