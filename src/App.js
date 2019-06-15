import React from "react";
import { Grid, Cell } from "styled-css-grid";
import Responsive from "react-responsive";

import "./App.css";
import {
  Container,
  ImageContainer,
  sections,
  titles,
  paragraphs,
  DownloadResume
} from "./Styles";
import { ReactComponent as Next } from "./assets/next.svg";
import { ReactComponent as Logo } from "./assets/dear_thorn.svg";
import { ReactComponent as DesignHeader } from "./assets/header_visual_design.svg";
import { ReactComponent as ResumeHeader } from "./assets/header_resume.svg";
import resume from "./assets/resume.png";

const Mobile = props => <Responsive {...props} maxWidth={480} />;

function App() {
  return (
    <Container>
      <Grid columns={2} gap="0" flow="row dense">
        <Cell width={2}>
          <sections.base>
            <Cell center>
              <Logo style={{ width: "100%" }} />
            </Cell>
          </sections.base>
        </Cell>

        <Cell width={2}>
          <sections.yellow>
            <Grid columns="repeat(auto-fit,minmax(180px, 1fr))">
              <Cell width={3}>
                <titles.yellow>About me.</titles.yellow>
              </Cell>

              <Cell width={2}>
                <paragraphs.yellow>
                  I’m a 31-year-old designer and front-end developer with 10
                  years of experience working for startups and larger
                  organizations in the Bay Area. I have experience designing and
                  building web sites, marketing pages, email campaigns, and
                  single-page-applications using frameworks like React, Redux
                  (w/ Sagas), Elm, and Ember.
                </paragraphs.yellow>
              </Cell>
            </Grid>
          </sections.yellow>
        </Cell>

        <Cell width={2} data-aos="fade-bottom">
          <sections.pink>
            <Grid
              alignContent="center"
              columns="repeat(auto-fit,minmax(180px, 1fr))"
              gap="20px"
            >
              <Responsive minWidth={768}>
                <Cell width={1} middle>
                  <Next
                    style={{ marginLeft: "-15%", transform: "translateX(5%)" }}
                  />
                </Cell>
              </Responsive>

              <Cell width={2}>
                <titles.pink>What's next?</titles.pink>

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
                  I need my involvements and commitments to feel meaningful.
                  I've discovered that for me, the most meaningful projects are
                  those that make a tangible difference in the world–something
                  that helps people. After reading about Thorn and its mission,
                  I knew that this was something I could invest my time in. I
                  believe that on all levels of life, none of us is free until
                  all of us are free, and this drives me.
                </paragraphs.slate>
              </Cell>
            </Grid>
          </sections.slate>
        </Cell>

        <Cell width={2} data-aos="fade-bottom">
          <sections.red>
            <Grid columns={3} justifyContent="middle">
              <Cell width="3">
                <titles.red>Let's talk.</titles.red>
              </Cell>
              <Cell width="3">
                <paragraphs.red>
                  I’d like to continue the conversation with you to see if
                  there’s a good fit here, because I am passionate, and ready to
                  help build something that makes a difference. I invite you to
                  keep scrolling, to see a brief snapshot of some of my work,
                  followed by a quick summary of work experience and a link to
                  my resume.
                </paragraphs.red>
              </Cell>
            </Grid>
          </sections.red>
        </Cell>

        <Cell width={2}>
          <sections.white data-aos="zoom-in">
            <DesignHeader
              style={{
                padding: "2rem 0",
                width: "100%"
              }}
            />
            <paragraphs.white style={{ fontSize: "16px", lineHeight: "1.75" }}>
              Here's a brief selection of web, mobile, and email system design
              I've produced over the years. It is intended to provide some
              signal, but not a full design portfolio. Unfortunately, most of my
              heavy design work is from the former half of my career, and much
              of that work is buried on some hard drives that currently in
              storage in San Diego. I spent a lot of time tracking down what I
              could find, and while some of this isn't necessarily my{" "}
              <i>best</i>, it is what I could find without booking a ticket to
              California :)
            </paragraphs.white>
          </sections.white>
        </Cell>

        <Cell width={2}>
          <Grid
            columns="repeat(auto-fit,minmax(375px, 1fr))"
            gap={0}
            flow="rows dense"
          >
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

            <Cell width={1}>
              <ImageContainer seven data-aos="fade-right" />
            </Cell>

            <Cell width={1}>
              <ImageContainer eight data-aos="fade-left" />
            </Cell>

            <Cell width={1}>
              <ImageContainer nine data-aos="fade-right" />
            </Cell>

            <Cell width={1} height={2}>
              <ImageContainer tenTwelve data-aos="fade-left" />
            </Cell>

            <Cell width={1}>
              <ImageContainer eleven data-aos="fade-right" />
            </Cell>
          </Grid>
        </Cell>

        <Cell width={2} center>
          <sections.white data-aos="zoom-in">
            <Grid gap={0} columns={3}>
              <Cell width={3}>
                <ResumeHeader style={{ margin: "0 0 3rem 0" }} />
              </Cell>
              <Cell width={3}>
                <img
                  alt="Resume of Brendan Stromberger"
                  src={resume}
                  style={{
                    width: "50%",
                    transform: "translateX(3%)"
                  }}
                />
              </Cell>
            </Grid>
          </sections.white>
        </Cell>
      </Grid>
      <DownloadResume href={`${process.env.PUBLIC_URL}/resume.pdf`} />
    </Container>
  );
}

export default App;
