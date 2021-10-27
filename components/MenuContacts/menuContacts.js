import React from 'react';
import {FaTelegramPlane, FaWhatsapp, FaInstagram,} from 'react-icons/fa'

import {
    ContainerColumn,
    SocialLinkText,
    ContactsLinkTel,
    ContactsLinkMail, ContactsItem, ContactsWrapper, SocialItem
} from "./styles";

const MenuContacts = ({contactsInfo}) => {
    return (
        <ContactsWrapper>
            <ContainerColumn>
                <SocialItem>
                    <SocialLinkText target="_blank" href={contactsInfo.telegram}>
                        <FaTelegramPlane/>
                    </SocialLinkText>
                </SocialItem>
                <SocialItem>
                    <SocialLinkText target="_blank" href={contactsInfo.watsap}>
                        <FaWhatsapp/>
                    </SocialLinkText>
                </SocialItem>
                <SocialItem>
                    <SocialLinkText target="_blank" href={contactsInfo.instagram}>
                        <FaInstagram/>
                    </SocialLinkText>
                </SocialItem>
            </ContainerColumn>
            <ContainerColumn>
                <ContactsItem>
                    <ContactsLinkTel href={contactsInfo.linktel}>
                        {contactsInfo.tel}
                    </ContactsLinkTel>
                </ContactsItem>
                <ContactsItem>
                    <ContactsLinkMail href={contactsInfo.linkmail}>
                        {contactsInfo.email}
                    </ContactsLinkMail>
                </ContactsItem>
            </ContainerColumn>
        </ContactsWrapper>
    );
};

export default MenuContacts;