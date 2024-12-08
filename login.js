const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = form.querySelector('#username').value.trim();
    const password = form.querySelector('#password').value.trim();

    if (!username || !password) {
        alert('Please fill in both the username and password fields.');
        return;
    }

    if (username === 'admin' && password === '1234') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password. Please try again.');
    }

    form.reset();
});
