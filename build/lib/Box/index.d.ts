/// <reference types="react" />
export declare const boxShadows: {
    light: {
        none: string;
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
    };
    dark: {
        none: string;
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
    };
};
export interface BoxProps {
    alignSelf?: React.CSSProperties["alignSelf"];
    margin?: React.CSSProperties["margin"];
    alignItems?: React.CSSProperties["alignItems"];
    alignContent?: React.CSSProperties["alignContent"];
    flexBasis?: React.CSSProperties["flexBasis"];
    border?: React.CSSProperties["border"];
    borderTop?: React.CSSProperties["borderTop"];
    borderRight?: React.CSSProperties["borderRight"];
    borderBottom?: React.CSSProperties["borderBottom"];
    borderLeft?: React.CSSProperties["borderLeft"];
    flexDirection?: React.CSSProperties["flexDirection"];
    flex?: React.CSSProperties["flex"];
    flexWrap?: React.CSSProperties["flexWrap"];
    height?: React.CSSProperties["height"];
    width?: React.CSSProperties["width"];
    justifyContent?: React.CSSProperties["justifyContent"];
    padding?: React.CSSProperties["padding"];
    backgroundColor?: React.CSSProperties["backgroundColor"];
    borderRadius?: React.CSSProperties["borderRadius"];
    boxShadow?: React.CSSProperties["boxShadow"];
    cursor?: React.CSSProperties["cursor"];
}
declare const Box: import("styled-components").StyledComponent<"div", any, BoxProps, never>;
export default Box;
