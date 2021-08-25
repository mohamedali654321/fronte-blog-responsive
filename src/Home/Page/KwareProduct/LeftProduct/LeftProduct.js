import React from "react";
import './LeftProduct.css'
function LeftProduct() {
  return (
    <div
      className="
            Left_slice
            LeftTextNextToImage
            Left_maxWidth
          "
    >
      <div
        className="
              Leftwrapper_maxWidth
              Leftwrapper_right
              Leftwrapper
            "
      >
        <div className="LeftContent" style={{opacity: 1}}>
          <div className="LeftUpper "></div>
          <div className="LeftLabelTitleText" style={{opacity: 1}}>
            <h1
              className="
                    LeftTitle
                    LeftTitleWrapper
                    LeftTitleWrapper_fontSize
                    
                  "
            >
              <div className="LeftTitleContainer">
                <span>
                  <div
                    style={{
                          position: "relative",
                          display: "inline-block",
                          opacity: 1,
                          transform: "perspective(1000px) translate3d(0px, 0px, 0px)"
                            
                    }}
                   
                  >
                    Fields
                  </div>
                </span>
              </div>
            </h1>
            <div
              className="
                    LeftText
                    
                    LeftTextWrapper
                    
                    LeftTextWrapper_fontsize
                    
                  "
            >
              <div
                style={{
                      position: "relative",
                      display: "inline-block",
                      opacity: 1,
                      transform: "perspective(1000px) translate3d(0px, 0px, 0px)"
                    }}
                
              >
                Writing content consists of filling up fields, which are meant
                to contain specific content (e.g. text, numbers, media, etc.).
                Easily configure them through the Content-Types Builder.
              </div>
            </div>
            <ul className="LeftLinks">
              <li className="LeftLink">
                <div
                  className="
                        LefButton
                        
                        LefButton_small
                        LefButton_fontSize
                        LefButtonContainer
                      "
                  style={{opacity: 1, transform: "perspective(1000px)"}}
                >
                  <div className="LefButtonWrapper LefButtonWrapper_color">
                    
                    <div
                      className="LefButtonBackground LefButtonWrapper_color"
                      style={{transform: "perspective(800px)"}}
                    >
                     
                    </div>
                    <a
                      id="201"
                      className="
                            LefButtonLink
                            LefButton_fontSize
                          "
                      target="_blank"
                      rel="noopener"
                      alt=""
                      href="https://strapi.io/documentation/v3.x/guides/registering-a-field-in-admin.html#introduction"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="Left_imageWrapper">
          <div style={{opacity: 1, transform: "perspective(1000px)"}}>
            <div className="Left_imageInnerWrapper">
              <div className="Left_imageRatio" style={{paddingBottom: "90.1321%"}}>
                <img
                  className="
                        
                        Left_image
                        
                        
                      "
                  src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Terminal_1_6e8d5110ac_19a5a335d7.svg"
                  alt="content types builder strapi"
                  style={{opacity: 1, visibility: "inherit"}}
                />
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default LeftProduct;