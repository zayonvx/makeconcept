import styled from "styled-components";
import colors from "../../theme/colors";
import textLink from "../../theme/text";

export const ContainerRow = styled.ul`
  display: flex;
  flex-direction: row;
  width: 80px;
  justify-content: space-between;
`

export const ContainerColumn = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

export const SocialLinkText = styled(textLink)`
`

export const ContactsLinkText = styled(textLink)`
  font-size: 12px;
  &:before {
    padding-left: 5px;
  }
`

