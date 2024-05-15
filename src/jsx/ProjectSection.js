import React, { useState, useContext, useEffect } from 'react'
import logofonce from '../img/icons/logofonce.svg'
import { projects } from './projects'
import ScrollbarContext from './ScrollbarContext'
import HorizontalScrollWrapper from './HorizontalScrollWrapper'

const ProjectSection = () => {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false)
    const [currentImages, setCurrentImages] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const { getScrollbar } = useContext(ScrollbarContext)

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (!isGalleryOpen) return

            switch (event.key) {
                case 'ArrowRight':
                    nextImage(event)
                    break
                case 'ArrowLeft':
                    prevImage(event)
                    break
                case 'Escape':
                    closeGallery()
                    break
                default:
                    break
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        // Fonction de nettoyage pour retirer l'écouteur d'événements
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isGalleryOpen, currentIndex])

    const toggleBodyScroll = (disable) => {
        if (disable) {
            document.body.classList.add('no-scroll')
        } else {
            document.body.classList.remove('no-scroll')
        }
    }

    const openGallery = (projectId, startIndex) => {
        const selectedProject = projects.find(project => project.id === projectId)
        if (selectedProject) {
            const formattedImages = selectedProject.images.map(imageName => ({
                type: selectedProject.type,
                src: imageName,
                title: selectedProject.title,
            }))

            setCurrentImages(formattedImages)
            setCurrentIndex(startIndex) // Utilisez startIndex ici pour définir l'image initiale
            setIsGalleryOpen(true)
            toggleBodyScroll(true)
        }
    }

    const openGalleryForVideo = (projectId) => {
        const selectedProject = projects.find(project => project.id === projectId)
        if (selectedProject && selectedProject.type === 'vidéo') {
            setCurrentImages(selectedProject.images.map(videoId => ({
                type: 'vidéo',
                src: videoId,
                title: selectedProject.title, // Inclure le titre ici
            })))
            setCurrentIndex(0)
            setIsGalleryOpen(true)
            toggleBodyScroll(true)
        }
    }

    const closeGallery = () => {
        setIsGalleryOpen(false)
        toggleBodyScroll(false)
    }

    const scrollToTop = () => {
        const scrollbar = getScrollbar()
        if (scrollbar) {
            scrollbar.scrollTo(0, 0, 500)
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    const nextImage = (event) => {
        event.stopPropagation()
        setCurrentIndex((prevIndex) => (prevIndex + 1) % currentImages.length)
    }

    const prevImage = (event) => {
        event.stopPropagation()
        setCurrentIndex((prevIndex) => (prevIndex - 1 + currentImages.length) % currentImages.length)
    }

    const renderGalleryItem = () => {
        const item = currentImages[currentIndex]
        if (item.type === 'vidéo') {
            return (
                <div className='gallery__contain'>
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${item.src}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        onClick={(e) => e.stopPropagation()}
                        className='gallery__contain__video'
                    ></iframe>
                </div>
            )
        } else { // 'photo'
            return (
                <img className='gallery__photo' src={`../img/photo/${item.src}`} alt="Full Screen"
                     onClick={(e) => e.stopPropagation()}/>
            )
        }
    }

    const renderGallery = () => {
        if (!isGalleryOpen || currentImages.length === 0) return null
        const currentItem = currentImages[currentIndex] || {}
        return (
            <div className="gallery" onClick={closeGallery}>
                <div className="gallery__infos">
                    <svg onClick={prevImage} className='gallery__infos__arrow w-6 h-6'
                         xmlns='http://www.w3.org/2000/svg'
                         fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round'
                              d='m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'/>
                    </svg>
                    <p className="gallery__infos__titles">{currentItem.title}</p>
                    <p className="gallery__infos__titles">{currentIndex + 1} / {currentImages.length}</p>
                    <p className="gallery__infos__type">PROJET {currentItem.type}</p>
                    <svg onClick={nextImage} className='gallery__infos__arrow w-6 h-6'
                         xmlns='http://www.w3.org/2000/svg'
                         fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round'
                              d='m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'/>
                    </svg>
                </div>
                <svg onClick={closeGallery} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor" className="gallery__cross w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                {renderGalleryItem()}
            </div>
        )
    }

    return (
        <section id='project-section' className='project'>
            <div className="project__logo" onClick={scrollToTop}>
                <img className="logo" src={logofonce} alt="logo Youlens"/>
            </div>
                <h2 className="project__title">Mes projets</h2>
                <p className="project__line"></p>
            <HorizontalScrollWrapper>
                <div id='thumbnail' className='project__thumbnail'>
                    {projects.map((project) => (
                        <div key={project.id} className='project__thumbnail__item'>
                            <div className='container'>
                                {project.type === 'photos' ? (
                                    project.images.slice(0, 4).map((imageName, index) => (
                                        <img key={imageName} src={`../img/photo/${imageName}`} alt={imageName}
                                             className='project__thumbnail__item__medias'
                                             onClick={() => openGallery(project.id, index)}/>
                                    ))
                                ) : project.type === 'vidéo' && project.thumbnail ? (
                                    <img src={`../img/photo/${project.thumbnail}`} alt={project.title}
                                         className='iframe'
                                         onClick={() => openGalleryForVideo(project.id)}/>
                                ) : null}
                            </div>
                            <div className='project__thumbnail__item__info'>
                                <p className='project__thumbnail__item__info__title'>{project.title}</p>
                                <p className='project__thumbnail__item__info__type'>{project.type.toLowerCase()}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </HorizontalScrollWrapper>
            {renderGallery()}
        </section>
    )
}

export default ProjectSection
