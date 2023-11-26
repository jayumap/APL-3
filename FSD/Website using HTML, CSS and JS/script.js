// dynamic search box code

document.addEventListener('DOMContentLoaded', function() {
    let search = document.querySelector('.search-box');

    document.querySelector('#search-icon').onclick = () => {
        search.classList.toggle('active');
    }
});


// register validation code 
document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        alert('Registration successful!');
    } else {
        alert('Please fill in all the fields.');
    }
});


// login validation code 
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'new_username' && password === 'new_password') {
        alert('Login successful!');
    } else {
        alert('Login failed. Please check your credentials.');
    }
});

