import React, { Component } from 'react';
import css from './index.module.scss'
import axios from 'axios'
class Homeimglink extends Component {
    state = {
        data:null
    }
    componentDidMount() {
        axios.get('https://api9.wochu.cn/api/app/acts?version=20.0.0&source=H').then(
            res => {
                console.log(res.data.data.acts[1].items[0].imgUrl);
                this.setState({ data: res.data.data.acts[1].items[0].imgUrl})
                console.log(this.state.data);
                
            })
    }
    render() {
        return (            
            <div className={css.Homeimglink}>
                {
                    this.state.data ?
                         <img src={this.state.data} alt=""/>:null
               }
            </div>
        )       
    }
}



export default Homeimglink

