import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FooterWrapper } from './style'
import classnames from 'classnames'

export default function Footer(props) {
    const { pathname } = useLocation()
    console.log(pathname)
    if (['/cities'].indexOf(pathname) != -1) return
    return (
        <FooterWrapper>
            <Link to="./home" className={classnames({active:pathname == '/home'})}>
                <i className='iconfont icon-shouye'></i>
                <span>首页</span>
            </Link>
            <Link to="./movie" className={classnames({active:pathname == '/movie'})}>
                <i className='iconfont icon-dianyingpiaoiocn'></i>
                <span>电影/影院</span>
            </Link>
            <Link to="./yanchu" className={classnames({active:pathname == '/yanchu'})}>
                <i className='iconfont icon-yanchu'></i>
                <span>演出</span>
            </Link>
            <Link to="./contest" className={classnames({active:pathname == '/contest'})}>
                <i className='iconfont icon-saishi'></i>
                <span>体育/赛事</span>
            </Link>
            <Link to="./mine" className={classnames({active:pathname == '/mine'})}>
                <i className='iconfont icon-wode'></i>
                <span>我的</span>
            </Link>
        </FooterWrapper>
    )
}