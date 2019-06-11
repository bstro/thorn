import React from "react";
import { ReactComponent as Logo } from "./assets/dear_thorn_alternate.svg";
// import Logo from "./assets/dear_thorn.png";
import { Grid, Cell } from "styled-css-grid";
import selfie from "./assets/me.png";
import styled from "styled-components";
import "./App.css";

const sans = "Avenir Next, Avenir, Futura, Helvetica Neue, Helvetica";

const colors = {
  base: "#EFEFEF",
  yellow: "#FDCF13",
  pink: "#FF2D55",
  slate: "#26353D",
  red: "#FF3B30",
  white: "#EFEFEF", //"#01070F",
  black: "#01070F"
};

const section = styled.section`
  max-width: 66.67%;
  // box-sizing: border-box;
  padding: 5rem;
  margin: 0 auto;
`;

const sections = {
  base: styled(section)``,
  yellow: styled(section)`
    background-color: ${colors.yellow};
    background-image: url('${selfie}');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom right;
  `,
  pink: styled(section)`
    background-color: ${colors.pink};
  `,
  slate: styled(section)`
    background-color: ${colors.slate};
  `,
  red: styled(section)`
    background-color: ${colors.red};
  `
};

const title = styled.div`
  font-family: ${sans};
  font-size: 72px;
  font-weight: 600;
`;

const titles = {
  yellow: styled(title)`
    color: ${colors.pink};
  `,
  pink: styled(title)`
    color: ${colors.yellow};
  `,
  slate: styled(title)`
    color: ${colors.yellow};
  `,
  red: styled(title)`
    color: ${colors.white};
  `
};

const paragraph = styled.p`
  font-family: ${sans};
  font-size: 21px;
  line-height: 32px;
  font-weight: 400;
`;

const paragraphs = {
  yellow: styled(paragraph)`
    color: ${colors.black};
  `,
  pink: styled(paragraph)`
    color: ${colors.white};
  `,
  slate: styled(paragraph)`
    color: ${colors.white};
  `,
  red: styled(paragraph)`
    color: ${colors.white};
  `
};

function App() {
  return (
    <Grid columns={2} gap="0">
      <Cell width={2}>
        <sections.base>
          <Cell center>
            <Logo />
          </Cell>
        </sections.base>
      </Cell>

      <Cell width={2}>
        <sections.yellow>
          <Grid columns={3} justifyContent="middle">
            <Cell width="3">
              <titles.yellow>About Me</titles.yellow>
            </Cell>
            <Cell width="2">
              <paragraphs.yellow>
                I’m a 31-year-old designer and front-end developer with 10 years
                of experience working for startups and larger organizations in
                the Bay Area. I have experience designing and building web
                sites, marketing pages, email campaigns, and
                single-page-applications using frameworks like React and Ember.
                Also, I don’t wear fedoras anymore. That was a phase.
              </paragraphs.yellow>
            </Cell>
          </Grid>
        </sections.yellow>
      </Cell>

      <Cell width={2}>
        <sections.pink>
          <Grid columns={3} justifyContent="middle">
            <Cell width="3">
              <titles.pink>What's Next</titles.pink>
            </Cell>
            <Cell width="2">
              <paragraphs.pink>
                For my next career challenge, I’m looking for something a little
                different than the typical startup, something that I feel makes
                a meaningful impact in the world. Something more than just an
                app, or another landing page to sell a product. I can think of
                few projects that fit this better than Thorn.
              </paragraphs.pink>
            </Cell>
          </Grid>
        </sections.pink>
      </Cell>

      <Cell width={2}>
        <sections.slate>
          <Grid columns={3} justifyContent="middle">
            <Cell width="3">
              <titles.slate>Why Thorn?</titles.slate>
            </Cell>
            <Cell width="2">
              <paragraphs.slate>
                I believe in standing up for the vulnerable. I believe that if
                even one of us is not free, then none of us are free–that we are
                all in this together. I’d really like to apply my skillset
                towards helping Thorn achieve its mission, to help build tools
                that help defend children.
              </paragraphs.slate>
            </Cell>
          </Grid>
        </sections.slate>
      </Cell>

      <Cell width={2}>
        <sections.red>
          <Grid columns={3} justifyContent="middle">
            <Cell width="3">
              <titles.red>Let's talk</titles.red>
            </Cell>
            <Cell width="2">
              <paragraphs.red>
                I’d like to continue the conversation with you to see if there’s
                a good fit here, because I am passionate, and ready to help
                build something that makes a difference. I invite you to keep
                scrolling, to see a brief snapshot of my work, followed by a
                summary of my work experience (well, its just a fancy resume).
              </paragraphs.red>
            </Cell>
          </Grid>
        </sections.red>
      </Cell>

      <Cell width={1} />
    </Grid>
  );
}

export default App;
