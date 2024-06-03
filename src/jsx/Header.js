import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ScrollbarContext from './ScrollbarContext'
import Brand from './Brand'
import Logo from './Logo'

function Header() {
    const location = useLocation()
    const { getScrollbar } = useContext(ScrollbarContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    const handleMenuToggle = () => {
        setIsAnimating(true)
        setIsMenuOpen(!isMenuOpen)
    }

    const handleAnimationEnd = () => {
        setIsAnimating(false)
    }

    const handleScrollToSection = (sectionId) => {
        const scrollbar = getScrollbar()
        const section = document.getElementById(sectionId)
        if (scrollbar && section) {
            scrollbar.scrollIntoView(section, { offsetTop: -scrollbar.offset.y })
        } else {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    if (location.pathname === '/mentions-legales') {
        return null // Ne rien afficher si on est sur la page 'Mentions Légales'
    }

    return (
        <header id="header" className="hero">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="menu-toggle w-6 h-6" onClick={handleMenuToggle}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            </svg>
            <Brand/>
            <nav className={`hero__nav ${isMenuOpen ? 'is-open' : isAnimating ? 'is-closed' : ''}`}
                 onAnimationEnd={handleAnimationEnd}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="menu w-6 h-6" onClick={handleMenuToggle}>
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
            <Logo/>
        </header>
    )
}

export default Header
