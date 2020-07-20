const hbs = require("nodemailer-express-handlebars");
const path = require("path");
const mailer = require("../../config/mailer.json");
const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: mailer.host,
  port: mailer.port,
  auth: {
    user: mailer.user,
    pass: mailer.pass,
  },
});

transport.use(
  "compile",
  hbs({
    viewEngine: {
      defaultLayout: undefined,
      partialsDir: path.resolve("./src/app/resources/mail"),
    },
    viewPath: path.resolve("./src/app/resources/mail"),
    extName: ".html",
  })
);

module.exports = transport;
