import selfie from "./assets/me.png";
import styled from "styled-components";
import one from "./assets/portfolio/1.jpg";
import two from "./assets/portfolio/2.jpg";
import three from "./assets/portfolio/3.jpg";
import four from "./assets/portfolio/4.jpg";
import five from "./assets/portfolio/5.jpg";
import six from "./assets/portfolio/6.jpg";

const assets = { selfie };

const sans = "Avenir Next, Avenir, Futura, Helvetica Neue, Helvetica";

const colors = {
  base: "#EFEFEF",
  yellow: "#FDCF13",
  pink: "#FF2D55",
  slate: "#26353D",
  red: "#FF3B30",
  offwhite: "#EFEFEF",
  white: "#FFFFFF", //"#01070F",
  black: "#01070F"
};

export const PADDING = "9.667%";

export const Container = styled.div`
  width: 880px;
  margin: 0 auto;
`;

export const Section = styled.div`
  padding: ${PADDING};
`;

export const sections = {
  base: styled(Section)`
    background-color: ${colors.white};
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
    padding: ${PADDING} 7rem;
    text-align: center;
  `,
  red: styled(Section)`
    background-color: ${colors.red};
    padding: ${PADDING} 7rem;
    text-align: center;
  `,
  white: styled(Section)`
    background-color: ${colors.white};
  `
};

const _title = styled.div`
  font-family: ${sans};
  font-size: 72px;
  font-weight: 600;
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
    text-align: center;
  `
};

export const _paragraph = styled.p`
  font-family: ${sans};
  font-size: 21px;
  line-height: 32px;
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
  `
};

export const ImageContainer = styled.div`
  height: 50vh;
  width: 100%;
  background-size: cover;
  background-image: url(${props =>
    (props.one && one) ||
    (props.two && two) ||
    (props.three && three) ||
    (props.four && four) ||
    (props.five && five) ||
    (props.six && six)});
`;
