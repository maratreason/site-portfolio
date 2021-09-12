import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Navbar = styled.nav`
    height: 60px;
    background: transparent;
    padding: 0rem calc((100vw - 1300px) / 2);
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {
        opacity: 0;
    }
`;

export const Logo = styled(NavLink)`
    color: #fff;
    padding-left: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
`;

export const NavbarList = styled.div``;

export const NavbarLink = styled(NavLink)`
    color: #fff;
    margin: 0.7rem;
    padding: 0.3rem;
    padding-bottom: 0.2rem;
    transition: 0.2s ease-in-out;
    border-bottom: 3px solid transparent;

    &:hover {
        border-bottom: 3px solid #fff !important;
    }
`;