import './css/main.scss';

import * as React from "react";
import * as ReactDOM from "react-dom";

const contentDiv = document.getElementById("app");

var MyComponent = React.createClass({
    render: function () {
        return <div>Hello World, hello world!</div>;
    }
});

ReactDOM.render(
    <MyComponent  />,
    contentDiv
);