import React from "react";
import Box, { boxShadows } from ".";
export default { title: "Box" };
export var simple = function () { return React.createElement(Box, { border: "1px solid black", padding: "10px", margin: "10px", backgroundColor: "red" }); };
export var withElevation = function () { return React.createElement(Box, { boxShadow: boxShadows.light.medium, padding: "10px", margin: "10px", backgroundColor: "blue" }); };
//# sourceMappingURL=index.stories.js.map