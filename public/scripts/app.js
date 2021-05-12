'use strict';

var user = {
    name: 'Dheeraj Varshney',
    age: '24',
    location: 'Aligarh'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
