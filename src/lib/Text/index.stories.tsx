import React from "react";
import { Text } from ".";

export default { title: "Text" };

export const simple = () => (
  <Text fontSize="20px" fontStretch="3px">
    Hello World!
  </Text>
);

export const withWeight = () => (
  <Text fontSize="20px" fontWeight="bold" color="green">
    Hello World!
  </Text>
);
