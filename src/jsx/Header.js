import React, { useContext, useState } from 'react'  // Ajout de useState
import { Link } from 'react-router-dom'
import ScrollbarContext from './ScrollbarContext'
import logolight from '../img/icons/logoclair.svg'

function Header() {
    const { getScrollbar } = useContext(ScrollbarContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)  // État pour le menu burger

    const handleScrollToSection = (sectionId) => {
        const scrollbar = getScrollbar()
        const section = document.getElementById(sectionId)
        if (scrollbar && section) {
            scrollbar.scrollIntoView(section, { offsetTop: -scrollbar.offset.y })
        } else {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <header id="header" className="hero">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="menu-toggle w-6 h-6" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            </svg>
            <Link to="/" className="hero__brand">
                <p className="hero__brand__letters">YOULENS</p>
            </Link>
            <nav className={`hero__nav ${isMenuOpen ? 'is-open' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="menu w-6 h-6" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>
                <ul className="hero__nav__link">
                    <li className="hero__nav__link__page" onClick={() => handleScrollToSection('project-section')}>
                        <a className="hero__nav__link__page__a">projets</a>
                    </li>
                    <li className="hero__nav__link__page" onClick={() => handleScrollToSection('selfportrait-article')}>
                        <a className="hero__nav__link__page__a">à propos</a>
                    </li>
                    <li className="hero__nav__link__page" onClick={() => handleScrollToSection('contact-section')}>
                        <a className="hero__nav__link__page__a">contact</a>
                    </li>
                </ul>
            </nav>
            <img className="logo" src={logolight} alt="logo Youlens"/>
        </header>
    )
}

export default Header
