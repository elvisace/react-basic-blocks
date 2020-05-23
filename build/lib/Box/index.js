var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
var convertProp = function (prop) {
    return prop ? prop.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase() : "";
};
export var boxShadows = {
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
var boxPropKeys = [
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
var Box = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  ", "\n  ", "\n"], ["\n  display: flex;\n  ", "\n  ", "\n"])), function (props) { return props.flexDirection === undefined ? "flex-direction: column;" : ""; }, function (props) { return Object.keys(props).filter(function (x) { return boxPropKeys.includes(x); }).map(function (key) { return convertProp(key) + ": " + props[key] + ";"; }); });
export default Box;
var templateObject_1;
//# sourceMappingURL=index.js.map