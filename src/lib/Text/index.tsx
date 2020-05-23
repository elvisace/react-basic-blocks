import styled from "styled-components";

const convertProp = (prop?: string) => {
  return prop ? prop.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase() : "";
};

export interface TextProps {
  alignSelf?: React.CSSProperties["alignSelf"];
  color?: React.CSSProperties["color"];
  margin?: React.CSSProperties["margin"];
  fontSize?: React.CSSProperties["fontSize"];
  textAlign?: React.CSSProperties["textAlign"];
  fontWeight?: React.CSSProperties["fontWeight"];
  fontStretch?: React.CSSProperties["fontStretch"];
  fontStyle?: React.CSSProperties["fontStyle"];
  wordBreak?: React.CSSProperties["wordBreak"];
  lineHeight?: React.CSSProperties["lineHeight"];
  letterSpacing?: React.CSSProperties["letterSpacing"];
  overflow?: React.CSSProperties["overflow"];
  whiteSpace?: React.CSSProperties["whiteSpace"];
  textOverflow?: React.CSSProperties["textOverflow"];
}

const textPropKeys = [
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
];

export const Text = styled.span<TextProps>`
  ${(props: any) =>
    Object.keys(props)
      .filter((x) => textPropKeys.includes(x))
      .map((key) => `${convertProp(key)}: ${props[key]};`)}
`;
