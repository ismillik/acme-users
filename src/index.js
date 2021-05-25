const faker = require('faker');

const generateUsers = () => {
    if(window.localStorage.getItem('users')){
        return JSON.parse(window.localStorage.getItem('users'));
    }
    else {
        const users = new Array(50).fill('').map(el => faker.helpers.userCard());
        window.localStorage.setItem('users', JSON.stringify(users));
        return users;
    };
}

console.log(users);

generateUsers()