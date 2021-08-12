import React,{useEffect} from 'react'
import './ThirdSection.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function ThirdSection() {

  useEffect(()=>{
    AOS.init()
  })
    return (
        <div>
        <div class="thirdSectionContainer">
          <div
            class="thirdSection_gradient thirdSection_slice thirdSection_TextNextToImage thirdSection_gradient-left thirdSectionContainer">
            <div class="thirdSectionWrapper thirdSectionWrapper_gradientHeaderWrapper thirdSectionWrapper_style">
              <div
                class="thirdSection_mobileInnerWrapperLeftOnly thirdSection_mobileInnerWrapper thirdSection_innerWrapper">
                <div class="thirdSection_contentWrapper" style={{opacity: 1}}>
                  <div class="thirdSection_textWrapper"
            data-aos="zoom-in-up"
            data-aos-offset="200"
          
            data-aos-once="true"
            data-aos-duration="500"
                  
                  >
                    <div class="thirdSectionLabelTitleText thirdSectionLabelTitleText_fontSize" style={{opacity: 1}}>
                      <h1
                                      data-aos="zoom-in"
           
                        class="thirdSectionTitle thirdSectionTitle_style thirdSectionTitle_fontSize thirdSectionTitle_color">
                        <div class="thirdSection_titleContainer"><span
                         data-aos-offset="200"
            
            data-aos-once="true"
            data-aos-duration="500"
                        >
                            <div
            
                              style={{position: "relative", display: "inline-block", opacity: 1, transform: "perspective(1000px) translate3d(0px, 0px, 0px)"}}
                              class="">Scale your traffic, not your costs  </div>
                            
                          </span></div>
                      </h1>
                      <div
                        class="thirdSectionText  thirdSectionText_style  thirdSectionTitle_fontSize thirdSectionText_color">
                        <div
                          style={{position: "relative", display: "inline-block", opacity: 1, transform: "perspective(1000px) translate3d(0px, 0px, 0px)"}}
                          class="">Because your files are served through CDN, when your app gets more requests, 
                          the CDN easily compensates for higher traffic.</div>
                        
                      </div>
                    </div>
                  </div>
                  <div class="thirdSection_imageWrapper" style={{opacity: 1, transform: "perspective(1000px)"}}>
                    <div class="thirdSection_imageInnerWrapper">
                      <div class="thirdSection_imageRatio" style={{paddingBottom:"95.12937595129375%"}}><img
                             data-aos="zoom-in-left"
            data-aos-offset="200"
            
            data-aos-once="true"
            data-aos-duration="700"
                          class=" thirdSection_image "
                          src="./images/singleProduct/static-scaling_04a7a67177.svg"
                          alt="More users, more CDNs to absorb scaling" style={{opacity: 1, visibility: "inherit"}}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="thirdSectionTetris thirdSectionTetris_decoration thirdSectionTetris_color"><svg fill="none"
                  viewBox="0 0 300 300"  style={{transform:"rotate(0deg)"}}>
                  <g clip-path="">
                    <path  fill="#7A4FF3" d="M100 100h100v200H100V100z">
                    </path>
                    <g filter="">
                      <path  fill="#956FFF" d="M100 0h100v100H100V0z">
                      </path>
                    </g>
                    <path  fill="#956FFF" d="M0 100h100v100H0V100z">
                    </path>
                  </g>
                  <defs>
                    <clippath id="variant-2_svg__clip0">
                      <path fill="#fff" d="M0 0h300v300H0z"></path>
                    </clippath>
                    <filter id="variant-2_svg__filter0_d" width="140" height="140" x="84" y="-12"
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
          <div class="thirdSectionTriangle_decoration thirdSectionTriangle_style">
            <div class="thirdSectionTriangle thirdSectionTriangleWrapper thirdSectionTriangle_top-right">
              <div class="thirdSectionTriangleInnerWrapper">
                <div class="thirdSectionTriangle_img">
                  <div class="thirdSection_imageRatio" style={{paddingBottom:"100%"}}>
                  {/* <img
                      class=" thirdSection_image "
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
