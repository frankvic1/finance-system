
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
        alert('Please enter both username and password.');
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || {};
    if (!users[username]) {
        users[username] = { password, transactions: [] };
        localStorage.setItem('users', JSON.stringify(users));
    }

    if (users[username].password === password) {
        sessionStorage.setItem('currentUser', username);
        alert('Login successful!');
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password.');
    }
});
