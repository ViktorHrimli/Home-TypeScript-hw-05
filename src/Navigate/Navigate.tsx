import { FC } from "react";
import { Box, LinkStyled } from "../ComonStyle/ComonStyled";

const Navigate: FC<{}> = () => {
  return (
    <>
      <Box as="nav">
        <LinkStyled to="/">home</LinkStyled>
        <LinkStyled to="/movies">movies</LinkStyled>
      </Box>
    </>
  );
};

export { Navigate };
