import * as React from "react";
import { Box, boxShadows } from ".";

export default { title: "Box" };

export const simple = (): JSX.Element => (
  <Box
    border="1px solid black"
    padding="10px"
    margin="10px"
    backgroundColor="red"
  />
);

export const withElevation = (): JSX.Element => (
  <Box
    boxShadow={boxShadows.light.medium}
    padding="10px"
    margin="10px"
    backgroundColor="blue"
  />
);
