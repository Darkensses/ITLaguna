import React, {Component} from 'react';
//import Menu, {SubMenu, MenuItem} from 'rc-menu';

import Drawer from 'react-motion-drawer';

//import Drawer from 'rc-drawer';
//import 'rc-drawer/assets/index.css';

//
import './styles.css'
import MenuButton from './MenuButton';
import BaseMenu from './BaseMenu';

class TecMenu extends Component {

    state = {        
        width: 0,
        height:0,
        menuOpen:false,
        mobileView:false        
    };

    handleMenuClick(){
        this.setState({menuOpen:!this.state.menuOpen});
        console.log(this.state.menuOpen);
    }
    
    updateDimensions = () => {
        this.setState({width: window.innerWidth, height: window.innerHeight});
        if(this.state.width <= 991){
            this.setState({mobileView: true});
        }
        else {
            this.setState({mobileView: false}); 
        }
    }
    componentWillMount = () => {
        this.updateDimensions();
    }
    componentDidMount = () => {
        window.addEventListener("resize", this.updateDimensions);   
        if(this.state.width <= 991){
            this.setState({mobileView: true});
        }
        else {
            this.setState({mobileView: false}); 
        }    
    }
    componentWillUnmount = () =>{
        window.removeEventListener("resize", this.updateDimensions);
    }
    render() { 

        let menuMode = "horizontal";        
        if (window.matchMedia("(max-width: 991px)").matches){
            menuMode = "inline"
            

            console.log("Mobile Menu");
        }
        else{
            menuMode = "horizontal"
                     
        }        

        //<Drawer open={this.state.menuOpen?true:false} onMaskClick={() => this.setState({menuOpen: false })} handler={false} width="40vw">

        let menu = <BaseMenu menuMode={menuMode}/>;
        if(this.state.mobileView){
            menu = <div>
                        <div className="menu__stick">
                            <div className="menu__title"><h3>ITLaguna</h3></div>
                            <MenuButton color="#FFF" open={this.state.menuOpen} onClick={()=>this.handleMenuClick()}/>
                        </div>
                        <Drawer className="menu__drawer" zIndex={665} open={this.state.menuOpen?true:false} onChange={opened => {this.setState({menuOpen: opened})}}>
                            <BaseMenu menuMode={menuMode}/>
                        </Drawer>                        
                    </div>;
        }
        else {
            menu = <BaseMenu menuMode={menuMode}/>;
        }

        return(            
            <div>
                {menu}            
                {/*<span>{this.state.width} x {this.state.height}</span>;*/}
            </div>
        );
    }

}

export default TecMenu;