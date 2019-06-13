import React from "react";
import { Grid, Cell } from "styled-css-grid";
import "./App.css";
import {
  Container,
  ImageContainer,
  sections,
  titles,
  paragraphs
} from "./Styles";
import { ReactComponent as Next } from "./assets/next.svg";
import { ReactComponent as Logo } from "./assets/dear_thorn_alternate.svg";
import { ReactComponent as DesignHeader } from "./assets/header_visual_design.svg";
import { ReactComponent as ResumeHeader } from "./assets/header_resume.svg";
import resume from "./assets/resume.png";

function App() {
  return (
    <Container>
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
            <Grid columns={3}>
              <Cell width="3">
                <titles.yellow>About Me</titles.yellow>
              </Cell>
              <Cell width="2">
                <paragraphs.yellow>
                  I’m a 31-year-old designer and front-end developer with 10
                  years of experience working for startups and larger
                  organizations in the Bay Area. I have experience designing and
                  building web sites, marketing pages, email campaigns, and
                  single-page-applications using frameworks like React and
                  Ember. Also, I don’t wear fedoras anymore. That was a phase.
                </paragraphs.yellow>
              </Cell>
            </Grid>
          </sections.yellow>
        </Cell>

        <Cell width={2} data-aos="fade-bottom">
          <sections.pink>
            <Grid columns={3} alignContent="center" gap="120px">
              <Cell width="1" middle>
                <Next />
              </Cell>
              <Cell width="2">
                <titles.pink>What's Next</titles.pink>

                <paragraphs.pink>
                  For my next career challenge, I’m looking for something a
                  little different than the typical startup, something that I
                  feel makes a meaningful impact in the world. Something more
                  than just an app, or another landing page to sell a product. I
                  can think of few projects that fit this better than Thorn.
                </paragraphs.pink>
              </Cell>
            </Grid>
          </sections.pink>
        </Cell>

        <Cell width={2} data-aos="fade-bottom">
          <sections.slate>
            <Grid columns={3} justifyContent="middle">
              <Cell width="3" center>
                <titles.slate>Why Thorn?</titles.slate>
              </Cell>
              <Cell width="3">
                <paragraphs.slate>
                  I believe in standing up for the vulnerable. I believe that if
                  even one of us is not free, then none of us are free–that we
                  are all in this together. I’d really like to apply my skillset
                  towards helping Thorn achieve its mission, to help build tools
                  that help defend children.
                </paragraphs.slate>
              </Cell>
            </Grid>
          </sections.slate>
        </Cell>

        <Cell width={2} data-aos="fade-bottom">
          <sections.red>
            <Grid columns={3} justifyContent="middle">
              <Cell width="3">
                <titles.red>Let's talk</titles.red>
              </Cell>
              <Cell width="3">
                <paragraphs.red>
                  I’d like to continue the conversation with you to see if
                  there’s a good fit here, because I am passionate, and ready to
                  help build something that makes a difference. I invite you to
                  keep scrolling, to see a brief snapshot of my work, followed
                  by a summary of my work experience (well, its just a fancy
                  resume).
                </paragraphs.red>
              </Cell>
            </Grid>
          </sections.red>
        </Cell>

        <Cell width={2} center>
          <DesignHeader
            style={{
              padding: "2rem 0",
              // backgroundColor: "white",
              width: "100%"
            }}
          />
        </Cell>

        <Cell width={1}>
          <ImageContainer one data-aos="fade-right" />
        </Cell>

        <Cell width={1}>
          <ImageContainer two data-aos="fade-left" />
        </Cell>

        <Cell width={1}>
          <ImageContainer three data-aos="fade-right" />
        </Cell>

        <Cell width={1}>
          <ImageContainer four data-aos="fade-left" />
        </Cell>

        <Cell width={1}>
          <ImageContainer five data-aos="fade-right" />
        </Cell>

        <Cell width={1}>
          <ImageContainer six data-aos="fade-left" />
        </Cell>

        <Cell width={2} center>
          <ResumeHeader style={{ margin: "6rem 0 3rem 0" }} />
          <br />
          <img
            alt="Resume of Brendan Stromberger"
            src={resume}
            style={{
              width: "36.67%",
              transform: "translateX(3%)",
              marginBottom: "12rem"
            }}
          />
        </Cell>
      </Grid>
    </Container>
  );
}

export default App;
