import React, {FC} from "react";
import {motion} from "framer-motion";
import Info from "../components/Info";
import ImageOne from "../images/1.jpg";
import {animationTwo} from "../animations";
import Header from "../components/Header";
import MyPhoto from "../images/me.jpg";
import MobileMenu from "../components/MobileMenu";
import {Bars} from "../components/MobileMenu/styled";
import {MobileMenuProps} from "../core/types";

const Home: FC<MobileMenuProps> = ({isOpen, toggle}) => {
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
                image={ImageOne}
                title="Портфолио"
                desc={`Приветствую Вас. Меня зовут Марат Зайнуллин.
                    Я Frontend-разработчик`}
                photo={MyPhoto}
            />
        </motion.div>
    );
};

export default Home;
