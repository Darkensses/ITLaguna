import React from 'react';
import Card from '../Card';

import './styles.css';

class TecNewsCard extends React.Component {

    render() {

        return(
            <Card className="card__news float">
                <div className="image__news"></div>
                <div className="content__news">
                    <h3 className="title__news">Titulo Prueba</h3>
                    <p className="excerpt__news">
                        El Instituto Tecnológico de La Laguna adscrito al 
                        Tecnológico Nacional de México recibió la certificación de la Norma ISO 50001:2011 
                        la cual se refiere al  Sistema de Gestión de la Energía (SGE...
                    </p>
                    <a href="#" className="button__news">Seguir Leyendo...</a>
                </div>
            </Card>
        );
    }
}

export default TecNewsCard;