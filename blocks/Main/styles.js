import styled from "styled-components";
import {ButtonMint, ButtonOrange} from "../../components/ui/button";

export const SliderImage = styled.img`
  width: 100%;
  height: 900px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: auto;
  position: relative;
`

export const InfoWrapper = styled.div`
  position: absolute;
  z-index: 5;
  align-self: center;
  top: 50%;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #000;
  border-radius: 15px;
`

export const ButtonMain = styled(ButtonOrange)`
  padding: 15px 30px;
  font-size: 16px;
`
export const Header = styled.h1`
  font-size: 22px;
  text-align: center;
  margin-bottom: 20px;
`