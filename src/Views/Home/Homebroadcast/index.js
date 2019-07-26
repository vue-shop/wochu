import React, { Component } from 'react';
import css from './index.module.scss'
import axios from 'axios'
class Homebroadcast extends Component {
    state = {
        datalist:[]
    }
    componentDidMount() {
        axios.get('https://api9.wochu.cn/api/app/acts?version=20.0.0&source=H').then(
            res => {
                //console.log(res.data.data.acts[0]);
                this.setState({datelist: res.data.data.carousel})
            })
    }
    render() {
        //console.log(this.props.info);
        
        return (            
            <div id={css.home_broadcast}>
                
            </div>
        )       
    }
}



export default Homebroadcast

