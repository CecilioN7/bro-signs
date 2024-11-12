// const express = require('express')
// const app = express();

// const nodemailer = require("nodemailer");

// const PORT = process.env.PORT || 5004;

// //Middleware
// app.use(express.static('public'));
// app.use(express.json())

// app.get('/', (req, res)=>{
//     res.sendFile(__dirname + '/public/contact.html')
// })

// // post route
// app.post('/', (req, res)=>{
//     console.log(req.body);

//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'navarro.cecilio16@gmail.com',
//             pass: 'uewx ttci bsfa sdpq'
//         }
//     })

//     const mailOptions = {
//         from: req.body.email,
//         replyTo: req.body.email,
//         to: 'navarro.cecilio16@gmail.com',
//         subject: `New message from ${req.body.name}`,
//         html: `
//             <p>You have a new message from your website contact form.</p>
//             <h3>Contact Details</h3>
//             <ul>
//                 <li><strong>Name:</strong> ${req.body.name}</li>
//                 <li><strong>Email:</strong> ${req.body.email}</li>
//                 ${req.body.address ? `<li><strong>Address:</strong> ${req.body.address}</li>` : ''}
//             </ul>
//             <h3>Message</h3>
//             <p>${req.body.message}</p>
//         `
//     }

//     transporter.sendMail(mailOptions, (error, info)=>{
//         if(error){
//             console.log(error);
//             res.send('error');
//         } else {
//             console.log('Email sent: ' + info.response);
//             res.send('success')
//         }
//     })
// })

// app.listen(PORT, ()=>{
//     console.log(`Server running on port ${PORT}`)
// })


const express = require('express');
const app = express();
const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5004;

// Middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
});

// Post route
app.post('/', (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'navarro.cecilio16@gmail.com',
            pass: 'uewx ttci bsfa sdpq'
        }
    });

    const formType = req.body.formType;

    let mailOptions;

    if (formType === 'contactForm1') {
        mailOptions = {
            from: req.body.email,
            replyTo: req.body.email,
            to: 'navarro.cecilio16@gmail.com',
            subject: `New message from ${req.body.name} via Contact Form 1`,
            html: `
                <p>You have a new message from your website Contact Form 1.</p>
                <h3>Contact Details</h3>
                <ul>
                    <li><strong>Name:</strong> ${req.body.name}</li>
                    <li><strong>Email:</strong> ${req.body.email}</li>
                    ${req.body.address ? `<li><strong>Address:</strong> ${req.body.address}</li>` : ''}
                </ul>
                <h3>Message</h3>
                <p>${req.body.message}</p>
            `
        };
    } else if (formType === 'contactForm2') {
        mailOptions = {
            from: req.body.email,
            replyTo: req.body.email,
            to: 'navarro.cecilio16@gmail.com',
            subject: `New message from ${req.body.name} via Contact Form 2`,
            html: `
                <p>You have a new message from your website Contact Form 2.</p>
                <h3>Contact Details</h3>
                <ul>
                    <li><strong>Name:</strong> ${req.body.name}</li>
                    <li><strong>Email:</strong> ${req.body.email}</li>
                    ${req.body.address ? `<li><strong>Address:</strong> ${req.body.address}</li>` : ''}
                </ul>
                <h3>Message</h3>
                <p>${req.body.message}</p>
            `
        };
    } else {
        res.send('error');
        return;
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});