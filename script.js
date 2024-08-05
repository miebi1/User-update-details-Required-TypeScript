var _a;
var createUser = function (user) {
    // Mock function to create a new user ensuring all properties are supplied
    console.log('New user created:', user);
    return user;
};
var displayNewUser = function (user) {
    var output = document.getElementById('output');
    if (output) {
        output.innerHTML = "\n            <h2>New User Details:</h2>\n            <p><strong>Name:</strong> ".concat(user.name, "</p>\n            <p><strong>Age:</strong> ").concat(user.age, "</p>\n            <p><strong>Email:</strong> ").concat(user.email, "</p>\n            <p><strong>Address:</strong> ").concat(user.address, "</p>\n        ");
    }
};
(_a = document.getElementById('createForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var newUser = {
        name: formData.get('name'),
        age: Number(formData.get('age')),
        email: formData.get('email'),
        address: formData.get('address'),
    };
    var user = createUser(newUser);
    displayNewUser(user);
});
