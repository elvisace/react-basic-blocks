import React from "react";
import { Text } from ".";
export default { title: "Text" };
export var simple = function () { return (React.createElement(Text, { fontSize: "20px", fontStretch: "3px" }, "Hello World!")); };
export var withWeight = function () { return (React.createElement(Text, { fontSize: "20px", fontWeight: "bold", color: "green" }, "Hello World!")); };
//# sourceMappingURL=index.stories.js.map