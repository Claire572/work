const nameInput = document.getElementById('name');
const passwordInput = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = [];
    
    nameInput.classList.remove('error-border');
    passwordInput.classList.remove('error-border');
    
    if (nameInput.value === '' || nameInput.value == null) {
        messages.push('Name is required');
        nameInput.classList.add('error-border');
    }
    
    if (passwordInput.value.length <= 6) {
        messages.push('Password must be longer than 6 characters');
        passwordInput.classList.add('error-border');
    }
    
    if (passwordInput.value.length >= 20) {
        messages.push('Password must be less than 20 characters');
        passwordInput.classList.add('error-border');
    }
    
    if (passwordInput.value.toLowerCase() === 'password') {
        messages.push('Password cannot be "password"');
        passwordInput.classList.add('error-border');
    }
    
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join('\n');
        errorElement.style.display = 'block';
    }

});