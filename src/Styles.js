import selfie from "./assets/me.png";
import styled from "styled-components";

export const sans = "Avenir Next, Avenir, Futura, Helvetica Neue, Helvetica";

export const colors = {
  base: "#EFEFEF",
  yellow: "#FDCF13",
  pink: "#FF2D55",
  slate: "#26353D",
  red: "#FF3B30",
  white: "#EFEFEF", //"#01070F",
  black: "#01070F"
};

export const Section = styled.div`
  max-width: 66.67%;
  // box-sizing: border-box;
  padding: 5rem;
  margin: 0 auto;
`;

export const sections = {
  base: styled(Section)``,
  yellow: styled(Section)`
    background-color: ${colors.yellow};
    background-image: url('${selfie}');
    background-repeat: no-repeat;
    background-size: contain;
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
  `
};

export const title = styled.div`
  font-family: ${sans};
  font-size: 72px;
  font-weight: 600;
`;

export const titles = {
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

export const paragraph = styled.p`
  font-family: ${sans};
  font-size: 21px;
  line-height: 32px;
  font-weight: 400;
`;

export const paragraphs = {
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

export const ImageContainer = styled.div`
  height: 50vh;
  width: 100%;
  background: blue;
`;
