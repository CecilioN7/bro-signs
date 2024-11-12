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

function handleFormSubmit(formId, nameId, emailId, addressId, messageId, formType) {
    const form = document.getElementById(formId);
    let name = document.getElementById(nameId);
    let email = document.getElementById(emailId);
    let address = document.getElementById(addressId);
    let message = document.getElementById(messageId);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let formData = {
            formType: formType,
            name: name.value,
            email: email.value,
            address: address.value,
            message: message.value
        };

        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.onload = function () {
            console.log(xhr.responseText);
            if (xhr.responseText == 'success') {
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

// Handle the first form
handleFormSubmit('contact-form-1', 'name', 'email', 'address', 'message', 'contactForm1');

// Handle the second form
handleFormSubmit('contact-form-2', 'name_2', 'email_2', 'address_2', 'message_2', 'contactForm2');