import React from 'react';
import './styles.css';

class TecSide extends React.Component {

    render() {

        // Internet Explorer 6-11
        let isIE = /*@cc_on!@*/false || !!document.documentMode;
        
        return(
            <div className="div__side">
                <div className="item__side">
                    <a href="https://www.youtube.com/watch?v=Nv2SODarups">
                        <img src={require('./../../assets/side/btn.jpg')}/>
                    </a>
                </div>
                <div className="item__side">
                    <div className={isIE ? "item__special__IE" : "item__special"}>
                        <a href="http://www.itlalaguna.edu.mx/bolsadetrabajo.html">
                            <img src={require('./../../assets/side/BOLSAT.jpg')}/>
                        </a>
                    </div>
                    <div className={isIE ? "item__special__IE" : "item__special"}>
                        <a href="http://www.itlalaguna.edu.mx/2014/servicios/academicos/seguimientoegresados.html">
                            <img src={require('./../../assets/side/egre.jpg')}/>
                        </a>
                    </div>
                </div>
                <div className="item__side">
                    <a href="http://www.itlalaguna.edu.mx/convoca16.html">
                        <img src={require('./../../assets/side/Becas.jpg')}/>
                    </a>
                </div>
                <div className="item__side">
                    <a href="http://www.itlalaguna.edu.mx/pulsotec/pulsotecdigital.html">
                        <img src={require('./../../assets/side/pulsotecREVISTA.jpg')}/>
                    </a>
                </div>

                <div className="div__sites">
                    <h3 className="h3__title">Temas de Interés</h3>

                    <p className="border__dotted">
                        <a href="http://www.itlalaguna.edu.mx/avisos/calendario19.pdf">Calendario de Actividades</a>
                    </p>
                    <p className="border__dotted">
                        <a href="#">Historial de Eventos</a>
                    </p>
                    <p className="border__dotted">
                        <a href="http://www.itlalaguna.edu.mx/servicios/academicos/tutoriales/recbiblio.html">Rec. Bibliográficos</a>
                    </p>                    
                    <p className="border__dotted">
                        <a href="https://accounts.google.com/ServiceLogin/signinchooser?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F%3Ftab%3Dwm&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">Correo Electróinco</a>
                    </p>
                    <p className="border__dotted">
                        <a href="http://www.itlalaguna.edu.mx/avisos/PROVEEDORES.html">Proveedores</a>
                    </p>
                    <p className="border__dotted">
                        <a href="http://www.itlalaguna.edu.mx/2014/avisos/ModEdXXI.pdf">Modelo Educativo para el Siglo XXI</a>
                    </p>
                </div>

                <div className="div__sites">
                    <h3 className="h3__title">Sitios Relacionados</h3>

                    <p className="border__dotted">
                        <a href="http://www.presidencia.gob.mx/">Presidencia de la República</a>
                    </p>
                    <p className="border__dotted">
                        <a href="http://www.sep.gob.mx/">Secretaría de Educación Pública</a>
                    </p>                    
                    <p className="border__dotted">
                        <a href="http://www.tecnm.mx/">Tecnológico Nacional de México</a>
                    </p>
                    <p className="border__dotted">
                        <a href="http://ses.sep.gob.mx/">Subsecretaría de Educación Superior</a>
                    </p>
                    <p className="border__dotted">
                        <a href="http://www.tecnm.mx//informacion/institutos-tecnologicos-de-mexico">Instituciones del Sistema</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default TecSide;