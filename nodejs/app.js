
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('./models/home');
const Home = mongoose.model('Home')

require('./models/orcamento')
const Oracmento = mongoose.model('Orcamento')


const app = express();

app.use(express.json());

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Acces-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header('Acces-Control-Allow-Headers',"X-PINGOTHER,Content-Type, Authorization");
    app.use(cors());
    next();
});

mongoose.connect('mongodb://localhost:27017/myapp',{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
     console.log('Conexção realizada com sucesso');
}).catch((err) => {
    console.log('erro: conexão de banco de dados');
});

app.get('/home',async(req, res)=>{
    await Home.findOne({}).then((home)=>{
        return res.json({
            error : false,
            home
        }).catch((err)=>{
            return res.status(400).json({
                error:true,
                message:'Erro ao encontrar registro'
            })
        })
    })
})


/// Cadastro 
app.post('/orcamento' , async(req, res) => {
        await Oracmento.create(req.body , (err) => {
            if(err) return res.status(400).json({
                    error : true ,
                    message: "erro : Orçamento não enviado"
            });
        });
        return res.json({
                error : false,
                message: 'Cadastrado com sucesso'
        });
});

app.listen(8080, function(){
    console.log('Servidor iniciado porta 8080: http://localhost:8080');
});