import React from 'react';
import {FaTelegramPlane, FaWhatsapp, FaInstagram, FaPhone} from 'react-icons/fa';
import {MdAlternateEmail} from 'react-icons/md'
import {ContainerRow, ContainerColumn, ContactsLinkText, SocialLinkText} from "./styles";

const MenuContacts = ({contactsInfo}) => {
    return (
        <div>
            <ContainerColumn>
                <li>
                    <ContactsLinkText href={contactsInfo.linktel}>
                        <FaPhone/>
                        {contactsInfo.tel}
                    </ContactsLinkText>
                </li>
                <li>
                    <ContactsLinkText href={contactsInfo.linkmail}>
                        <MdAlternateEmail/>
                        {contactsInfo.email}
                    </ContactsLinkText>
                </li>
            </ContainerColumn>
            <ContainerRow>
                <li>
                    <SocialLinkText target="_blank" href={contactsInfo.telegram}>
                        <FaTelegramPlane/>
                    </SocialLinkText>
                </li>
                <li>
                    <SocialLinkText target="_blank" href={contactsInfo.watsap}>
                        <FaWhatsapp/>
                    </SocialLinkText>
                </li>
                <li>
                    <SocialLinkText target="_blank" href={contactsInfo.instagram}>
                        <FaInstagram/>
                    </SocialLinkText>
                </li>
            </ContainerRow>
        </div>
    );
};

export default MenuContacts;