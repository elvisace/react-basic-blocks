/// <reference types="react" />
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
declare const Text: import("styled-components").StyledComponent<"span", any, TextProps, never>;
export default Text;
