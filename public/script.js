const signInBtnlink = document.querySelector('.signInBtn-link');
const signUpBtnlink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');

// Toggle active class when clicking on "Sign Up" or "Log In" links
signUpBtnlink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

signInBtnlink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

// Function to handle successful sign-in
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    
    // Retrieve user details
    var id = profile.getId();
    var name = profile.getName();
    var email = profile.getEmail();
    var imageUrl = profile.getImageUrl();

    // Save the login details (you can save it to localStorage, sessionStorage, or send it to the server)
    localStorage.setItem('googleUserId', id);
    localStorage.setItem('googleUserName', name);
    localStorage.setItem('googleUserEmail', email);
    localStorage.setItem('googleUserProfileImage', imageUrl);
    
    // Redirect to index.html
    window.location.href = 'index.html';
}

// Function to close the form (if needed)
function closeForm() {
    // Assuming your home page URL is "/"
    window.location.href = "/index.html";
}
