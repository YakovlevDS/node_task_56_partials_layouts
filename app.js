// const express = require("express");
// const hbs = require("hbs");
// const app = express();
  
// app.set("view engine", "hbs");
// hbs.registerPartials(__dirname + "/views/partials");
 
// app.use("/contact", function(request, response){
      
//     response.render("contact", {
//         title: "Мои контакты",
//         email: "gavgav@mycorp.com",
//         phone: "+1234567890"
//     });
// }); 
 
// app.use("/", function(request, response){
      
//     response.render("home.hbs");
// });
// app.listen(3000);

// Для работы с файлами layout установим в проект модуль express-handlebars с помощью следующей команды: npm install express-handlebars



const express = require("express");
const expressHbs = require("express-handlebars");
const hbs = require("hbs");
const app = express();
// Функция expressHbs.engine() осуществляет конфигурацию движка. В частности, свойство layoutsDir задает путь к папке с файлами layout относительно корня каталога проекта. 
// устанавливаем настройки для файлов layout
app.engine("hbs", expressHbs.engine(
    {
        layoutsDir: "views/layouts", 
        defaultLayout: "layout",
        extname: "hbs"
    }
))
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
  
app.use("/contact", function(_, response){
       
    response.render("contact", {
        title: "Мои контакты",
        email: "gavgav@mycorp.com",
        phone: "+1234567890"
    });
}); 
  
app.use("/", function(_, response){
       
    response.render("home.hbs");
});
app.listen(3000);