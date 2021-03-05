import React, {useState} from 'react';

import Head from 'next/head';
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';

import { Container, Jumbotron, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';



function Orcamento() {
  const [orcamento, setOrcamento] = useState({
     name: '',
     email: '',
     phone:'',
     whatsapp:'',
     projeto:''
  });
  const [respose, setRespose] = useState({
    fromSave:false,
    type:'',
    message: ''

  });

  const onChangeInput = e => setOrcamento({...orcamento,[e.target.name]: e.target.value});

  const sendOrcamento = async e => {
    e.preventDefault();
    console.log(orcamento);
    setRespose({fromSave: true});
    try{
      const res = await fetch('http://localhost:8080/orcamento',{
        method:'POST',
        body:JSON.stringify(orcamento),
        headers:{'Content-Type':'application/json'}
      });

      const responseEnv = await res.json();

      if(responseEnv.error){
        setRespose({
          fromSave:false,
          type: 'error',
          message: responseEnv.message
        })
      }else{
        setRespose({
          fromSave:false,
          type: 'success',
          message: responseEnv.message
        })
      }
    }catch(err){
      setRespose({
        fromSave:false,
        type: 'error',
        message: 'Sem conexão com a API'
      })
    }
  
      
    }
  
  return (
    <div>
    <Head>
        <title>Orcamento - Aula de imersão</title>
        <meta name="description" content="Solicitar orcamento para ..." />
    </Head>

  
      <Menu />

      <Jumbotron fluid className="descr-top">
        <style>
          {`.descr-top{
              background-color: #ff34;
              color: #005500;
              padding-top: 40px;
              padding-bottom: 40px;
              margin-bottom: 0rem !important;
          }`}
        </style>
        <Container className="text-center">
          <h1 className="display-4">Orçamento</h1>
        </Container>
      </Jumbotron>

      <Jumbotron fluid className="form-orcamento">
        <style>
          {`.form-orcamento{
              padding-top: 80px;
              padding-bottom: 80px;
              background-color: #fff;
              margin-bottom: 0rem !important;
            }`}
        </style>
        <Container>
         {respose.type === 'error' ? <Alert color='danger'>{respose.message}</Alert>: ''}
          {respose.type === 'success' ? <Alert color='success'>{respose.message}</Alert>: ''}
         
          <Form onSubmit={sendOrcamento}>
            <FormGroup>
              <Label for="name">Nome</Label>
              <Input type="text" required name="name" id="name" placeholder="Prencha com o nome completo"  onChange={onChangeInput}/>
            </FormGroup>

            <FormGroup>
              <Label for="email">E-mail</Label>
              <Input type="email" required name="email" id="email" placeholder="Prencha com o seu melhor e-mail" onChange={onChangeInput}/>
            </FormGroup>

            <FormGroup>
              <Label for="phone">Telefone</Label>
              <Input type="text" required name="phone" id="phone" placeholder="(XX) XXXX-XXXX" onChange={onChangeInput}/>
            </FormGroup>

            <FormGroup>
              <Label for="whatsApp">WhatsApp</Label>
              <Input type="text" required name="whatsApp" id="whatsApp" placeholder="(XX) XXXX-XXXX" onChange={onChangeInput}/>
            </FormGroup>

            <FormGroup>
              <Label for="projeto">Projeto</Label>
              <Input type="textarea" name="projeto" id="projeto" placeholder="Fale um pouco do seu projeto" onChange={onChangeInput}/>
            </FormGroup>
            {respose.fromSave ?  <Button type="submit" outline disabled color="danger">Enviando</Button>:<Button type="submit" outline color="danger">Enviar</Button>}
           
          </Form>
        </Container>
      </Jumbotron>

      <Rodape />
    </div>
  );
}

export default Orcamento;