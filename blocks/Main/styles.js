import styled from "styled-components";
import {ButtonMint} from "../../components/ui/button";

export const SliderImage = styled.img`
  width: 100%;
  height: 900px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  position: relative;
`

export const ButtonMain = styled(ButtonMint)`
  position: absolute;
  z-index: 5;
  align-self: center;
  top: 50%;
`