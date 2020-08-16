# NODEMAILER

Olá, esse repositorio demonstra a utilização do nodemailer + nodemailer-express-handlebars. Onde atráves da rota */send (GET)* do projeto, você envia um email para o usuario pedindo para que o mesmo recupere sua senha. Para alterar o layout, basta você acessar a pasta */src/app/resources/mail/index.html*. 

**Configurando Projeto**
Para configurar o projeto, basta você criar um arquivo chamado *src/config/mailer.json* com as seguintes instruições
```
{
  "host": "smtp.mailtrap.io",
  "port": ...
  "user": ...
  "pass": ...
}
```

utilizei o [MailTrap](https://mailtrap.io/) para testes, funcionou muito bem. Basta você colocar o smtp de sua preferência.
<div style="text-align: center"> 

### Instale as seguintes dependencias
crypto
express
nodemailer
nodemailer-express-handlebars


</div>

Faça uma doação | White Code | Desenvolvedor 
:--------- | :------: | -------:
 <img src="https://i.ibb.co/nwjKhhV/QR-Code.png" alt="QR-Code" border="0" width="100"> |   <img src="https://i.ibb.co/LQwz9WG/LOGOMARCA.png" width="50"> |  André Souza 
 
