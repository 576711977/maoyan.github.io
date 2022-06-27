import React, {useState, useEffect} from 'react'
import { Wrapper } from './style'
import hf from '../../../assets/images/hf.jpg'
import h1 from '../../../assets/images/h1.jpg'
import h2 from '../../../assets/images/h2.jpg'
import h3 from '../../../assets/images/h3.jpg'
import h4 from '../../../assets/images/h4.jpg'

export default function Header() {
    return (
        <Wrapper>
            <div className='header-hf'>
                <img src={hf} />
            </div>
            <div className='header-img'>
                <a href="#"><img src={h1} /></a>
                <a href="#"><img src={h2} /></a>
                <div className='header-rimg'>
                    <a href="#"><img src={h3} /></a>
                    <a href="#"><img src={h4} /></a>
                </div>
            </div>
        </Wrapper>
    )
}