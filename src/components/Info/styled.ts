import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";
import {SectionProps} from "../../core/types";

export const Section = styled.div`
    background: url(${({image}: SectionProps) => image && image}) center
        no-repeat;
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -60px;

    @media screen and (max-width: 1250px) {
        flex-wrap: wrap;
        height: 100%;
        padding: 5rem 2rem;
    }

    @media screen and (max-width: 1200px) {
        flex-wrap: wrap;
        height: 100%;
        padding: 5rem 2rem;
    }
`;

export const Container = styled(motion.div)`
    color: #fff;
    padding: 2rem;
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.4);
    margin: 2rem;
    border-radius: 10px;
    width: 800px;
    min-width: 500px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 600px) {
        min-width: 100%;
    }
`;

export const InfoTitle = styled(motion.h2)`
    font-size: clamp(2rem, 8vw, 4rem);
    line-height: 1;
    margin-bottom: 3rem;
`;

export const InfoDesc = styled(motion.p)`
    font-size: clamp(1rem, 6vw, 2rem);
    margin-bottom: 1rem;
    line-height: clamp(1.5rem, 6vw, 2.5rem);
`;

export const InfoListWrapper = styled(motion.div)`
    display: flex;
    margin-bottom: 2rem;

    @media screen and (max-width: 860px) {
        flex-direction: column;
        margin: 0;
    }
`;

export const InfoList = styled(motion.ul)`
    border-radius: 10px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background: rgba(0, 0, 0, 0.2);

    &:not(:last-child) {
        margin-right: 2rem;

        @media screen and (max-width: 860px) {
            margin-right: 0;
        }
    }

    @media screen and (max-width: 860px) {
        margin-bottom: 2rem;
    }
    
`;

export const InfoListTitle = styled(motion.div)`
    margin-bottom: 1rem;
    font-size: clamp(1rem, 4vw, 1.5rem);
    font-weight: bold;
`;

export const InfoListItem = styled(motion.li)`
    line-height: 1.8;
    cursor: pointer;
    min-width: 150px;

    &:hover {
        transition: 0.2s ease-in-out;
        font-weight: bold;
        text-shadow: 2px 2px 5px rgba(255, 255, 255, 1);
    }
`;

export const Button = styled(motion.button)`
    font-size: clamp(0.8rem, 4vw, 1.2rem);
    padding: 0.8rem 2rem;
    color: #000;
    background: #ffb347;
    background: linear-gradient(to right, #ffcc33, #ffb347);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    align-self: flex-end;
    
    &:hover {
        background: linear-gradient(to right, #ffcc33, #ffcc33);
    }
`;

export const Photo = styled(motion.div)`
    background: url(${({photo}: SectionProps) => photo && photo}) center
        no-repeat;
    background-size: cover;
    width: 400px;
    height: 400px;
    margin: 2rem;
    border-radius: 10px;
`;

export const ProjectList = styled(motion.ul)`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 2rem;

    @media screen and (max-width: 1200px) {
        width: 100%;
        margin: 0;
    }
`;

export const ProjectListItem = styled(motion.li)`
    background: url(${({imageSrc}: any) => imageSrc ? imageSrc : ""}) no-repeat center;
    background-size: cover;
    display: block;
    width: 270px;
    height: 170px;
    border-radius: 10px;
    overflow: hidden;
    margin: 1rem;
    cursor: pointer;
    
    &:hover {
        transition: 0.2s ease-in-out;
        box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.5);
    }

    @media screen and (max-width: 1200px) {
        width: 450px;
        height: 300px;
    }

    @media screen and (max-width: 963px) {
        width: 100%;
        height: 100%;
        min-height: 300px;
        margin: 0;
    }
`;

export const Anchor = styled.a`
    @media screen and (max-width: 963px) {
        width: 100%;
        margin-bottom: 1rem;
    }
`;

export const ProjectItem = styled(NavLink)`
`;
