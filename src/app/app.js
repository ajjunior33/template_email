const express = require("express");
const crypto = require("crypto");
const mailer = require("./modules/mailer");

const app = express();

app.get("/send", async (req, res) => {
  try {
    const token = crypto.randomBytes(20).toString("hex");
    console.log(token);

    mailer.sendMail(
      {
        to: "email@emai.com",
        from: "email@emai.com",
        template: "index",
        context: { token },
      },
      (err) => {
        return res.status(400).json({ messager: err });
      }
    );

    return res.status(200).json({ messager: "Sucesso!" });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ messager: "Erro on forgot password, try again." });
  }
});

module.exports = app;
