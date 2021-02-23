import { CSSProperties } from "react";
import styled from "styled-components";

const convertProp = (prop?: string): string => {
  return prop ? prop.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase() : "";
};

export const boxShadows = {
  light: {
    none: "none",
    xsmall: "0px 1px 2px rgba(0, 0, 0, 0.20)",
    small: "0px 2px 4px rgba(0, 0, 0, 0.20)",
    medium: "0px 4px 8px rgba(0, 0, 0, 0.20)",
    large: "0px 8px 16px rgba(0, 0, 0, 0.20)",
    xlarge: "0px 12px 24px rgba(0, 0, 0, 0.20)",
  },
  dark: {
    none: "none",
    xsmall: "0px 2px 2px rgba(255, 255, 255, 0.40)",
    small: "0px 4px 4px rgba(255, 255, 255, 0.40)",
    medium: "0px 6px 8px rgba(255, 255, 255, 0.40)",
    large: "0px 8px 16px rgba(255, 255, 255, 0.40)",
    xlarge: "0px 12px 24px rgba(255, 255, 255, 0.40)",
  },
};

export interface BoxProps {
  alignSelf?: CSSProperties["alignSelf"];
  margin?: CSSProperties["margin"];
  alignItems?: CSSProperties["alignItems"];
  alignContent?: CSSProperties["alignContent"];
  flexBasis?: CSSProperties["flexBasis"];
  border?: CSSProperties["border"];
  borderTop?: CSSProperties["borderTop"];
  borderRight?: CSSProperties["borderRight"];
  borderBottom?: CSSProperties["borderBottom"];
  borderLeft?: CSSProperties["borderLeft"];
  flexDirection?: CSSProperties["flexDirection"];
  flex?: CSSProperties["flex"];
  flexWrap?: CSSProperties["flexWrap"];
  height?: CSSProperties["height"];
  width?: CSSProperties["width"];
  justifyContent?: CSSProperties["justifyContent"];
  padding?: CSSProperties["padding"];
  backgroundColor?: CSSProperties["backgroundColor"];
  borderRadius?: CSSProperties["borderRadius"];
  boxShadow?: CSSProperties["boxShadow"];
  cursor?: CSSProperties["cursor"];
}

const boxPropKeys = new Set([
  "alignSelf",
  "margin",
  "alignItems",
  "alignContent",
  "flexBasis",
  "border",
  "borderTop",
  "borderRight",
  "borderBottom",
  "borderLeft",
  "flexDirection",
  "flex",
  "flexWrap",
  "height",
  "width",
  "justifyContent",
  "padding",
  "backgroundColor",
  "borderRadius",
  "boxShadow",
  "cursor",
]);

export const Box = styled.div<BoxProps>`
  display: flex;
  ${(props) =>
    props.flexDirection === undefined ? "flex-direction: column;" : ""}
  ${(props: any) =>
    Object.keys(props)
      .filter((x) => boxPropKeys.has(x))
      .map((key) => `${convertProp(key)}: ${props[key]};`)}
`;
