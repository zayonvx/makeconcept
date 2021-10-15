import React from 'react';
import Link from 'next/link'
import {StyledLink} from "../ui/link";

const NavBar = ({menuItems}) => {
    return (
        <div>
            {menuItems.map(menu =>
                <Link key={menu.extid} href={menu.link} passHref>
                    <StyledLink>{menu.title}</StyledLink>
                </Link>
            )}
        </div>
    );
};

export default NavBar ;