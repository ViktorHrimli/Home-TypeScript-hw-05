import styled from "styled-components";
import { theme } from "../Thema";
import { Link } from "react-router-dom";
import {
  background,
  color,
  space,
  layout,
  flexbox,
  grid,
  position,
  border,
} from "styled-system";
// interface BoxProps {
//   background: string;
//   color: string;
//   space: string;
//   layout: string;
//   flexbox: string;
//   grid: string;
//   position: string;
//   border: string;
// }

export const Box = styled("div")(
  background,
  color,
  space,
  layout,
  flexbox,
  grid,
  position,
  border
);

export const LinkStyled = styled(Link)`
  font-family: ${theme.fonts.monospace};
  font-size: ${theme.fontSizes.s};
  color: ${theme.colors.accent};
`;
