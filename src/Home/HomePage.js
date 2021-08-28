import React from 'react'
import './HomePage.css'
import HomeHero from './Page/HomeHero/HomeHero'
import Logo from './Page/Logo/Logo'
import Feature from './Page/Feature/Feature'
import SixthSection from './Page/SixthSection/SixthSection'
import Review from './Page/Review/Review'
import Steps from './Page/Steps/Steps'
import LeftProduct from './Page/KwareProduct/LeftProduct/LeftProduct'
import ReightProduct from './Page/KwareProduct/ReightProduct/ReightProduct'



function HomePage() {

const products=[


    {
        title:"Folio : The Future of Libraries is Open" ,
        description:"The FOLIO community is an open source, transparent collaboration of librarians, developers and vendors. The development of the platform is based on agile methodology with oversight from a Product Council. The community utilizes a number of communication channels to work, share and talk.        "  + "       FOLIO project aims to facilitate a sustainable, community-driven collaboration around the creation of a modern technology ecosystem that empowers libraries through open source applications to manage library resources and expand library value.",
        url:"/"
    },

    {
        title:"Koha Library Software: The world's first free and open source library system" ,
        description:"Koha is the first free software library automation package. In use worldwide, its development is steered by a growing community of users collaborating to achieve their technology goals. Koha’s feature set continues to evolve and expand to meet the needs of its user base.",
        url:"/"
    },
    {
        title:"DSpace :" ,
        description:"DSpace is the software of choice for academic, non-profit, and commercial organizations building open digital repositories.  It is free and easy to install “out of the box” and completely customizable to fit the needs of any organization. " + "DSpace preserves and enables easy and open access to all types of digital content including text, images, moving images, mpegs and data sets.  And with an ever-growing community of developers, committed  to continuously expanding and improving the software, each DSpace installation benefits from the next.",
        url:"/"
    },
    {
        title:"Strapi : Headless CMS" ,
        description:"Strapi is the leading open-source headless CMS. It’s 100% JavaScript, fully customizable and developer-first.",
        url:"/"
    },

]

    return (
        <div >
        <div class="homeContainer">
         

          <div class="homeWrapper">
            <section>
                <HomeHero/>
                
                <div>

                {
                    products.map((product, index)=>(

                        <LeftProduct
                            title={product.title}
                            description={product.description}
                            url={product.url}
                            index={index}
                        />


                    ))
                }

               
{/* 
                <Feature/>
                <Steps/>

                <SixthSection/>

                <Review/> */}

                
                

                </div>

                </section>


        </div>
        </div>
    </div>
    )
}

export default HomePage
