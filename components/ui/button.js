import styled from "styled-components";
import {ButtonBase} from "../../theme/buttons";
import colors from "../../theme/colors";

export const ButtonMint = styled(ButtonBase)`
  color: ${colors.button.buttonText};
  background: ${colors.button.buttonBackground};
  &:hover {
    background: ${colors.button.hover.buttonBackground};
    color: ${colors.button.hover.buttonText};
  }
`