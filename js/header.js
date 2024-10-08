// Adjust UI based on login state

document.addEventListener('DOMContentLoaded', () => {
    const loggedin = getCookie('localusername');

    // Hide login link if user is logged in
    const loginLink = document.getElementById('login');
    const profile = document.getElementById('profile');
    if (loggedin) {
        loginLink.style.display = 'none';
        profile.style.display = 'block';
    }
});
