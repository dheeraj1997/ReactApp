const user = {
    name: 'Dheeraj Varshney',
    age: '24',
    location: 'Aligarh',
};

var template = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);