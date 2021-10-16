import React from 'react';
import Container from "./styles";
import NavBar from "../../components/NavBar/Navbar";
import Logo from "../../components/Logo/logo";
import MenuContacts from "../../components/MenuContacts/menuContacts";

const Header = ({menuItems, logo, contacts}) => {
    return (
        <Container>
            <Logo data={logo}/>
            <NavBar menuItems={menuItems}/>
            <MenuContacts contactsInfo={contacts}/>
        </Container>
    );
};

export default Header;