import React, {useState} from "react";
import {Switch, Route, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import styled from "styled-components";
import GlobalStyle from "./globalStyle";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import MyProjects from "./pages/MyProjects";

const Section = styled.section`
    position: relative;
    overflow-x: hidden;
`;

function App() {
    let location = useLocation();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return <Section>
        <AnimatePresence exitBeforeEnter>
            <GlobalStyle />
            {/* <Bars onClick={toggle} />
            <MobileMenu toggle={toggle} isOpen={isOpen} /> */}
            <Switch location={location} key={location.pathname}>
                <Route path="/" exact component={() => <Home isOpen={isOpen} toggle={toggle} />} />
                <Route path="/skills" component={() =>  <Skills isOpen={isOpen} toggle={toggle} />} />
                <Route path="/my-projects" component={() => <MyProjects isOpen={isOpen} toggle={toggle} />} />
            </Switch>
        </AnimatePresence>
    </Section>;
}

export default App;
