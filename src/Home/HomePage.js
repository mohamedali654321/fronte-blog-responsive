import React from 'react'
import './HomePage.css'
import HomeHero from './Page/HomeHero/HomeHero'
import Logo from './Page/Logo/Logo'
import Feature from './Page/Feature/Feature'
import SixthSection from './Page/SixthSection/SixthSection'



function HomePage() {
    return (
        <div >
        <div class="homeContainer">
         

          <div class="homeWrapper">
            <section>
                <HomeHero/>
                
                <div>

                <Logo/>

                <Feature/>

                <SixthSection/>
                

                </div>

                </section>


        </div>
        </div>
    </div>
    )
}

export default HomePage
