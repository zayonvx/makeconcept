import styled, {css} from "styled-components";
import colors from "../../theme/colors";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: auto;
  position: relative;
  max-width: ${props => props.full ? "100%" : "960px"};
  background: ${props => props.dark ? colors.bg.primary : colors.bg.secondary};
  margin: ${props => props.full? "0" : "0 auto"};
  margin-bottom: 50px;
`

