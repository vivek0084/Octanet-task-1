// Smooth scrolling for navigation links and buttons
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

// Form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let errorMessage = '';

    if (name.trim() === '') {
        errorMessage += 'Name is required.\n';
    }

    if (email.trim() === '') {
        errorMessage += 'Email is required.\n';
    } else if (!validateEmail(email)) {
        errorMessage += 'Please enter a valid email address.\n';
    }

    if (errorMessage) {
        alert(errorMessage);
    } else {
        alert('Form submitted successfully!');
        // Here you can add code to actually submit the form data to a server
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}
