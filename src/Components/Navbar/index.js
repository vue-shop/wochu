import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import css from './index.module.scss'
class Navbar extends Component {
    render() {
        return (
            <nav>
                <ul className={css.navbar}>
                    <li>
                        <NavLink to="/home" replace activeClassName={css.active}>
                            <span className="iconfont icon-guo"></span>
                            <p>首页</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/classify" replace activeClassName={css.active}>
                            <span className="iconfont icon-canju"></span>
                            <p>分类</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/mall" replace activeClassName={css.active}>
                            <span className="iconfont icon-gouwuche1"></span>
                            <p>购物车</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/personal" replace activeClassName={css.active}>
                            <span className="iconfont icon-tubiao-"></span>
                            <p>我的</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }

    }

export default Navbar