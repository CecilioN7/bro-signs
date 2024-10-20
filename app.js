const faqContainers = document.querySelectorAll(".faq-container");

faqContainers.forEach((faq) => {
    faq.addEventListener("click", () => {
        // Close all other FAQs
        faqContainers.forEach((otherFaq) => {
            if (otherFaq !== faq) {
                otherFaq.classList.remove("active");
            }
        });

        // Toggle the clicked FAQ
        faq.classList.toggle("active");
    });
});
