import React,{useEffect} from 'react'
import './SingleProductHero.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
function SingleProductHero() {

  useEffect(()=>{
    AOS.init()
  })
    return (
        <div class="productHero productHero_withIntro">
        <div class="productHeroContainer">
          <div class="productHero_background">
            <div class="productHero_heroBackgroundTop productHero_smallAssets">
              <div class="productHero_ratio_img" style={{paddingBottom:"78.57142857142857%"}}><img
                  class=" productHero_img  "
                  src="./images/singleProduct/top-bg-right_1771b8fe0a.svg"
                  alt="Geometric shapes" style={{opacity: 1, visibility: "inherit"}}/></div>
            </div>
            <div class="productHero_heroBackgroundBottom">
              <div class="productHero_ratio_img" style={{paddingBottom:"122.22222222222223%"}}><img
                  class=" productHero_img "
                  src="./images/singleProduct/Triangle-hero-use-cases_34306f71dc.svg"
                  alt="" style={{opacity: 1, visibility: "inherit"}}/>
                  </div>
            </div>
          </div>
          <div class="productHeroWrapper productHeroWrapper_style"
         
          >
            <div class="productHeroInnerWrapper"

          data-aos="zoom-in"              
          data-aos-once="true"
          
            >
              <div class="" style={{opacity: 1}}>
                <div class="productHeroLabel productHeroLabel_style productHeroLabel_color"
            
                >
                  <div>
                    <div
                      style={{position: "relative", display: "inline-block", opacity: 1, transform: "perspective(1000px) translate3d(0px, 0px, 0px)"}}
                      class="">Folio</div>
                   
                  </div>
                </div>
                <h1
                  class="productHeroTitle productHeroTitle_style productHeroTitle_extra-large productHeroTitle_color"
                 
                  >
                  <div class="productHeroTitleContainer"><span>
                      <div
                        style={{position: "relative", display: "inline-block", opacity: 1, transform: "perspective(1000px) translate3d(0px, 0px, 0px)"}}
                        class="">The Future of Libraries is Open </div>
                    
                    
                    </span></div>
                </h1>
                <h2
                  class="productHeroText styles_productHeroText_rich productHeroText_style productHeroText_width  productHeroTitle_color"
            
                  >
                  <div
                    style={{position: "relative", display: "inline-block", opacity: 1, transform: "perspective(1000px) translate3d(0px, 0px, 0px)"}}
                    class=""
                    
                    
                    >FOLIO is a collaboration of libraries, developers and vendors building an open source library services platform.
                     It supports traditional resource management functionality and can be extended into other institutional areas.</div>
                
                </h2>
                <ul class="productHeroText_links"

          
                
                >
                  <li class="productHeroText_link">
                    <div class="productHeroButton productHeroButtonContainer"
                      style={{opacity: 1, transform: "perspective(1000px)"}}>
                      <div class="productHeroButtonWrapper productHeroButton_purple"
                     data-aos="zoom-in"              
          data-aos-once="true"
          data-aos-offset="200"
        data-aos-delay="500"
        
     data-aos-duration="1100"
                      >
                        <div class="productHeroButton_background productHeroButton_purple"
                          style={{transform: "perspective(800px)"}}>
                         
                        </div><a class="productHero_buttonLink productHero_buttonStyle" target="_blank" alt=""
                          href="https://strapi.io/documentation/3.0.0-beta.x/getting-started/quick-start.html">Get Started</a>
                          
                      </div>
                    </div>
                  </li>
                  <li class="productHeroText_link">
                    <div class="productHeroButton productHeroButtonContainer"
                      style={{opacity: 1, transform: "perspective(1000px)"}}>
                      <div class="productHeroButtonWrapper productHeroButton_yellow"

         data-aos="zoom-in"              
          data-aos-once="true"
          data-aos-offset="200"
        data-aos-delay="700"
        
     data-aos-duration="1900"
                      
                      >
                      
                        <div class="productHeroButton_background productHeroButton_yellow"
                          style={{transform: "perspective(800px)"}}>
                          
                        </div><a class="productHero_buttonLink productHero_buttonStyle" alt=""
                          href="https://strapi.io/user-stories/societe-generale-e-training-platform">Read case
                          study</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="productHerovisualWrapper"
          style={{perspective: "1px", transform: "translate(0%, -11.9736%) translate3d(0px, 0px, 0px)"}}>
          <div class="productHero_heroVisual">
            <div class="productHero_ratio_img" style={{paddingBottom:"112.86795626576955%"}}><img
                class=" productHero_img "
                src="./images/singleProduct/Screens_(1)_5d755a4658.png"
                alt="Illustration of Performance and SEO loader" style={{opacity: 1, visibility: "inherit"}}/></div>
          </div>
        </div>
        <div class="productHero_maxWidth">
          <div class="productHeroWrapper_style">
            <div class="productHeroInnerWrapper">
              <div
               data-aos="zoom-in"              
              data-aos-once="true"
              data-aos-offset="200"
              data-aos-delay="200"
                class="productHeroText styles_productHeroText_rich productHero_descriptionText productHero_descriptionText_small productHero_descriptionText_color">
                <p>
                <strong>FOLIO</strong>, an open source project, aims to reimagine library software through a unique collaboration of libraries, developers and vendors. 
                It moves beyond the traditional library management system to a new paradigm, 
                where apps are built on an open platform, providing libraries more choice and delivering new services to users
                </p>
              </div>
            </div>
            <br/>
            
            <div class="productHeroSeparator"></div>
           
             
           
          </div>
        </div>
      </div>
    )
}

export default SingleProductHero
