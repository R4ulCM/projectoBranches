const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const db = require('./db.json');

app.listen(port,function(){
    console.log("Inicia Servidor... con el puerto: "+port);
    console.log("http://localhost:"+port);
});

app.use(cors());
app.use(express.json());

app.get('/api/contact',getUserGeneral);
app.get('/api/contact/:id',getUserSingle);

function getUserGeneral(request, response){
    response.send(db);
}

function getUserSingle(request, response){
    const id = request.params.id;
    const userSelect = db.contactList[id];
    if(userSelect){
        response.status(200).send(userSelect);
    }else{
        response.status(404).send({error:'Usuario no encontrado'});
    }
}