import React, {FC, useState} from "react";
import {useHistory} from "react-router-dom";
import {
    Button,
    Container,
    InfoDesc,
    InfoList,
    InfoListItem,
    InfoListTitle,
    InfoListWrapper,
    InfoTitle,
    Photo,
    ProjectItem,
    ProjectList,
    ProjectListItem,
    Section,
    Anchor,
} from "./styled";
import {animationText, animationTextRight, listVariants, animationProject, animationButton} from "../../animations";
import {InfoProject, InfoProps, InfoRoutes, Skill} from "../../core/types";

const Info: FC<InfoProps> = ({
    image,
    title,
    desc,
    photo,
    frontSkills,
    backSkills,
    projects,
}) => {
    let history = useHistory();

    const [routes, setRoutes] = useState<InfoRoutes[]>([
        {id: 1, path: "/"},
        {id: 2, path: "/skills"},
        {id: 3, path: "/my-projects"},
    ]);

    const setLocation = () => {
        let index = routes.findIndex(route => route.path === history.location.pathname);
        if (routes[index + 1]) {
            history.push(routes[index + 1].path);
        }
    }

    return (
        <Section image={image}>
            <Container
                initial="in"
                animate="out"
                variants={animationText}
                transition={{delay: 0.4}}
            >
                <InfoTitle
                    initial="in"
                    animate="out"
                    variants={animationText}
                    transition={{delay: 0.5}}
                >
                    {title}
                </InfoTitle>
                <InfoDesc
                    initial="in"
                    animate="out"
                    variants={animationText}
                    transition={{delay: 0.55}}
                >
                    {desc}
                </InfoDesc>
                
                {(frontSkills && backSkills) &&
                    <InfoListWrapper>
                        <InfoList>
                            {<InfoListTitle>Frontend</InfoListTitle>}
                            {frontSkills.map((skill: Skill, index: number) => {
                                return (
                                    <InfoListItem
                                        key={skill.id}
                                        variants={listVariants}
                                        initial="hidden"
                                        animate="visible"
                                        custom={index}
                                        whileHover={{y:-1}}
                                    >
                                        {skill.name}
                                    </InfoListItem>
                                );
                            })}
                        </InfoList>
                        <InfoList>
                            {<InfoListTitle>Backend</InfoListTitle>}
                            {backSkills.map((skill: Skill, index: number) => {
                                return (
                                    <InfoListItem
                                        key={skill.id}
                                        variants={listVariants}
                                        initial="hidden"
                                        animate="visible"
                                        custom={index}
                                        whileHover={{y:-1}}
                                    >
                                        {skill.name}
                                    </InfoListItem>
                                );
                            })}
                        </InfoList>
                    </InfoListWrapper>

                }
                
                {history.location.pathname !== "/my-projects"
                    ? <Button
                        initial="in"
                        animate="out"
                        variants={animationButton}
                        onClick={setLocation}
                        whileHover={{
                            y: -2,
                        }}
                    >
                        Далее
                    </Button>
                    : ""
                }
            </Container>

            {photo && <Photo
                photo={photo}
                initial="in"
                animate="out"
                variants={animationTextRight}
                transition={{delay: 1}}
            ></Photo>}

            {projects && <ProjectList
                initial="in"
                animate="out"
                variants={animationText}
                transition={{delay: 1}}
            >
                {projects.map((project: any, index: number) => {
                    return (
                        <Anchor href={project.url} key={project.id}>
                            <ProjectListItem
                                {...project}
                                initial="hidden"
                                animate="visible"
                                variants={animationProject}
                                custom={index}
                                whileHover={{
                                    y: -2,
                                }}
                                target="_blank"
                                href={project.url}
                            >
                            </ProjectListItem>
                        </Anchor>
                    )
                })}
            </ProjectList>}
        </Section>
    );
};

export default Info;
