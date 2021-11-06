import styled from "styled-components";
import colors from "../../theme/colors";

export const Button = styled.button`
    border: none;
    outline: none;
    font-size: 3rem;
    height: 4rem;
    width: 6rem;
    background: rgba(44,29,29,.9);
    color: #fff;
    transition: all 0.3s ease;
    &:hover {
      background: #fff;
      color: rgba(44, 29, 29, .9);
    }
    &:active {
      background: ${colors.text.accent};
    }
    z-index: 999;
    position: absolute;
    top: 40%;
    right: ${props => props.right ? 0 : "none"};
`
