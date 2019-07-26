import React, { Component } from 'react';
import Homehead from './Homehead';
import Homeswiper from './Homeswiper';
import Homelist from './Homelist';
//import axios from 'axios'
//import Homebroadcast from './Homebroadcast';
import Homeimglink from './Homeimglink';
import Homecheaper from './Homecheaper';
import css from './index.module.scss'
class Home extends Component {
   
    render() {
        //console.log(this.state.datalist);
        return (
            <div className={css.all}>
                <header>
                    <Homehead />
                </header>
                <main>
                    <Homeswiper />
                    <Homelist /> 
                    <Homeimglink />
                    <Homecheaper />
                </main>
            </div>
        )
    }
}


export default Home
