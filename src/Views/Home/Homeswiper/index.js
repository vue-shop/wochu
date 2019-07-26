import React, { Component } from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import css from './index.module.scss'
import axios from 'axios';
import Swiperitem from '../../../Swiper';
class Homeswiper extends Component {
    state = {
        datelist:[]
    }
    componentDidMount() {
        axios.get('http://api9.wochu.cn/client/v1/app/layoutamend?parameters=%7B%22version%22:%2210.0.0%22,%22source%22:%22H%22%7D').then(res => {
            console.log(res.data.data.carousel);
            this.setState(
                {
                    datelist: res.data.data.carousel
                },
                () => {
                    new Swiper('.swiper-container', {
                        loop: true,
                        autoplay: {
                            disableOnInteraction: false,
                        },
                        pagination: {
                            el: '.swiper-pagination'
                        }
                    })
                }
            )
           
        })
    }
    render() {
        return (
            <Swiperitem>
                {
                    this.state.datelist.map((item, index) =>
                    <div className="swiper-slide" id={css.swiperslide} key={index}>
                        <img src={item.picUrl} alt={item.title} />
                    </div>
                    )}
            </Swiperitem>
            
        )       
    }
}


export default Homeswiper