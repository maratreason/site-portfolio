import React, {FC, useState} from "react";
import {motion} from "framer-motion";
import Info from "../components/Info";
import ImageTwo from "../images/2.jpg";
import {animationTwo} from "../animations";
import Header from "../components/Header";
import {MobileMenuProps, Skill} from "../core/types";
import {Bars} from "../components/MobileMenu/styled";
import MobileMenu from "../components/MobileMenu";

const Skills: FC<MobileMenuProps> = ({isOpen, toggle}) => {
    const [frontSkills, setFrontSkills] = useState<Skill[]>([
        {id: 1, name: "HTML"},
        {id: 2, name: "CSS"},
        {id: 3, name: "SCSS"},
        {id: 4, name: "JavaScript"},
        {id: 5, name: "jQuery"},
        {id: 6, name: "React"},
        {id: 7, name: "Redux"},
        {id: 8, name: "TypeScript"},
        {id: 9, name: "Styled-components"},
        {id: 10, name: "GraphQL"},
    ]);

    const [backSkills, setBackSkills] = useState<Skill[]>([
        {id: 1, name: "NodeJs"},
        {id: 2, name: "PHP"},
        {id: 3, name: "SQL"},
        {id: 4, name: "MongoDB"},
    ]);
    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={animationTwo}
        >
            <Bars onClick={toggle} />
            <MobileMenu toggle={toggle} isOpen={isOpen} />
            <Header />
            <Info
                image={ImageTwo}
                title="Мои навыки"
                frontSkills={frontSkills}
                backSkills={backSkills}
            />
        </motion.div>
    );
};

export default Skills;
