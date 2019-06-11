import React from "react";
import { ReactComponent as Logo } from "./assets/dear_thorn_alternate.svg";
// import Logo from "./assets/dear_thorn.png";
import Section from "./Section.js";
import styled from "styled-components";
import "./App.css";

const colors = {
  base: "#EFEFEF",
  yellow: "#FDCF13",
  pink: "#FF2D55",
  slate: "#26353D",
  red: "#FF3B30"
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100%;
  min-width: 800px;
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;

// const LogoContainer = styled.img`
//   width: 33%;
// `;

const section = styled.section`
  display: grid;
  justify-items: center;
  min-height: 470px;
`;

const sections = {
  base: styled(section)`
    align-items: center;
  `,
  yellow: styled(section)`
    background-color: ${colors.yellow};
    color: ${colors.pink};
  `,
  pink: styled(section)`
    background-color: ${colors.pink};
    color: ${colors.yellow};
  `,
  slate: styled(section)`
    background-color: ${colors.slate};
    color: ${colors.yellow};
  `,
  red: styled(section)`
    background-color: ${colors.red};
    color: "#FFFFFF";
  `
};

const sansStack = "Avenir Next, Avenir, Futura, Helvetica Neue, Helvetica";

const SectionTitle = styled.h1`
  font-family: ${sansStack};
  font-size: 72px;
  font-weight: 600;
`;

function App() {
  return (
    <Wrapper>
      <sections.base>
        <Logo />
      </sections.base>

      <sections.yellow>
        <SectionTitle>About Me</SectionTitle>
      </sections.yellow>

      <sections.pink>
        <SectionTitle>What's Next</SectionTitle>
      </sections.pink>

      <sections.slate>
        <SectionTitle>Why Thorn?</SectionTitle>
      </sections.slate>

      <sections.red>
        <SectionTitle>Let's talk</SectionTitle>
      </sections.red>
    </Wrapper>
  );
}

export default App;
