import styled from "styled-components";

const convertProp = (prop?: string) => {
  return prop ? prop.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase() : "";
};


export const boxShadows = {
  light: {
    none: 'none',
    xsmall: '0px 1px 2px rgba(0, 0, 0, 0.20)',
    small: '0px 2px 4px rgba(0, 0, 0, 0.20)',
    medium: '0px 4px 8px rgba(0, 0, 0, 0.20)',
    large: '0px 8px 16px rgba(0, 0, 0, 0.20)',
    xlarge: '0px 12px 24px rgba(0, 0, 0, 0.20)',
  },
  dark: {
    none: 'none',
    xsmall: '0px 2px 2px rgba(255, 255, 255, 0.40)',
    small: '0px 4px 4px rgba(255, 255, 255, 0.40)',
    medium: '0px 6px 8px rgba(255, 255, 255, 0.40)',
    large: '0px 8px 16px rgba(255, 255, 255, 0.40)',
    xlarge: '0px 12px 24px rgba(255, 255, 255, 0.40)',
  },
};


export interface BoxProps {
  alignSelf?: React.CSSProperties["alignSelf"],
  margin?: React.CSSProperties["margin"],
  alignItems?: React.CSSProperties["alignItems"],
  alignContent?: React.CSSProperties["alignContent"],
  flexBasis?: React.CSSProperties["flexBasis"],
  border?: React.CSSProperties["border"],
  borderTop?: React.CSSProperties["borderTop"],
  borderRight?: React.CSSProperties["borderRight"],
  borderBottom?: React.CSSProperties["borderBottom"],
  borderLeft?: React.CSSProperties["borderLeft"],
  flexDirection?: React.CSSProperties["flexDirection"],
  flex?: React.CSSProperties["flex"],
  flexWrap?: React.CSSProperties["flexWrap"],
  height?: React.CSSProperties["height"],
  width?: React.CSSProperties["width"],
  justifyContent?: React.CSSProperties["justifyContent"],
  padding?: React.CSSProperties["padding"],
  backgroundColor?: React.CSSProperties["backgroundColor"],
  borderRadius?: React.CSSProperties["borderRadius"],
  boxShadow?: React.CSSProperties["boxShadow"],
  cursor?: React.CSSProperties["cursor"],
}

const boxPropKeys = [
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
];



const Box = styled.div<BoxProps>`
  display: flex;
  ${props => props.flexDirection === undefined ? "flex-direction: column;" : ""}
  ${(props: any) => Object.keys(props).filter(x => boxPropKeys.includes(x)).map(key => `${convertProp(key)}: ${props[key]};`)}
`;

export default Box;