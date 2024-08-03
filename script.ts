interface User {
    name?: string;
    age?: number;
    email?: string;
    address?: string;
}

const createUser = (user: Required<User>): User => {
    // Mock function to create a new user ensuring all properties are supplied
    console.log('New user created:', user);
    return user;
};

const displayNewUser = (user: User): void => {
    const output = document.getElementById('output');
    if (output) {
        output.innerHTML = `
            <h2>New User Details:</h2>
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Age:</strong> ${user.age}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.address}</p>
        `;
    }
};

document.getElementById('createForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const newUser: Required<User> = {
        name: formData.get('name') as string,
        age: Number(formData.get('age')),
        email: formData.get('email') as string,
        address: formData.get('address') as string,
    };
    const user = createUser(newUser);
    displayNewUser(user);
});