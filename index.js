const express = require("express"); //importa o módulo express neste arquivo
const app = express(); //iniciando o express


app.get("/", function(req,res){
    res.send("<h1>Bem vindo ao meu site!</h1>");
     
})


app.get("/contato", function(req,res){
    res.send("<h1>Lista de contato!</h1>");
})


app.get("/empresa", function(req,res){
    res.send("<h1>lista da empresa</h1>");
})



app.listen(process.env.PORT ?? 3000,function(erro){ 
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})

