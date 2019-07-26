import React, { Component } from 'react'
import axios from 'axios'
import css from './index.module.scss'
class Homehead extends Component {
    state = {
        address:null
    }
    componentDidMount() {
        axios.get('http://api9.wochu.cn/client/v1/sameday/getLoadHomeSameDayInfo').then(res => {
            console.log(res.data.data.address);
            this.setState({
                address:res.data.data.address
            })
        })
    }
    render() {
        return (
            <div className={css.homehead}>
                <header>
                    <img src="http://wmall.wochu.cn/h5/home/vueimg/wochuLogo.png" className={css.logo_img} alt="logo" />
                    <p className={css.head_address}>{this.state.address}</p>
                    <img src="http://wmall.wochu.cn/h5/home/vueimg/search.png" className={css.search_btn} alt="search"/>
                </header>
            </div>
        )
    }
}


export default Homehead