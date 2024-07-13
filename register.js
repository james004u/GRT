document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.getElementById('togglePassword');
    const password = document.getElementById('password');
    const showPasswordIcon = document.getElementById('showPasswordIcon');
    const hidePasswordIcon = document.getElementById('hidePasswordIcon');

    togglePassword.addEventListener('click', function () {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);

        // Toggle icon
        showPasswordIcon.classList.toggle('hidden');
        hidePasswordIcon.classList.toggle('hidden');
    });

    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    const confirmPassword = document.getElementById('confirmPassword');
    const showConfirmPasswordIcon = document.getElementById('showConfirmPasswordIcon');
    const hideConfirmPasswordIcon = document.getElementById('hideConfirmPasswordIcon');

    toggleConfirmPassword.addEventListener('click', function () {
        const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        confirmPassword.setAttribute('type', type);

        // Toggle icon
        showConfirmPasswordIcon.classList.toggle('hidden');
        hideConfirmPasswordIcon.classList.toggle('hidden');
    });

    // Form submission handling
    const registrationForm = document.getElementById('registrationForm');
    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email');
        const confirmEmail = document.getElementById('confirmEmail');
        const agreeCheckbox = document.getElementById('agreeCheckbox');

        // Check if all required fields are filled
        if (email.value.trim() === '' || confirmEmail.value.trim() === '' || password.value.trim() === '' || confirmPassword.value.trim() === '') {
            document.getElementById('error-message').textContent = 'Please fill in all the required fields.';
            document.getElementById('error-message').classList.remove('hidden');
        } else if (email.value.trim() !== confirmEmail.value.trim()) {
            document.getElementById('error-message').textContent = 'Email addresses do not match.';
            document.getElementById('error-message').classList.remove('hidden');
        } else if (!agreeCheckbox.checked) {
            document.getElementById('error-message').textContent = 'You must agree to the terms and conditions.';
            document.getElementById('error-message').classList.remove('hidden');
        } else {
            document.getElementById('error-message').classList.add('hidden');
            // Process form submission here

            // Redirect to the next page
            window.location.href = 'confirmation.html'; // Replace 'next-page.html' with your actual next page URL
        }
    });
});
