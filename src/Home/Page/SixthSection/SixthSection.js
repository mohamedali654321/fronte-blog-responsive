import React,{useEffect,useState} from 'react'
import SmallCard from '../SmallCard/SmallCard';
import './SixthSection.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function SixthSection() {
  const [visible, setVisible] = useState(6);
  const showMoreItems = () => {
    setVisible(prevValue =>
        prevValue + 6

    );

}
useEffect(()=>{
  AOS.init()
})
    const card=[
        {
            title:"Gatsby",
            text:"Gatsby is a blazing fast modern site generator for React.",
            imgSrc:"./images/singleProduct/Gatsby-Monogram_dae6f92141.svg"
        },
        {
            title:"Vue.js",
            text:" Vue.js is an open-source Model–view–viewmodel JavaScript framework for building user interfaces and single-page applications.",
            imgSrc:"./images/singleProduct/vuejs-logo_1c5c570e34.svg"
        },

        {
            title:"Nuxt.js",
            text:"Nuxt.js is a free and open-source web application framework based on Vue.js, Node.js, Webpack, and Babel.js.",
            imgSrc:"./images/singleProduct/nuxt_2021_e30c8bb5e6.svg"
        },

        {
            title:"Next.js",
            text:"Next.js is a minimalistic framework for server-rendered React applications as well as statically exported React apps.",
            imgSrc:"./images/singleProduct/Nextjs-logo_4e05f3a597.svg"
        },

        {
            title:"React",
            text:"React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
            imgSrc:"./images/singleProduct/React-logo_663c3a4121.svg"
        },

        {
            title:"Angular",
            text:"Angular is a platform for building mobile and desktop web applications.",
            imgSrc:"./images/singleProduct/angular_d2355b8666.png"
        },

        



    ];
    return (
                
        <div
        class="SixthSection_intro SixthSection_slice SixthSection_GradientHeader SixthSectionContainer">
        <div class="SixthSection_gradient SixthSection_gradientRight SixthSectionContainer"
        
        >
          <div class="SixthSectionWrapper SixthSectionContainer_position SixthSectionWrapper_style"
          
          >
            <div class="SixthSection_mobileInnerWrapper SixthSection_innerWrapper"
            
            >
              <div
                class="SixthSectionLabelTitleText SixthSectionLabelTitleText_width SixthSectionLabelTitleText_withGradient SixthSectionLabelTitleText_center"
                style={{opacity: 1}}>
                <div class="SixthSectionLabel SixthSectionLabel_style SixthSectionLabel_color">
                  <div
                   data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-once="true"
                  >
                    <div
                   
           
                      style={{position: "relative", display: "inline-block", opacity: 1, transform: "perspective(1000px) translate3d(0px, 0px, 0px)"}}
                      class="">Integrations</div>
                  </div>
                </div>
                <h1
                 data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="300"
            data-aos-once="true"
                  class="SixthSectionTitle SixthSectionTitle_style SixthSectionTitle_fontSize SixthSectionTitle_color">
                  <div class="styles_titleContainer__2TSrx"><span
                  
                  >
                      <div
                        style={{position: "relative", display: "inline-block", opacity: 1, transform: "perspective(1000px) translate3d(0px, 0px, 0px)"}}
                        class="">Choose any technology for your JAMstack app.</div>
                      
                    </span></div>
                </h1>
                <div
                data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="400"
            data-aos-once="true"
                  class="SixthSectionText  SixthSectionText_style  SixthSectionText_fontSize SixthSectionText_color"
                 
                  >
                  <div
                    style={{position: "relative", display: "inline-block", opacity: 1, transform: "perspective(1000px) translate3d(0px, 0px, 0px)"}}
                    class=""
                    
                    >Strapi is front-end agnostic and can be used with your preferred static site generator or framework.</div>
                  
                </div>
                <div style={{opacity: 1, transform: "perspective(1000px)"}}>
                  <div class="SixthSectionSelectContainer">
                    <div class="SixthSectionMultiSelect"
                    data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="500"
            data-aos-once="true"
                    >
                      <div class="SixthSectionSelect_buttonContainer SixthSectionSelect_buttonContainer_style">
                        <div class="SixthSectionButton SixthSectionSelect_bg SixthSectionSelect_buttonWrapper">
                          <div class="SixthSectionBackground_button SixthSectionSelect_bg"
                            style={{transform: "perspective(800px)"}}>
                           
                          </div><button
                            class="SixthSectionButton_link SixthSectionButton_font SixthSectionButton_multi">
                            <div
                              class="SixthSectionText SixthSectionSelectLabel SixthSectionSelectLabel_fontSize SixthSectionSelectLabel_color">
                              Frontend Frameworks</div><svg fill="none" viewBox="0 0 10 6"
                              class="SixthSectionSelectArrow">
                              <path fill="#74E4A2" d="M5.06 5.783L.82.299h8.481l-4.24 5.484z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div class="SixthSectionListContainer"
                        style={{opacity: 0, visibility: "hidden", transform: "translate(0%, -20%) translate3d(0px, 0px, -50px)", zIndex: 0}}>
                        <div class="SixthSectionList_background"
                          style={{transformOrigin: "50% 0%" , transform: "scale(1, 0)"}}></div>
                        <ul class="SixthSectionList_options" role="listbox" style={{opacity: 0}}>
                          <li
                            class="SixthSectionText SixthSectionListItem_option SixthSectionListItem_fontSize SixthSectionText_color"
                            role="option" tabindex="0">Frontend Frameworks</li>
                          <li
                            class="SixthSectionText SixthSectionListItem_option SixthSectionListItem_fontSize SixthSectionText_color"
                            role="option" tabindex="0">Static Site Generator</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="SixthSectionTetris SixthSectionTetris_decoration SixthSectionTetris_color"><svg fill="none"
                viewBox="0 0 300 300" class="SixthSection_svg_style" style={{transform:"rotate(0deg)"}}>
                <g clip-path="url(#variant-1_svg__clip0)">
                  <path class="" fill="#0e8d54"
                    d="M100 200H0v100h100V200zm100-100H100v100h100V100zM300 0H200v100h100V0z"></path>
                  <g >
                    <path class="" fill="#13bb70" d="M200 0H100v100h100V0z">
                    </path>
                  </g>
                </g>
                <defs>
                  <clippath id="variant-1_svg__clip0">
                    <path fill="#fff" d="M0 0h300v300H0z"></path>
                  </clippath>
                  <filter id="variant-1_svg__filter0_d" width="140" height="140" x="84" y="-12"
                    color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                    <feflood flood-opacity="0" result="BackgroundImageFix"></feflood>
                    <fecolormatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
                    </fecolormatrix>
                    <feoffset dx="4" dy="8"></feoffset>
                    <fegaussianblur stdDeviation="10"></fegaussianblur>
                    <fecolormatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></fecolormatrix>
                    <feblend in2="BackgroundImageFix" result="effect1_dropShadow"></feblend>
                    <feblend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feblend>
                  </filter>
                </defs>
              </svg></div>
          </div>
        </div>
        <div class="SixthSectionCardsWrapper SixthSection_slice SixthSectionWrapper_style">
          <div class="SixthSectionCardsWrapper SixthSection_slice SixthSection_innerWrapper">
            <div class="SixthSectionCards_Grids SixthSectionCards_gaps  " style={{opacity: 1}}>

            {
                card.slice(0, visible).map((card,index)=>(

                     <SmallCard
                         title={card.title}
                         text={card.text}
                         image={card.imgSrc}
                         index={card.index}
                     />

                ))
            }
              
              
              
             
            </div>
          </div>
        </div>


        <div class="SixthSectionMoreContainer"
         data-aos="zoom-in"
            data-aos-offset="200"
            
            data-aos-once="true"
        
        >
          <div class="SixthSectionMoreWrapper SixthSectionSelect_buttonContainer_style">
            <div class="SixthSectionButton SixthSectionSelect_bg">
              <div class="SixthSectionBackground_button SixthSectionSelect_bg" style={{transform: "perspective(800px)"}}>
            
              </div>
              <button
               class="SixthSectionButton_link SixthSectionButton_font"
               onClick={showMoreItems}
               >See more<svg
                  class="SixthSectionMore_SmallArrow SixthSectionMore_SmallArrow_style SixthSectionMore_SmallArrow_color "
                  viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 9.4l3.2-3.8L5 1.8a1 1 0 01-.2-.7c0-.3 0-.6.2-.7.4-.4.9-.4 1.2 0L10 4.9c.3.4.3 1 0 1.4L6 10.8c-.3.4-.8.4-1.2 0-.3-.4-.3-1 0-1.4z"
                    fill="#74E4A2"></path>
                  <path d="M1 4.7a.9.9 0 100 1.8V4.7zm7.4 0H1v1.8h7.4V4.7z" fill="#74E4A2"></path>
                </svg></button>
            </div>
          </div>
        </div>
      </div>
    )
}
