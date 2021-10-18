import styled from "styled-components";
import {Container} from "../../components/ui/container";
import {sectionHeader} from "../../theme/text";

export const ContainerPortfolio = styled(Container)`
  flex-direction: column;
`

export const Header = styled(sectionHeader)`
  margin-bottom: 20px;
`

export const SliderImage = styled.img`
  width: 100%;
  height: auto;
`

export const SwiperWrapper = styled.div`
  width: 960px;
  height: 600px;
  overflow: hidden;
  margin: 0 auto;
`