import styled from "styled-components";
import {Container} from "../../components/ui/container";
import {sectionHeader, textBlock} from "../../theme/text";

export const ContainerAbout = styled(Container)`
  flex-direction: column;
  margin-bottom: 50px;
`

export const Header = styled(sectionHeader)`
  margin-bottom: 20px;
`

export const TextBlockAbout = styled(textBlock)`
  display: block;
`

export const WrapperText = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`