// const faqContainers = document.querySelectorAll(".faq-container");

// faqContainers.forEach((faq) => {
//     faq.addEventListener("click", () => {
//         // Close all other FAQs
//         faqContainers.forEach((otherFaq) => {
//             if (otherFaq !== faq) {
//                 otherFaq.classList.remove("active");
//             }
//         });

//         // Toggle the clicked FAQ
//         faq.classList.toggle("active");
        
//     });
// });

document.querySelectorAll('.faq-container').forEach(item => {
    item.addEventListener('click', function () {
        const isActive = this.classList.contains('active');
        // Close all open accordions
        document.querySelectorAll('.faq-container.active').forEach(activeItem => {
            activeItem.classList.remove('active');
            activeItem.querySelector('.answer').style.maxHeight = null;
        });
        
        if (!isActive) {
            this.classList.add('active');
            const answer = this.querySelector('.answer');
            answer.style.maxHeight = answer.scrollHeight + 'px';  // Set to its scrollHeight
        }
    });
});

// Email
// const contactForm = document.querySelector('.form-items');

// let name = document.getElementById('name')
// let email = document.getElementById('email')
// let address = document.getElementById('address')
// let message = document.getElementById('message')

// contactForm.addEventListener('submit', (e)=>{
//     e.preventDefault();

//     let formData = {
//         name: name.value,
//         email: email.value,
//         address: address.value,
//         message: message.value
//     }

//     // could use fetch API 3 lines
//     let xhr = new XMLHttpRequest();
//     xhr.open('POST', '/');
//     xhr.setRequestHeader('content-type', 'application/json');
//     xhr.onload = function() {
//         console.log(xhr.responseText);
//         if (xhr.responseText == 'success'){
//             alert('Email sent');
//             name.value = '';
//             email.value = '';
//             address.value = '';
//             message.value = '';
//         } else {
//             alert('Something went wrong!')
//         }
//     }

//     //send method to the backend
//     xhr.send(JSON.stringify(formData))

// })
// Function to handle Contact Form submission
function handleContactFormSubmit() {
    const form = document.getElementById('contact-form-1');
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let address = document.getElementById('address');
    let message = document.getElementById('message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let formData = {
            formType: 'contactForm1',
            name: name.value,
            email: email.value,
            address: address.value,
            message: message.value
        };

        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.onload = function () {
            if (xhr.responseText === 'success') {
                alert('Email sent');
                name.value = '';
                email.value = '';
                address.value = '';
                message.value = '';
            } else {
                alert('Something went wrong!');
            }
        };

        xhr.send(JSON.stringify(formData));
    });
}

// Function to handle Estimate Request Form submission
function handleEstimateFormSubmit() {
    const form = document.getElementById('contact-form-2');
    let name = document.getElementById('name_2');
    let email = document.getElementById('email_2');
    let address = document.getElementById('address_2');
    let projectType = document.getElementById('project_type');
    let dateAvailable = document.getElementById('date_available');
    let budget = document.getElementById('budget');
    let message = document.getElementById('message_2');
    let uploadImages = document.getElementById('upload_images');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let formData = new FormData(); // Use FormData to handle file uploads
        formData.append('formType', 'contactForm2');
        formData.append('name', name.value);
        formData.append('email', email.value);
        formData.append('address', address.value);
        formData.append('project_type', projectType.value);
        formData.append('date_available', dateAvailable.value);
        formData.append('budget', budget.value);
        formData.append('message', message.value);

        // Append images to FormData
        Array.from(uploadImages.files).forEach(file => {
            formData.append('upload_images', file);
        });

        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/');
        xhr.onload = function () {
            if (xhr.responseText === 'success') {
                alert('Email sent');
                name.value = '';
                email.value = '';
                address.value = '';
                projectType.value = '';
                dateAvailable.value = '';
                budget.value = '';
                message.value = '';
                uploadImages.value = '';
            } else {
                alert('Something went wrong!');
            }
        };

        xhr.send(formData); // Send FormData object
    });
}

// Call the functions for each form
handleContactFormSubmit();
handleEstimateFormSubmit();

// Function called by the YouTube API when it's ready
function onYouTubeIframeAPIReady() {
    // Detect screen size and choose video
    const isMobile = window.innerWidth <= 768; // Define mobile screen width threshold
    const videoIdMobile = '9wHJpJfVZEg';  // Replace with the mobile video ID
    const videoIdDesktop = 'r4lL0Jet63I'; // Replace with the desktop video ID

    // Set the video ID based on the device
    const videoId = isMobile ? videoIdMobile : videoIdDesktop;

    // Initialize YouTube Player
    new YT.Player('player', {
        videoId: videoId, // Dynamic video ID
        playerVars: {
            autoplay: 1,         // Do not autoplay
            mute: 1,             // Start muted
            controls: 0,         // Hide all controls
            modestbranding: 1,   // Minimize YouTube branding
            rel: 0,              // Disable related videos
            fs: 0,               // Disable fullscreen button
            showinfo: 0,         // Hide video title and uploader
            iv_load_policy: 3,   // Hide annotations
            loop: 1,             // Enable looping
            playlist: videoId,   // Required for looping
            disablekb: 1,        // Disable keyboard controls
            playsinline: 1,      // Play inline on mobile
            hl: 'en',            // Set language to English
            color: 'white'       // Set progress bar to white
        },
        events: {
            onReady: function (event) {
                event.target.mute(); // Mute the video
            }
        }
    });
}




