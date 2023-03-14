var nodemailer = require('nodemailer');

const mailTransport = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    secure: true,
    secureConnection: false, // TLS requires secureConnection to be false
    tls: {
        ciphers: 'SSLv3'
    },
    requireTLS: true,
    port: 465,
    debug: true,
    auth: {
        user: "info@vrbitz.com",
        pass: process.env.EMAIL_PASSWORD
    }
});


const kycSubmitted = async (email) => {
    const mailOptions = {
        from: 'info@vrbitz.com',
        to: email,
        subject: 'KYC Submitted!',
        text: 'KYC submitted wait for approval!',
        html: `<br><br>Thanks & Regards,<br>Vrbitz Team`
    };

    mailTransport.sendMail(mailOptions).then(() => {
        console.log('Email sent successfully');
    }).catch((err) => {
        console.log('Failed to send email');
        console.error(err);
    });
}

const sendRejectedMail = async (email) => {
    const mailOptions = {
        from: 'info@vrbitz.com',
        to: email,
        subject: 'KYC rejected',
        text: 'KYC is Rejected! Contact Admin',
        html: `<br><br>Thanks & Regards,<br>Vrbitz Team`
    };

    mailTransport.sendMail(mailOptions).then(() => {
        console.log('Email sent successfully');
    }).catch((err) => {
        console.log('Failed to send email');
        console.error(err);
    });

}

const approvedMail = async (email) => {
    const mailOptions = {
        from: 'info@vrbitz.com',
        to: email,
        subject: 'KYC Approved!',
        text: 'KYC is Approved!',
        //html: `Please click <a href="${url}/user/verify/${uniqueString}"> here </a>to verify your email.<br><br>Thanks & Regards,<br>Vrbitz Team`
    };

    mailTransport.sendMail(mailOptions).then(() => {
        console.log('Email sent successfully');
    }).catch((err) => {
        console.log('Failed to send email');
        console.error(err);
    });

}


const sendVerificationEmail = async (email, uniqueString, url) => {

    const mailOptions = {
        from: 'info@vrbitz.com',
        to: email,
        subject: 'Verification Email',
        text: 'By clicking on the following link, you are confirming your email address.',
        html: `Please click <a href="${url}/user/verify/${uniqueString}"> here </a>to verify your email.<br><br>Thanks & Regards,<br>Vrbitz Team`
    };

    mailTransport.sendMail(mailOptions).then(() => {
        console.log('Email sent successfully');
    }).catch((err) => {
        console.log('Failed to send email');
        console.error(err);
    });
}

const sendPasswordResetEmail = async (email, id, token, url) => {

    const mailOptions = {
        to: email,
        from: "info@vrbitz.com",
        text: 'By clicking on the following link, you can reset your Password.',
        subject: 'Password Reset Email',
        html: `Click <a href="${url}/user/reset?userId=${id}&rtoken=${token}"> here </a>to Reset your Password. <br><br>Thanks & Regards,<br>Vrbitz Team`
    }

    mailTransport.sendMail(mailOptions).then(() => {
        console.log('Email sent successfully');
    }).catch((err) => {
        console.log('Failed to send email');
        console.error(err);
    });

}

module.exports = {
    approvedMail,
    sendRejectedMail,
    sendVerificationEmail,
    sendPasswordResetEmail
}



// mailTransport.sendMail(mailOptions).then(() => {
//     console.log('Email sent successfully');
// }).catch((err) => {
//     console.log('Failed to send email');
//     console.error(err);
// });