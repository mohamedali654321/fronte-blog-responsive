import React,{useEffect} from 'react'
import './FristSection.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
function FristSection() {

  useEffect(()=>{
    AOS.init()
  })
    return (
      
      <div class="fristSection_container"
      
      
      >
<div
class="fristSection_gradient fristSection_slice fristSection_TextNextToImage fristSection_gradientLeft fristSection_container">
<div class="fristSectionWrapper fristSection_gradientHeaderWrapper fristSectionWrapper_style">
  <div
    class="fristSection_mobileInnerWrapperLeftOnly fristSection_mobileInnerWrapper  fristSection_innerWrapper">
    <div class="fristSection_contentWrapper" style={{opacity: 1}}
    
    >
      <div class="fristSection_textWrapper"
       data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000"
     data-aos-once="true"
     
      >
        <div class="fristSectionLabelTitleText fristSectionLabelTitleText_font" style={{opacity: 1}}>
          <h1
            class="fristSectionTitle fristSectionTitle_style fristSectionTitle_larg fristSectionTitle_color">
            <div class="fristSectionTitleContainer"
           data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000"
     data-aos-once="true"
     
            >
            <span>
                <div
                  style={{position: "relative" ,display: "inline-block", opacity: 1, transform:" perspective(1000px) translate3d(0px, 0px, 0px)",bottom:"40px" ,maxWidth:"20px"}}
                  class="">Better Performance</div>
                
              </span>
              </div>
          </h1>
          <div
            class="fristSectionText fristSectionText_position fristSectionText_style  fristSectionTitle_larg fristSectionText_color"
            
         
            >
            <div
           
              style={{position: "relative", display: "inline-block", opacity: 1, transform: "perspective(1000px) translate3d(0px, 0px, 0px)"}}
              class=""
              data-aos="fade-up"
            data-aos-easing="linear"
     data-aos-duration="1500"
     data-aos-once="true"
     
           
              
              >You can now generate pages at deployment time and serve them over a CDN.
               With headless CMS and a Static Site Generator, 
              only the most relevant parts of the stack are ever running when a user makes a request,
               speeding the whole process by reducing the number of steps.</div>
           
            
            
            
            
          </div>
        </div>
      </div>
      <div class="fristSection_imageWrapper" style={{opacity: 1, transform: "perspective(1000px)"}}
      
      
      >
        <div class="fristSection_imageInnerWrapper">
          <div class="fristSection_imageRatio" style={{paddingBottom:"90.67415730337078%"}}><img
              class=" fristSection_image "
              data-aos="flip-left"
              data-aos-duration="1500"
              data-aos-once="true"
              data-aos-offset="200"
              
              src="./images/singleProduct/static-performance_75a92c41d7.svg"
              alt="Illustration of a great performance score for a strapi website"
              style={{opacity: 1, visibility: "inherit"}}/></div>
        </div>
      </div>
    </div>
  </div>
  <div class="fristSection_Tetris_icon fristSection_Tetris_decoration fristSection_Tetris_color"><svg fill="none"
      viewBox="0 0 300 300" class="" style={{transform:"rotate(0deg)"}}>
      <path  fill="#7A4FF3"
        d="M300 100H200v100h100V100zM200 200H100v100h100V200z"></path>
      <g >
        <path class="variant-3_svg__tetris-light-path" fill="#956FFF" d="M200 100H100v100h100V100z">
        </path>
      </g>
      <defs>
        <filter id="variant-3_svg__filter0_d" width="140" height="140" x="84" y="88"
          color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
          <feflood flood-opacity="0" result="BackgroundImageFix"></feflood>
          <fecolormatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
          </fecolormatrix>
          <feoffset dx="4" dy="8"></feoffset>
          <fegaussianblur stdDeviation="10"></fegaussianblur>
          <fecolormatrix values="0 0 0 0 0.0721875 0 0 0 0 0.0798437 0 0 0 0 0.0875 0 0 0 0.3 0">
          </fecolormatrix>
          <feblend in2="BackgroundImageFix" result="effect1_dropShadow"></feblend>
          <feblend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feblend>
        </filter>
      </defs>
    </svg></div>
</div>
</div>
<div class="fristSection_Triangle_decoration fristSection_Triangle_position">

<div class="fristSection_Triangle fristSection_TriangleWrapper fristSection_Triangle_top-right">
  <div class="fristSection_TriangleInnerWrapper">
    <div class="fristSection_Triangle_img">
      <div class="fristSection_imageRatio" style={{paddingBottom:"100%"}}>
      {/* <img
          class=" fristSection_image "
          src="./images/singleProduct/triangle.svg" alt="triangle"
          style={{opacity: 1, visibility: "inherit"}}/> */}
          </div>
    </div>
  </div>
</div>



</div>
</div>

  
    )
}

export default FristSection
