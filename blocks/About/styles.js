import styled from "styled-components";
import {TextBlock} from "../../theme/text";

export const TextBlockAbout = styled(TextBlock)`
  display: block;
`

export const Wrapper = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    > img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`