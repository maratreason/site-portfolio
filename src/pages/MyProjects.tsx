import React, {FC, useState} from "react";
import {motion} from "framer-motion";
import Header from "../components/Header";
import Info from "../components/Info";
import {animationThree} from "../animations";
import ImageThree from "../images/3.jpg";
import ImageOne from "../images/projects/travel.png";
import ImageTwo from "../images/projects/cinema.png";
import ImageGrosery from "../images/projects/verstka.png";
import ImageFour from "../images/projects/spektr.png";
import ImageFive from "../images/projects/kraski.png";
import {InfoProject, MobileMenuProps} from "../core/types";
import MobileMenu from "../components/MobileMenu";
import {Bars} from "../components/MobileMenu/styled";

const MyProjects: FC<MobileMenuProps> = ({isOpen, toggle}) => {
    const [projects, setProjects] = useState<InfoProject[]>([
        {
            id: 1,
            title: "Travel Site",
            url: "https://trip-site-graphql.vercel.app/",
            imageSrc: ImageOne,
        },
        {
            id: 2,
            title: "Cinema App",
            url: "https://cinema-app-umber.vercel.app/",
            imageSrc: ImageTwo,
        },
        {
            id: 3,
            title: "Grosery Site",
            url: "https://hungry-people.vercel.app/",
            imageSrc: ImageGrosery,
        },
        {
            id: 4,
            title: "Spektr-f",
            url: "https://ferraantikor.ru/",
            imageSrc: ImageFour,
        },
        {
            id: 5,
            title: "Kraski-Hemi",
            url: "https://spektrf.ru/",
            imageSrc: ImageFive,
        },
    ]);

    return (
        <motion.div
            initial="out"
            animate="end"
            exit="out"
            variants={animationThree}
        >
            <Bars onClick={toggle} />
            <MobileMenu toggle={toggle} isOpen={isOpen} />
            <Header />
            <Info
                image={ImageThree}
                title="Выполненные проекты"
                desc="Проекты, которыми я горжусь (2 из них на продакшене)"
                projects={projects}
            />
        </motion.div>
    );
};

export default MyProjects;
