const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const fullName = form.querySelector('input[placeholder="Full Name"]').value.trim();
    const email = form.querySelector('input[placeholder="Email"]').value.trim();
    const username = form.querySelector('input[placeholder="Username"]').value.trim();
    const password = form.querySelector('input[placeholder="Password"]').value.trim();
    const confirmPassword = form.querySelector('input[placeholder="Confirm Password"]').value.trim();

    if (!fullName || !email || !username || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    alert('Registration successful!');
    form.reset();
});
