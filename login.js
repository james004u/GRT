document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === 'User logged in successfully') {
            // Redirect to dashboard
            window.location.href = '/dashboard.html';
        } else {
            // Handle error
            alert('Login failed. Please check your email and password.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
