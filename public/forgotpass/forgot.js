function sendOTP() {
    // Send AJAX request to server to send OTP to the user's email address
    // Display OTP input field once OTP is sent
    document.getElementById('otpContainer').classList.remove('hidden');
}

function resetPassword() {
    // Validate OTP and new password
    // Send AJAX request to server to verify OTP and update password
}

const emailInput = document.getElementById('emailInput');
const emailLabel = document.getElementById('emailLabel');

emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() !== '') {
        emailLabel.classList.add('active');
    } else {
        emailLabel.classList.remove('active');
    }
});
const sendOTPBtn = document.getElementById('sendOTPBtn');
const otpInputContainer = document.getElementById('otpInputContainer');
const submitOTPBtn = document.getElementById('submitOTPBtn');

// Add event listener to the Send OTP button
sendOTPBtn.addEventListener('click', function() {
    // Show the OTP input field and submit button
    otpInputContainer.classList.remove('hidden');
    submitOTPBtn.classList.remove('hidden');
    // Hide the Send OTP button
    sendOTPBtn.classList.add('hidden');
});
function closeForm() {
    // Assuming your home page URL is "/"
    window.location.href = "../login.html";
}

// Get references to elements
const newPasswordInput = document.getElementById('newPasswordInput');
const resetBtn = document.getElementById('resetBtn');

// Add event listener to the New Password input field
newPasswordInput.addEventListener('input', function() {
    // Show the Reset button if the input field is not empty
    if (newPasswordInput.value.trim() !== '') {
        resetBtn.classList.remove('hidden');
    } else {
        resetBtn.classList.add('hidden');
    }
});

// Function to simulate OTP confirmation
// Add event listener to the "Confirm OTP" button
// document.getElementById('confirmOTPBtn').addEventListener('click', confirmOTP);

// function confirmOTP() {
//     console.log("Confirm OTP button clicked"); // Check if the function is called
//     var otpConfirmed = confirm("Is OTP confirmed?");
//     console.log("OTP confirmed: " + otpConfirmed); // Check if the confirmation dialog appears and the result

//     if (otpConfirmed) {
//         console.log("OTP confirmed. Showing Reset Password container");
//         // Hide the Forgot Password container
//         document.querySelector('.forgot-password').classList.add('hidden');
//         // Show the Reset Password container
//         document.querySelector('.reset-password').classList.remove('hidden');
//     }
// }


// Add event listener to the "Confirm OTP" button


// function confirmOTP() {
//     console.log("Confirm OTP button clicked"); // Check if the function is called
//     var otpConfirmed = confirm("Is OTP confirmed?");
//     console.log("OTP confirmed: " + otpConfirmed); // Check if the confirmation dialog appears and the result

//     if (otpConfirmed) {
//         console.log("OTP confirmed. Showing Reset Password container");
//         // Hide the Forgot Password container
//         document.querySelector('.forgot-password').classList.add('hidden');
//         // Show the Reset Password container
//         document.querySelector('.reset-password').classList.remove('hidden');
//     }
// }

// Function to simulate OTP confirmation
// function confirmOTP() {
//     // Simulate OTP confirmation
//     var otpConfirmed = true; // Set to true to simulate OTP confirmation
//     console.log("OTP confirmed: " + otpConfirmed);

//     if (otpConfirmed) {
//         console.log("OTP confirmed. Showing Reset Password container");
//         // Hide the Forgot Password container
//         document.querySelector('.forgot-password').classList.add('hidden');
//         // Show the Reset Password container
//         document.querySelector('.reset-password').classList.remove('hidden');
//     }
// }

// // Call the confirmOTP function to simulate OTP confirmation
// confirmOTP();
// Function to simulate OTP confirmation
// function confirmOTP() {
//     // Prompt the user to enter the OTP
//     var enteredOTP = prompt("Please enter the OTP:");

//     // Check if the entered OTP is correct
//     var otpConfirmed = enteredOTP === "123456"; // Replace "123456" with your manual OTP

//     console.log("OTP confirmed: " + otpConfirmed);

//     if (otpConfirmed) {
//         console.log("OTP confirmed. Showing Reset Password container");
//         // Hide the Forgot Password container
//         document.querySelector('.forgot-password').classList.add('hidden');
//         // Show the Reset Password container
//         document.querySelector('.reset-password').classList.remove('hidden');
//     } else {
//         console.log("Incorrect OTP. Please try again.");
//     }
// }

// // Call the confirmOTP function to simulate OTP confirmation
// confirmOTP();




// Function to confirm OTP
// Function to handle OTP confirmation
// Function to handle OTP confirmation
// function confirmOTP() {
//     // Get the OTP value entered by the user
//     var enteredOTP = document.getElementById('otpInput').value;

//     // Replace this with your actual OTP validation logic
//     var actualOTP = "123456"; // Example OTP

//     // Check if the entered OTP matches the actual OTP
//     if (enteredOTP === actualOTP) {
//         // OTP is confirmed
//         console.log("OTP confirmed. Showing Reset Password container");

//         // Hide the Forgot Password container
//         document.querySelector('.forgot-password').classList.remove('hidden');

//         // Show the Reset Password container
//         document.querySelector('.reset-password').classList.add('hidden');
//     } else {
//         // OTP is incorrect, display an error message or handle it accordingly
//         alert("Invalid OTP. Please try again.");
//     }
// }

// // Get the OTP form element
// var otpForm = document.getElementById('otpForm');

// // Add event listener to the form submission event
// otpForm.addEventListener('submit', function(event) {
//     // Prevent the default form submission behavior
//     event.preventDefault();

//     // Call the confirmOTP() function
//     confirmOTP();
// });


// Function to show the Forgot Password container
// function showForgotPasswordContainer() {
//     document.querySelector('.forgot-password').classList.remove('hidden');
// }

// Function to simulate OTP confirmation
// function confirmOTP() {
//     // Prompt the user to enter the OTP
//     var enteredOTP = prompt("Please enter the OTP:");

//     // Check if the entered OTP is correct
//     var otpConfirmed = enteredOTP === "123456"; // Replace "123456" with your manual OTP

//     console.log("OTP confirmed: " + otpConfirmed);

//     if (otpConfirmed) {
//         console.log("OTP confirmed. Showing Reset Password container");
//         // Hide the Forgot Password container
//         document.querySelector('.forgot-password').classList.add('hidden');
//         // Show the Reset Password container
//         document.querySelector('.reset-password').classList.remove('hidden');
//     } else {
//         console.log("Incorrect OTP. Please try again.");
//     }
// }

// // Call the showForgotPasswordContainer function to display the Forgot Password container first
// showForgotPasswordContainer();

// // Call the confirmOTP function to simulate OTP confirmation after the Forgot Password container is displayed
// confirmOTP();






// Get the Reset Password button element
submitOTPBtn = document.getElementById('submitOTPBtn');

// Add event listener to the Reset Password button
submitOTPBtn.addEventListener('click', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Call the confirmOTP() function to show the popup
    confirmOTP();
});

// Function to simulate OTP confirmation
function confirmOTP() {
    // Prompt the user to enter the OTP
    var enteredOTP = prompt("Please enter the OTP:");

    // Check if the entered OTP is correct
    var otpConfirmed = enteredOTP === "123456"; // Replace "123456" with your manual OTP

    console.log("OTP confirmed: " + otpConfirmed);

    if (otpConfirmed) {
        console.log("OTP confirmed. Showing Reset Password container");
        // Hide the Forgot Password container
        document.querySelector('.forgot-password').classList.remove('hidden');
        // Show the Reset Password container
        document.querySelector('.reset-password').classList.add('hidden');
    } else {
        console.log("Incorrect OTP. Please try again.");
    }
}
