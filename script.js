// Selecting all necessary elements
const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const barBox = document.querySelector('.bars-box');
const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-detail');

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

// Toggle the menu icon between open and close state
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x'); // Change icon when clicked

    navbar.classList.toggle('active');
});


// Function to handle active state and animation for navigation
const toggleActiveNavLink = (link) => {
    // Remove 'active' class from all nav links and bars
    navLinks.forEach(navLink => navLink.classList.remove('active'));
    barBox.classList.remove('active');

    // Add 'active' class to the clicked link
    link.classList.add('active');

    // Trigger the animation by adding the 'active' class to bars box
    setTimeout(() => {
        barBox.classList.add('active');
    }, 100); // Ensures enough delay for the transition
    menuIcon.classList.remove('bx-x'); // Change icon when clicked
    
    navbar.classList.remove('active');
};

// Add event listeners to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleActiveNavLink(link); // Activate clicked link and trigger animation
    });
});

// Ensure the logo link activates the first navigation link when clicked
logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        toggleActiveNavLink(navLinks[0]); // Activate the first link
    }
});

// Function to handle resume button and detail switching
const toggleResumeDetails = (clickedBtn) => {
    // Remove 'active' class from all buttons and details
    resumeBtns.forEach(btn => btn.classList.remove('active'));
    resumeDetails.forEach(detail => detail.classList.remove('active'));

    // Add 'active' class to the clicked button and its corresponding detail
    clickedBtn.classList.add('active');
    const index = [...resumeBtns].indexOf(clickedBtn); // Get index of clicked button
    resumeDetails[index].classList.add('active');
};

// Add event listeners to each resume button
resumeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        toggleResumeDetails(btn); // Toggle active state and display details
    });
});
