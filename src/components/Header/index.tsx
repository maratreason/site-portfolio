import React, {FC, useState} from "react";
import {useHistory} from "react-router-dom";
import {Logo, Navbar, NavbarLink, NavbarList} from "./styled";

const Header: FC = () => {
    let history = useHistory();

    const [menu, setMenu] = useState([
        {id: 1, path: "/", name: "About"},
        {id: 2, path: "/skills", name: "Skills"},
        {id: 3, path: "/my-projects", name: "My Projects"},
    ]);

    return (
        <Navbar>
            <Logo to="/">Marat Zainullin</Logo>
            <NavbarList>
                {menu && menu.map((m: any) => {
                    return <NavbarLink
                        key={m.id}
                        to={m.path}
                        activeStyle={{
                            borderBottom: (history.location.pathname === m.path) ? "3px solid #fff" : "3px solid transparent",
                        }}
                    >{m.name}</NavbarLink>
                })}
            </NavbarList>
        </Navbar>
    );
};

export default Header;
