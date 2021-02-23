import { CSSProperties } from "react";
import styled from "styled-components";

const convertProp = (prop?: string) => {
  return prop ? prop.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase() : "";
};

export interface TextProps {
  alignSelf?: CSSProperties["alignSelf"];
  color?: CSSProperties["color"];
  margin?: CSSProperties["margin"];
  fontSize?: CSSProperties["fontSize"];
  textAlign?: CSSProperties["textAlign"];
  fontWeight?: CSSProperties["fontWeight"];
  fontStretch?: CSSProperties["fontStretch"];
  fontStyle?: CSSProperties["fontStyle"];
  wordBreak?: CSSProperties["wordBreak"];
  lineHeight?: CSSProperties["lineHeight"];
  letterSpacing?: CSSProperties["letterSpacing"];
  overflow?: CSSProperties["overflow"];
  whiteSpace?: CSSProperties["whiteSpace"];
  textOverflow?: CSSProperties["textOverflow"];
}

const textPropKeys = new Set([
  "alignSelf",
  "color",
  "margin",
  "fontSize",
  "textAlign",
  "fontWeight",
  "fontStretch",
  "fontStyle",
  "wordBreak",
  "lineHeight",
  "letterSpacing",
  "overflow",
  "whiteSpace",
  "textOverflow",
]);

export const Text = styled.span<TextProps>`
  ${(props: any) =>
    Object.keys(props)
      .filter((x) => textPropKeys.has(x))
      .map((key) => `${convertProp(key)}: ${props[key]};`)}
`;
