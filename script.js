// Wait for the page to load
window.addEventListener('load', function() {
    // Hide the welcome page after 4 seconds
    setTimeout(function() {
        var welcomePage = document.getElementById('welcome-page');
        var loginPage = document.getElementById('login-page');
        welcomePage.style.display = 'none';
        loginPage.style.display = 'block';
    }, 2000);
});

// Login function
function login() {
    // Get the entered username and password
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // You can perform further validation or authentication here

    // Redirect to the home page
    window.location.href = 'home.html';
}