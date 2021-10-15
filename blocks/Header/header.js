import React from 'react';
import Container from "./styles";
import NavBar from "../../components/NavBar/Navbar";

const Header = ({menuItems}) => {
    return (
        <Container>
            <NavBar menuItems={menuItems}/>
        </Container>
    );
};

export default Header;