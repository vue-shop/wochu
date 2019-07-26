import React, { Component } from 'react';
import axios from 'axios';
//import { NavLink } from 'react-router-dom'
import css from './index.module.scss'
class Homelist extends Component {
    state = {
        datalist: [],
        looplist: []
    }
    componentDidMount() {
        axios.get('http://api9.wochu.cn/client/v1/app/layoutamend?parameters=%7B%22version%22:%2210.0.0%22,%22source%22:%22H%22%7D')
            .then(res => {
                console.log(res.data.data.recommendedContent[0].items);
                this.setState({
                    datalist: res.data.data.recommendedContent[0].items,
                    looplist: res.data.data.recommendedContent[1].items
                })
            })
    
    }
    render() {
        return (
            <div>
                <ul className={css.Homelist}>
                    {this.state.datalist.map((item,index) =>
                        
                            <li key={index}>
                            <img src={item.imgUrl} alt={item.pos}/>
                            </li>
                        
                    )}
                </ul>
                <ul  className={css.Homelist}>
                    {this.state.looplist.map((data,index) =>
                        <li key={index}>
                            <img src={data.imgUrl} alt={data.pos}/>
                        </li>
                        )}
                </ul>
            </div>
        )
    }
}
export default Homelist;