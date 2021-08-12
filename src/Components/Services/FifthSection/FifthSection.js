import React,{useEffect} from 'react'
import CardPush from '../CardPush/CardPush'
import './FifthSection.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
function FifthSection() {
  useEffect(()=>{
    AOS.init()
  })
    return (
      
      <div>
      <div class="fifthSectionContainer">
        <div
          class="fifthSection_gradient fifthSection_slice fifthSection_TextNextToImage fifthSection_gradient-left fifthSectionContainer">
          <div class="fifthSectionWrapper fifthSection_gradientHeaderWrapper fifthSectionWrraper_style">
            <div
              class="fifthSection_mobileInnerWrapperLeftOnly fifthSection_mobileInnerWrapper fifthSection_innerWrapper">
              <div class="fifthSection_contentWrapper" style={{opacity: 1}}>
                <div class="fifthSection_textWrapper"
                 data-aos="zoom-in-up"
            data-aos-offset="200"
            
            data-aos-once="true"
                 
            
                >
                  <div class="fifthSectionLabelTitleText fifthSectionLabelTitleText_fontSize" style={{opacity: 1}}>
                    <h1
                   
                      class="fifthSectionTitle fifthSectionTitle_style fifthSectionTitle_fontSize fifthSectionTitle_color">
                      <div class="fifthSection_titleContainer"><span>
                          <div
                            style={{position: "relative", display: "inline-block", opacity: 1, transform: "perspective(1000px) translate3d(0px, 0px, 0px)"}}
                            class="">Independent marketing team</div>
                          
                        </span></div>
                    </h1>
                    <div
                      class="fifthSectionText  fifthSectionText_style  fifthSectionTitle_fontSize fifthSectionText_color">
                      <div
                        style={{position: "relative", display: "inline-block", opacity: 1, transform: "perspective(1000px) translate3d(0px, 0px, 0px)"}}
                        class="">Marketers and content editors are able to not only modify the existing pages 
                        but also autonomously build new pages using components.</div>
                      
                    </div>
                    <ul class="fifthSectionLinks"
                      data-aos="zoom-in"
            data-aos-offset="200"
            
            data-aos-once="true"
                    >
                      <li class="fifthSectionLink">
                        <div class="fifthSectionLink_button  fifthSectionLink_buttonContainer"
                          style={{opacity: 1, transform: "perspective(1000px)"}}>
                          <div class="fifthSectionLink_buttonStyle fifthSectionLink_button_bg">
                            <div class="fifthSectionLink_background fifthSectionLink_button_bg"
                          
                              style={{transform: "perspective(800px)"}}>
                              
                              
                            </div><a class="fifthSectionLink_buttonLink fifthSectionLink_buttonFont"
                            
                             alt=""
                              href="https://strapi.io/features/content-types-builder">Learn more</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="fifthSection_imageWrapper" style={{opacity: 1, transform: "perspective(1000px)"}}>
                  <div class="fifthSection_imageWrapper">
                    <div class="fifthSection_imageRatio" style={{paddingBottom:"70.34782608695652%"}}>
                    <img
                     data-aos="zoom-in-down"
            data-aos-offset="200"
            
            data-aos-once="true"
            data-aos-duration="1500"
                        class=" fifthSection_image  "
                        src="./images/singleProduct/content-manager-optim_0c5b002801.png"
                        style={{opacity: 1, visibility: "inherit"}}/>
                        </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="fifthSectionTetris fifthSectionTetris_decoration fifthSectionTetris_color"><svg fill="none"
                viewBox="0 0 300 300" class="fifthSectionTetris_svg" style={{transform:"rotate(0deg)"}}>
                <path  fill="#7A4FF3"
                  d="M300 200H200V100h100v100zM200 100H100V0h100v100z"></path>
                <path  fill="#956FFF" d="M100 300H0V200h100v100z">
                </path>
                <g >
                  <path  fill="#956FFF" d="M200 200H100V100h100v100z">
                  </path>
                </g>
                <defs>
                  <filter id="variant-0_svg__filter0_d" width="140" height="140" x="84" y="88"
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
      </div>
      <CardPush/>
    </div>
                
     

    )
}

export default FifthSection
