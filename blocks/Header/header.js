import React from 'react';
import {Container, HeaderBlock, HeaderDescription, HeaderText, LogoWrapper} from "./styles";
import NavBar from "../../components/NavBar/Navbar";
import Logo from "../../components/Logo/logo";
import MenuContacts from "../../components/MenuContacts/menuContacts";

const Header = ({menuItems, logo, contacts}) => {
    return (
        <Container>
            <LogoWrapper>
                <Logo data={logo}/>
                <HeaderBlock>
                    <HeaderText>
                        Make Concept
                    </HeaderText>
                    <HeaderDescription>
                        Студия интерьерного дизайна
                    </HeaderDescription>
                </HeaderBlock>
            </LogoWrapper>
            <NavBar menuItems={menuItems}/>
            <MenuContacts contactsInfo={contacts}/>
        </Container>
    );
};

export default Header;