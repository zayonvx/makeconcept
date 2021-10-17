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
  height: 400px;
`

export const SwiperWrapper = styled.div`
  width: 960px;
  overflow: hidden;
  margin: 0 auto;
`