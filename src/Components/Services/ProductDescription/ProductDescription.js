import React,{useEffect} from 'react'
import './ProductDescription.css'
import AOS from 'aos'
import 'aos/dist/aos.css'


function ProductDescription() {

  useEffect(()=>{
    AOS.init()
  })
    return (
        <div class="productDesc_slice"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-once="true"
            data-aos-duration="500"
                
         >
        <div class="productDesc_wrapper">
          <div class="productDesc_innerWrapper">
            <div class="productDesc_LabelTitleText productDesc_alignCenter" style={{opacity: 1}}
            
            >
              <div class="productDescLabel productDescLabel_style productDescLabel_color"
              
                 
              >
                <div
                  
                >
                  <div
                  
                    style={{position: "relative", display: "inline-block", opacity: 1, transform: "perspective(1000px) translate3d(0px, 0px, 0px)"}}
              
                    class="">What is a Folio?  </div>
                 
                </div>
              </div>
              <div
                class="productDescText productDescTextWrapper productDescText_style  productDescText_smallFont productDescText_color">
                <div
                  style={{position: "relative", display: "inline-block", opacity: 1, transform: "perspective(1000px) translate3d(0px, 0px, 0px)"}}
                  
                  class="">FOLIO, an open source project, aims to reimagine library software through a unique collaboration of libraries, developers and vendors. 
                  It moves beyond the traditional library management system to a new paradigm, where apps are built on an open platform,
                   providing libraries more choice and delivering new services to users.

                       The FOLIO platform includes core functionality found in current library management systems and is extensible, 
                       allowing libraries to meet ever changing needs.</div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProductDescription
