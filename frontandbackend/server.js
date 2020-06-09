const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const db = require('./db.json');
const br = require('./br.json');

app.use(cors());

const api = require('./api');

app.use('/api',api);

app.listen(port,function(){
    console.log("Inicia Servidor... con el puerto: "+port);
    console.log("http://localhost:"+port);
});

/*
app.use(express.json());

app.get('/api/contact',getUserGeneral);
app.get('/api/contact/:id',getUserSingle);
app.get('/api/branches/',getBranGeneral);
app.get('/api/branches/:id',getBranSingle);

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

function getBranGeneral(request, response){
    response.send(br);
}

function getBranSingle(request, response){
    const id = request.params.id;
    const branchesSelect = br.branches[id];
    if(branchesSelect){
        response.status(200).send(branchesSelect);
    }else{
        response.status(404).send({error:'No se han encontrado datos relacionados ('+id+')'});
    }
}
*/