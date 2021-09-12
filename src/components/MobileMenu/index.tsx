import React, {FC} from "react";
import {MobileMenuProps} from "../../core/types";
import {
    DropdownContainer,
    Icon,
    CloseIcon,
    DropdownWrapper,
    DropdownMenu,
    DropdownLink,
} from "./styled";

const MobileMenu: FC<MobileMenuProps> = ({isOpen, toggle}) => {
    return (
        <DropdownContainer onClick={toggle} isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    <DropdownLink to="/">About</DropdownLink>
                    <DropdownLink to="/skills">Skills</DropdownLink>
                    <DropdownLink to="/my-projects">My Projects</DropdownLink>
                </DropdownMenu>
            </DropdownWrapper>
        </DropdownContainer>
    );
};

export default MobileMenu;
