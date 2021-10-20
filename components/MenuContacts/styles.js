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
<<<<<<< HEAD
  &:first-child{
    margin-right: 10px;
=======
  margin-bottom: 10px;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
>>>>>>> 6ad240d467120e834327884b84a4c437d2eefd2b
  }
`

export const SocialItem = styled.li`
<<<<<<< HEAD
    font-size: 12px;
    line-height: 12px;
`

export const ContactsItem = styled.li`
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
=======

>>>>>>> 6ad240d467120e834327884b84a4c437d2eefd2b
`

export const SocialLinkText = styled(textLink)`
`

export const ContactsLinkTel = styled(textLink)`
  font-size: 16px;
<<<<<<< HEAD
  line-height: 16px;
=======
>>>>>>> 6ad240d467120e834327884b84a4c437d2eefd2b
`

export const ContactsLinkMail = styled(textLink)`
  font-size: 12px;
  line-height: 12px;
`

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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