import styled from "styled-components";
import {textLink} from "../../theme/text";

export const ContainerColumn = styled.ul`
  display: flex;
  flex-direction: column;
  &:first-child{
    margin-right: 10px;
`

export const SocialItem = styled.li`
    font-size: 5px;
    line-height: 5px;
`

export const ContactsItem = styled.li`
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
`

export const SocialLinkText = styled(textLink)`
`

export const ContactsLinkTel = styled(textLink)`
  font-size: 16px;
  line-height: 16px;
  text-transform: uppercase;
`

export const ContactsLinkMail = styled(textLink)`
  font-size: 12px;
  line-height: 12px;
  text-transform: lowercase;
`

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`