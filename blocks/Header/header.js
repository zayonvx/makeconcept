import React from 'react';
import NavBar from "../../components/Navbar";

const Header = ({menuItems}) => {
    return (
        <div>
            <NavBar menuItems={menuItems}/>
        </div>
    );
};

export default Header;