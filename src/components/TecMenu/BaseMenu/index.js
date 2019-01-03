import React from 'react';
import Menu, {SubMenu, MenuItem} from 'rc-menu';
import 'rc-menu/assets/index.css';

const BaseMenu = (props) => {

    return(
        <Menu 
        className="menu__main"
        mode={props.menuMode}
        triggerSubMenuAction="click"
        openAnimation="slide-up"
        >
            <MenuItem>Inicio</MenuItem>
            <SubMenu title="Quienes Somos">
                <MenuItem>Directorio</MenuItem>
                <MenuItem>Historia</MenuItem>
                <MenuItem>Vision y Misión</MenuItem>
                <MenuItem>Ubicación e Infraestructura</MenuItem>
                <MenuItem>Cuidado del Medio Ambiente</MenuItem>
                <MenuItem>Identidad</MenuItem>
                <MenuItem>Contacto</MenuItem>
                <MenuItem>Buzón</MenuItem>
            </SubMenu>
            <SubMenu title="Oferta Educativa">
                <SubMenu title={<span className="submenu-title-wrapper">Profesional Asociado</span>}>
                    <MenuItem>P.A. En Energía Electrica</MenuItem>
                    <MenuItem>P.A. En Energías Renovables</MenuItem>
                </SubMenu>
                <SubMenu title={<span className="submenu-title-wrapper">Nivel Licenciatura</span>}>
                    <MenuItem>Ing. Eléctrica</MenuItem>
                    <MenuItem>Ing. Electrónica</MenuItem>
                    <MenuItem>Ing. En Energias Renovables</MenuItem>
                    <MenuItem>Ing. Industrial</MenuItem>
                    <MenuItem>Ing. Mecánica</MenuItem>
                    <MenuItem>Ing. Mecatrónica</MenuItem>
                    <MenuItem>Ing. Química</MenuItem>
                    <MenuItem>Ing. Sistemas Computacionales</MenuItem>
                    <MenuItem>Lic. Administración</MenuItem>
                    <MenuItem>Ing. Gestión Empresarial</MenuItem>
                </SubMenu>
                <MenuItem>Nivel Posgrado</MenuItem>
            </SubMenu>
            <SubMenu title="Aspirantes">
                <MenuItem>Semestre de Nivelación</MenuItem>
                <MenuItem>Ingreso Licenciatura</MenuItem>
                <MenuItem>Ingreso Posgrado</MenuItem>
                <MenuItem>Ingreso Distancia</MenuItem>
            </SubMenu>
            <SubMenu title="Alumnado">
                <SubMenu title={<span className="submenu-title-wrapper">Div. De Estudios Profesionales</span>}>
                    <MenuItem>Reingreso Licenciatura</MenuItem>
                    <MenuItem>Veranos Licenciatura</MenuItem>
                    <MenuItem>Reingreso Posgrado</MenuItem>
                    <MenuItem>Reingreso Distancia</MenuItem>
                    <MenuItem>Horarios Materias</MenuItem>
                    <MenuItem>Exámen de Inglés</MenuItem>
                    <MenuItem>Exámenes Especiales</MenuItem>
                </SubMenu>
                <SubMenu title={<span className="submenu-title-wrapper">Servicios Escolares</span>}>
                    <MenuItem>Convocatorias</MenuItem>
                    <MenuItem>Seguro Facultativo</MenuItem>
                    <MenuItem>Estatus Alumno</MenuItem>
                    <MenuItem>Requisitos Certificado</MenuItem>
                    <MenuItem>Reglamento</MenuItem>
                    <MenuItem>Titulación</MenuItem>
                </SubMenu>
                <SubMenu title={<span className="submenu-title-wrapper">Desarrollo Académico</span>}>
                    <MenuItem>Evaluación al Profesorado</MenuItem>
                    <MenuItem>Tutorías</MenuItem>
                    <MenuItem>Calendario Escolar</MenuItem>
                </SubMenu>
                <SubMenu title={<span className="submenu-title-wrapper">Servicios Extraescolares</span>}>
                    <MenuItem>Horario De Actividades Extraescolares</MenuItem>
                </SubMenu>
            </SubMenu>
            <SubMenu title="Personal">
                <MenuItem>Docentes</MenuItem>
                <MenuItem>Convocatorias</MenuItem>
                <MenuItem>Nueva Ley ISSSTE</MenuItem>
                <MenuItem>Reglamentos</MenuItem>
                <MenuItem>PRODEP</MenuItem>
            </SubMenu>
            <SubMenu title="Vinculación">
                <MenuItem>Servicios Externos</MenuItem>
                <MenuItem>Curso Introducción A Solidworks</MenuItem>
            </SubMenu>
        </Menu>
    );

}

export default BaseMenu;