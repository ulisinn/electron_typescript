import './css/main.scss';

import * as React from "react";
import * as ReactDOM from "react-dom";

const contentDiv = document.getElementById("content");

var MyComponent = React.createClass({
    render: function () {
        return <div>Hello World</div>;
    }
});

ReactDOM.render(
    <MyComponent  />,
    contentDiv
);

console.log("--- this is the app.tsx", contentDiv);

