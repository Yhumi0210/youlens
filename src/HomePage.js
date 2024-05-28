import React from 'react'
import MainSection from './jsx/MainSection'
//import ProjectSection from './jsx/ProjectSection'
import SelfPortraitArticle from './jsx/SelfPortraitArticle'
import SlickCarousel from './jsx/SlickCarousel'

function HomePage() {
    return (
        <div>
            <MainSection />
            <SlickCarousel />
            <SelfPortraitArticle />
        </div>
    )
}

export default HomePage