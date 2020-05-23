var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
var convertProp = function (prop) {
    return prop ? prop.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase() : "";
};
var textPropKeys = [
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
export var Text = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (props) {
    return Object.keys(props)
        .filter(function (x) { return textPropKeys.includes(x); })
        .map(function (key) { return convertProp(key) + ": " + props[key] + ";"; });
});
var templateObject_1;
//# sourceMappingURL=index.js.map