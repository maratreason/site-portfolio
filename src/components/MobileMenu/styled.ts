import styled from "styled-components";
import {Link} from "react-router-dom";
import {FaTimes, FaBars} from "react-icons/fa";

export const Bars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
        position: fixed;
        display: block;
        color: #fff;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 2.5rem;
        border-radius: 5px;
        cursor: pointer;
        z-index: 10;
    }
`;

export const DropdownContainer = styled.div<any>`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #ffb347;
    background: linear-gradient(to right, #ffcc33, #ffb347);
    display: grid;
    align-items: center;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
    top: ${(props) => (props.isOpen ? "0" : "-100%")};
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    font-size: 2rem;
    background: transparent;
    cursor: pointer;
    outline: none;
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const DropdownWrapper = styled.div``;

export const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 60px);
    }
`;

export const DropdownLink = styled(Link)`
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        color: #fff;
        font-weight: bold;
        text-shadow: 2px 2px 5px rgba(255, 255, 255, 0.5);
    }
`;
