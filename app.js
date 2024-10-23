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

document.addEventListener("DOMContentLoaded", function() {
    const fixedImage = document.getElementById("fixedImage");
    const fixedImage2 = document.getElementById("fixedImage2");
    const hookSection = document.querySelector(".hook");

    // Create an IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                // When the .hook section goes out of view, hide the image
                fixedImage.style.display = "none";
                fixedImage2.style.display = "none";
            } else {
                // When the .hook section is in view, show the image
                fixedImage.style.display = "block";
                fixedImage2.style.display = "block";
            }
        });
    }, {
        threshold: 0.1 // Adjust threshold to determine how much of the section should be visible before triggering
    });

    // Observe the .hook section
    observer.observe(hookSection);
});