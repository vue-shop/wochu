import React, { Component } from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
//import css from './index.module.scss'
//import axios from 'axios';
class Swiperitem extends Component {
    state = {
        datelist:[]
    }
    componentDidMount() {
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
    render() {
        return (
                < div className = "swiper-container" >
                    <div className="swiper-wrapper">
                         {this.props.children}
                    </div>
                    {/* 如果需要分页 */}
                    <div className='swiper-pagination'></div>
                </div>
            
        )       
    }
}


export default Swiperitem