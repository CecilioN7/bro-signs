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
const contactForm = document.querySelector('.form-items');

let name = document.getElementById('name')
let email = document.getElementById('email')
let address = document.getElementById('address')
let message = document.getElementById('message')

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let formData = {
        name: name.value,
        email: email.value,
        address: address.value,
        message: message.value
    }

    // could use fetch API 3 lines
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
        console.log(xhr.responseText);
        if (xhr.responseText == 'success'){
            alert('Email sent');
            name.value = '';
            email.value = '';
            address.value = '';
            message.value = '';
        } else {
            alert('Something went wrong!')
        }
    }

    //send method to the backend
    xhr.send(JSON.stringify(formData))

})


// change video source
function updateVideoSource() {
    const video = document.getElementById('responsive-video');
    const screenWidth = window.innerWidth;
    let newSource;
  
    if (screenWidth >= 768) {
      newSource = '/video/about.mp4';
    } else {
      newSource = '/video/about.mp4';
    }
  
    const currentSource = video.querySelector('source').getAttribute('src');
    if (newSource !== currentSource) {
      video.querySelector('source').setAttribute('src', newSource);
      video.load(); // Reload the video with the new source
    }
  }
  
  // Run the function on page load and on resize
  updateVideoSource();
  window.addEventListener('resize', updateVideoSource);
  