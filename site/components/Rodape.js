import React from 'react';

import {Container, Jumbotron} from 'reactstrap';

const Rodape = () =>{
    return (
        <Jumbotron fluid className="rodape">
            <style>
                {`.rodape{
                    background-color: #005500;
                    color: #fff;
                    padding-top: 10px;
                    padding-bottom: 10px;
                    margin-bottom: 0rem !important;
                }`}
            </style>
            <Container className="text-center">
                <h1 className="lead">Semana de Imersão ao Node.js, React e React Native</h1>
            </Container>
        </Jumbotron>
    );
};

export default Rodape;