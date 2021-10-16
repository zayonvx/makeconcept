import styled from "styled-components";
import textLink from "../../theme/text";
import {Row} from "./row";

let StyledLink = styled(Row);

StyledLink = styled(textLink)`
  align-items: center;
  margin-right: 25px;
  &:last-child {
    margin-right: 0;
  }
`;

export default StyledLink;