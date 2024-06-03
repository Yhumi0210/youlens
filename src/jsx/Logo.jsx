import logolight from '../img/icons/logoclair.svg'
import React from 'react'
import {Link} from 'react-router-dom'

function Logo() {
    return (
        <Link to="/">
            <img className='logo' src={logolight} alt='logo Youlens'/>
        </Link>
    )
}

export default Logo