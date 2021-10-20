import styled from "styled-components";
import {textLink} from "../../theme/text";
import {FaPhone} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';

export const SocialIconMail = styled(AiOutlineMail)`
  margin-right: auto;
`

export const SocialIconTel = styled(FaPhone)`
  margin-right: 3px;
`

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
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
`

export const SocialItem = styled.li`

`

export const SocialLinkText = styled(textLink)`
`

export const ContactsLinkTel = styled(textLink)`
  font-size: 16px;
`

export const ContactsLinkMail = styled(textLink)`
  font-size: 12px;
  
`

export const ContactsItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`
export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`