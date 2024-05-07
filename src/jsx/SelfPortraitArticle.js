import React, {useContext} from 'react'
import logoclair from '../img/icons/logoclair.svg'
import iconCamera from '../img/icons/cameraicon.svg'
import iconPhoto from '../img/icons/photoicon.svg'
import iconDrone from '../img/icons/droneicon.svg'
import iconMontage from '../img/icons/montageicon.svg'
import portraitGuillaume from '../img/photo/IMG_2127-Edit-Edit.webp'
import ScrollbarContext from './ScrollbarContext'


function SelfPortraitArticle() {

    const { getScrollbar } = useContext(ScrollbarContext)

    const scrollToTop = () => {
        const scrollbar = getScrollbar()
        if (scrollbar) {
            scrollbar.scrollTo(0, 0, 500)
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    return (
        <article id="selfportrait-article" className="selfportrait">
            <div className="selfportrait__container" onClick={scrollToTop}>
                <img className="logo" src={logoclair} alt="logo Youlens" />
            </div>
            <h2 className="selfportrait__title">Qui suis-je ?</h2>
            <p className="selfportrait__line"></p>
            <div className="selfportrait__text">
                <p className="selfportrait__text__me">
                    Je m’appelle Guillaume Court,<br/>
                    ma passion pour le monde des images
                    a démarré il y a 6 ans lors de mes études
                    de cinéma d’animation 3D.<br/>
                    <br/>
                    Cette voie m’a mené à Paris pendant deux années
                    durant lesquelles j’ai travaillé pour de grosses productions
                    de long métrages grand public en tant que lighter.<br/>
                    <br/>
                    Le manque de contact humain et l’absence de travail en
                    extérieur m’ont mené à retourner dans le sud pour développer
                    un nouvel aspect de l’image qui est très vite devenu une
                    passion : la vidéo.<br/>
                    <br/>
                    Les compétences acquises auprès des studios d’animations
                    m’ont permis d’aiguiser mon oeil artistique et mes
                    capacités techniques de manière à me plonger toujours
                    plus vite dans le monde de la vidéo qui est vite
                    devenu mon travail et passe temps favori.<br/>
                </p>
                <img className="selfportrait__text__img" src={portraitGuillaume} alt="portrait de Guillaume" />
            </div>
            <h3 className="selfportrait__title">Mes services</h3>
            <p className="selfportrait__line"></p>
            <section className="selfportrait__service">
                <div className="selfportrait__service__detail">
                    <img className="selfportrait__service__detail__icon" src={iconCamera} alt="Services de vidéo" />
                    <p className="selfportrait__service__detail__text">Vidéo</p>
                </div>
                <div className="selfportrait__service__detail">
                    <img className="selfportrait__service__detail__icon" src={iconDrone} alt="Services de drone" />
                    <p className="selfportrait__service__detail__text">Drone</p>
                </div>
                <div className="selfportrait__service__detail">
                    <img className="selfportrait__service__detail__icon" src={iconPhoto} alt="Services de photographie" />
                    <p className="selfportrait__service__detail__text">Photographie</p>
                </div>
                <div className="selfportrait__service__detail">
                    <img className="selfportrait__service__detail__icon" src={iconMontage} alt="Services de post production" />
                    <p className="selfportrait__service__detail__text">Post production</p>
                </div>
            </section>
            <h4 className="selfportrait__title">Comment ça se passe ?</h4>
            <p className="selfportrait__line"></p>
            <div className="selfportrait__text">
                <p className="selfportrait__text__how">
                    Youlens est une entreprise de communication par l’image<br />
                    spécialisée dans la vidéo aérienne en drone ou en drone FPV.<br />
                    Je réalise mes photographies et vidéos seul, de la prise de<br />
                    vue jusqu’à la post production. Je suis basé dans le sud de<br />
                    la france mais je peux travailler partout dans le monde.<br />
                    <br />
                    Les projets vont de l’immobilier, du mariage, à la vidéo<br />
                    corporate d’entreprise en passant par la couverture d’événements<br />
                    exceptionnels ou encore la mise en avant de lieux culturels<br />
                    ou historiques. Il m’arrive également de travailler dans un<br />
                    domaine plus technique dans des usines de fabrications ou dans le BTP.<br />
                    <br />
                    Une prise de contact débouche sur une discussion autour de<br />
                    votre projet quel qu’il soit, toutes les idées et envies<br />
                    sont réalisables en vidéo tant qu’elles correspondent à votre image.<br />
                    <br />
                    Chaque projet est unique et représente un nouveau défi<br />
                    artistique et technique toujours passionnant à relever.<br />
                </p>
            </div>
        </article>
    )
}

export default SelfPortraitArticle