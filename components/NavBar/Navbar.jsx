import React, {useRef, useState} from 'react';
import Link from 'next/link'
import StyledLink from "../ui/link";
import Container from "./styles";



const NavBar = ({menuItems}) => {
    return (
        <Container>
            {menuItems.map(menu =>
                <Link key={menu.extid} href={menu.link} passHref>
                    <StyledLink>{menu.title}</StyledLink>
                </Link>
            )}
        </Container>
    );
};

export default NavBar ;