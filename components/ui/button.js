import styled from "styled-components";
import {ButtonBase} from "../../theme/buttons";
import colors from "../../theme/colors";

export const ButtonMint = styled(ButtonBase)`
  color: ${colors.button.buttonTextDark};
  background: ${colors.button.buttonBackgroundMint};
  &:hover {
    background: ${colors.button.hover.buttonBackgroundPink};
    color: ${colors.button.hover.buttonText};
  }
`

export const ButtonOrange = styled(ButtonBase)`
  color: ${colors.button.buttonTextDark};
  background: ${colors.button.buttonBackgroundOrange};
  &:hover {
    background: ${colors.button.buttonBackgroundMint};
  }
`