import React,{useEffect} from 'react'
import './SecondSection.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
function SecondSection() {

  useEffect(()=>{
    AOS.init()
  })
    return (
        <div>
        <div class="secondSectionContainer">
          <div
            class="secondSection_gradient secondSection_slice secondSection_TextNextToImage secondSection_gradientLeft secondSectionContainer">
            <div class="secondSectionWrapper secondSection_gradientHeaderWrapper secondSectionWrapper_style">
              <div
                class="secondSection_mobileInnerWrapperLeftOnly secondSection_mobileInnerWrapper secondSection_innerWrapper">
                <div class="secondSection_contentWrapper" style={{opacity: 1}}
          
                >
                  <div class="secondSection_textWrapper"
                                   data-aos="fade-up"
                                   data-aos-easing="linear"
                                   data-aos-duration="1000"
                                   data-aos-once="true"
                                   
                  
                  >
                    <div class="secondSectionLabelTitleText secondSectionLabelTitleText_font" style={{opacity: 1}}>
                      <h1
                        class="secondSectionTitle secondSectionTitle_style secondSectionTitle_larg secondSectionTitle_color">
                        <div class="secondSectionTitleContainer"><span>
                            <div
                            
                              style={{position: "relative", display: "inline-block", opacity: 1, transform: "perspective(1000px) translate3d(0px, 0px, 0px)"}}
                              data-aos="fade-up"
                                   data-aos-easing="linear"
                                   data-aos-duration="1000"
                                   data-aos-once="true"
                                   
                              >Higher Security</div>
                            
                          </span></div>
                      </h1>
                      <div
                        class="secondSectionText secondSectionText_position  secondSectionText_style  secondSectionTitle_larg secondSectionText_color">
                        <div
               
                          style={{position: "relative", display: "inline-block", opacity: 1, transform: "perspective(1000px) translate3d(0px, 0px, 0px)"}}
                          class="">Stop worrying about vulnerabilities. 
                          With a Headless CMS, you have no need for a server-side language to be executed,
                           thus reducing your attack surface area and the risk of malware code injection.</div>
                        
                      </div>
                    </div>
                  </div>
                  <div class="secondSection_imageWrapper" style={{opacity: 1, transform: "perspective(1000px)"}}>
                    <div class="secondSection_imageInnerWrapper">
                      <div class="secondSection_imageRatio" style={{paddingBottom:"85.20625889046943%"}}><img
                          class=" secondSection_image "
                                        data-aos="zoom-in-left"
                                        data-aos-offset="200"
                                   data-aos-duration="1500"
                                   data-aos-once="true"
                                   
                                   
                          src="./images/singleProduct/static-security_a459b4fa87.svg"
                          style={{opacity: 1, visibility: "inherit"}}/></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="secondSectionTetris_icon secondSectionTetris_decoration secondSectionTetris_color"><svg fill="none"
                  viewBox="0 0 300 300" style={{transform:"rotate(0deg)"}}>
                  <g clip-path="url(#variant-1_svg__clip0)">
                    <path class="variant-1_svg__tetris-dark-path" fill="#7A4FF3"
                      d="M100 200H0v100h100V200zm100-100H100v100h100V100zM300 0H200v100h100V0z"></path>
                    <g filter="url(#variant-1_svg__filter0_d)">
                      <path class="variant-1_svg__tetris-light-path" fill="#956FFF" d="M200 0H100v100h100V0z">
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
          <div class="secondSection_Triangle_decoration secondSection_Triangle_position">
            <div class="secondSection_Triangle secondSection_TriangleWrapper  secondSection_Triangle_top-right ">
              <div class="secondSection_TriangleInnerWrapper">
                <div class="secondSection_Triangle_img">
                  <div class="secondSection_imageRatio" style={{paddingBottom:"100%"}}>
                  {/* <img
                      class="styles_Img__2JZ2e secondSection_image styles_cover__iPq3e styles_center__1laxx"
                      src="./images/singleProduct/triangle.svg" alt="triangle"
                      style={{opacity: 1, visibility: "inherit"}}/> */}
                      </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    )
}

export default SecondSection
