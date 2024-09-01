let user = document.getElementById('user');
let pass = document.getElementById('pass');
let btn = document.getElementById('btn');

let users = {};
users['Abhiraj'] = '123456';
users['Abha'] = '456789';

btn.addEventListener('click', () => {
    if (users[user.value] === pass.value) {
        console.log('Login successful!');
        window.location.href = 'spotify.html';
    } else {
        alert('Invalid credentials!');
        user.value = '';
        pass.value = '';
    }
})