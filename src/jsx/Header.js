import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ScrollbarContext from './ScrollbarContext'
import logolight from '../img/icons/logoclair.svg'

function Header() {
    const { getScrollbar } = useContext(ScrollbarContext) // Utilisez le contexte pour accéder à getScrollbar

    const handleScrollToSection = (sectionId) => {
        const scrollbar = getScrollbar()
        const section = document.getElementById(sectionId)

        if (scrollbar && section) {
            // Utilisez l'instance de smooth-scrollbar pour déclencher le défilement
            scrollbar.scrollIntoView(section, { offsetTop: -scrollbar.offset.y })
        } else {
            // Fallback au défilement natif si smooth-scrollbar n'est pas disponible
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <header id="header" className="hero">
            <Link to="/" className="hero__brand">
                <p>YOULENS</p>
            </Link>
            <nav className="hero__nav">
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
            <img className="logo" src={logolight} alt="logo Youlens" />
        </header>
    )
}

export default Header