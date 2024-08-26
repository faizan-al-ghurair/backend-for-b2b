const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
  service: "Outlook365",
  host: "smtp.office365.com",
  port: "587",
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
  auth: {
    user: "fshaikhapple@outlook.com",
    pass: process.env.PAS,
  },
});

