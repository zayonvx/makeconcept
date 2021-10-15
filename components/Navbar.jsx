import React from 'react';
import styled, {css} from 'styled-components';
import Link from "next/link";

const MenuWrapper =  styled.div`
    background: #252525;
    display: flex;
    justify-content: flex-end;
    padding: 25px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  color: #FFF;
  margin-right: 25px;
  &:hover {
    color: #FF8C00;
  }
`;

const NavBar = ({menuItems}) => {
    return (
        <MenuWrapper>
            {menuItems.map(menu =>
                <Link key={menu.extid} href={menu.link} passHref>
                    <StyledLink>{menu.title}</StyledLink>
                </Link>
            )}
        </MenuWrapper>
    );
};

export default NavBar ;