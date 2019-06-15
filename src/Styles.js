import selfie from "./assets/me.png";
import styled from "styled-components";

const assets = { selfie };

const sans = "Avenir Next, Avenir, Futura, Helvetica Neue, Helvetica";

const colors = {
  base: "#EFEFEF",
  yellow: "#FDCF13",
  pink: "#FF2D55",
  slate: "#26353D",
  red: "#FF3B30",
  offwhite: "#EFEFEF",
  orange: "#FF9500",
  white: "#FFFFFF", //"#01070F",
  black: "#01070F"
};

export const PADDING = "4rem 3rem";

export const Container = styled.div`
  max-width: 880px;
  margin: 0 auto;
`;

export const Section = styled.div`
  padding: ${PADDING};
`;

export const sections = {
  base: styled(Section)`
    background-color: ${colors.offwhite};
  `,
  yellow: styled(Section)`
    background-color: ${colors.yellow};
    background-image: url('${assets.selfie}');
    background-repeat: no-repeat;
    background-size: 44.44%;
    background-position: bottom right;
  `,
  pink: styled(Section)`
    background-color: ${colors.pink};
  `,
  slate: styled(Section)`
    background-color: ${colors.slate};
  `,
  red: styled(Section)`
    background-color: ${colors.red};
  `,
  white: styled(Section)`
    background-color: ${colors.white};
  `
};

const _title = styled.div`
  font-family: ${sans};
  font-size: 3.25rem;
  font-weight: 600;
  line-height: 1.2;
`;

export const titles = {
  yellow: styled(_title)`
    color: ${colors.pink};
  `,
  pink: styled(_title)`
    color: ${colors.yellow};
  `,
  slate: styled(_title)`
    color: ${colors.yellow};
  `,
  red: styled(_title)`
    color: ${colors.white};
  `
};

export const _paragraph = styled.p`
  font-family: ${sans};
  font-size: 21px;
  line-height: 1.5;
  font-weight: 400;
`;

export const paragraphs = {
  yellow: styled(_paragraph)`
    color: ${colors.black};
  `,
  pink: styled(_paragraph)`
    color: ${colors.white};
  `,
  slate: styled(_paragraph)`
    color: ${colors.white};
  `,
  red: styled(_paragraph)`
    color: ${colors.white};
  `,
  white: styled(_paragraph)`
    color: ${colors.black};
  `
};

export const ImageContainer = styled.img`
  object-fit: cover;
  width: 100%;
  vertical-align: bottom;
`;

export const DownloadResume = styled.a`
  display: block;
  line-height: 0;
  background-color: ${colors.pink};
  font-size: 14px;
  width: auto;
  text-align: center;
  padding: 1.5rem;
  color: ${colors.white};
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;
  margin-bottom: 6rem;
  &:hover {
    background-color: ${colors.orange};
  }
  &:active {
    opacity: 0.8;
  }
  &:after {
    display: block;
    content: "Download Resume.PDF";
    transform: scale(1);
    transition: transform 0.1s ease-in-out;
  }
  &:hover:after {
    transform: scale(1.1);
  }
`;
