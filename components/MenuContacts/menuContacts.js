import React from 'react';
import {FaTelegramPlane, FaWhatsapp, FaInstagram, FaPhone} from 'react-icons/fa';
import {MdAlternateEmail} from 'react-icons/md'
import {ContainerRow, ContainerColumn, ContactsLinkText, SocialLinkText} from "./styles";

const MenuContacts = ({contactsInfo}) => {
    return (
        <div>
            <ContainerColumn>
                <li>
                    <ContactsLinkText href={contactsInfo.tel}>
                        <FaPhone/>
                        {contactsInfo.tel}
                    </ContactsLinkText>
                </li>
                <li>
                    <ContactsLinkText href={contactsInfo.email}>
                        <MdAlternateEmail/>
                        {contactsInfo.email}
                    </ContactsLinkText>
                </li>
            </ContainerColumn>
            <ContainerRow>
                <li>
                    <SocialLinkText href={contactsInfo.telegram}>
                        <FaTelegramPlane/>
                    </SocialLinkText>
                </li>
                <li>
                    <SocialLinkText href={contactsInfo.watsup}>
                        <FaWhatsapp/>
                    </SocialLinkText>
                </li>
                <li>
                    <SocialLinkText href={contactsInfo.instagram}>
                        <FaInstagram/>
                    </SocialLinkText>
                </li>
            </ContainerRow>
        </div>
    );
};

export default MenuContacts;