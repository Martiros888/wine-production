const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
    {
        host: "smtp.mail.ru",
        port: 465,
        secure: true, // if 465 true else false
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    },
    {
        from: "Martiros",
    },
);

module.exports = (message) => {
    transporter.sendMail(message,(err) => {
        if (err) console.log(err)
    });
};

