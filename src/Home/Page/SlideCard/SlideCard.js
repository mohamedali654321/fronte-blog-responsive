import React,{useEffect} from "react";
import './SlideCard.css'

import AOS from 'aos'
import 'aos/dist/aos.css'
function SlideCard(props) {

  useEffect(()=>{
    AOS.init()
  })
  return (
    <div
      class="reviewCardContainer"
      data-aos-delay="200"
         data-aos-duration="1000"
          data-aos-once="true"
          data-aos="zoom-in-right"
      style={{
        
        opacity: 1,
        transform: "translate(0px, 0px)",
      }}
    >
      <a
        class=" reviewCardWithArrowLink reviewCardWrapper reviewCardWrapperLink"
        
        href="/"
        // style={{ touchAction: "pan-y" }}
      >
        <div
          class="reviewCard_backgroundContainer"
        //   style={{ touchAction: "pan-y" }}
        >
          <div
            class=" reviewCard_background reviewCard_type1"
            style={{ touchAction: "pan-y" }}
          ></div>
        </div>
        <div class="reviewCard_innerWrapper" style={{ touchAction: "pan-y" }}>
          <div class="reviewCard_content" style={{ touchAction: "pan-y" }}>
            <div
              class="reviewCard_customerContent"
              style={{ touchAction: "pan-y" }}
            >
              <div class="reviewCard_picture" style={{ touchAction: "pan-y" }}>
                <div
                  class=" reviewCardImg_ratio reviewCardImg_fluid"
                  style={{ touchAction: "pan-y" }}
                >
                  <img
                    class=" styles_Img__2JZ2e reviewCardImage reviewCardImage_contain reviewCardImage_left"
                    src={props.image}
                    
                    style={{
                      opacity: 1,
                      visibility: "inherit",
                      touchAction: "pan-y",
                    }}
                  />
                </div>
              </div>
              <div class="reviewCardText" style={{ touchAction: "pan-y" }}>
                <p
                  class=" reviewCardTextWrapper reviewCardText_description reviewCardText_fontSize reviewCardText_color"
                  style={{ touchAction: "pan-y" }}
                >
                  {props.text}
                </p>
                <div
                  class=" reviewCard_author styles_author__3Xq5h"
                  style={{ touchAction: "pan-y" }}
                >
                  <div
                    class=" reviewCard_authorCirclePicture reviewCard_authorPicture"
                    style={{ touchAction: "pan-y" }}
                  >
                    <div
                      class="reviewCard_authorPictureStyle"
                      style={{ touchAction: "pan-y" }}
                    >
                      <div
                        class="reviewCardImg_ratio"
                        style={{
                          paddingBottom: "100%",
                          touchAction: "pan-y",
                        }}
                      >
                        <img
                          class=" styles_Img__2JZ2e reviewCardImage reviewCard_authorPictureCover reviewCard_authorPictureCenter"
                          src={props.authorImg}
                          
                          style={{
                            opacity: 1,
                            visibility: "inherit",
                            touchAction: "pan-y",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="reviewCardAuthor_content"
                    style={{ touchAction: "pan-y" }}
                  >
                    <span
                      class="reviewCardAuthor_info"
                      style={{ touchAction: "pan-y" }}
                    >
                      <span
                        class=" reviewCardTextWrapper reviewCardAuthor_name reviewCardAuthor_fontSize reviewLabel_color"
                        style={{ touchAction: "pan-y" }}
                      >
                        {props.authorName}
                      </span>
                      <span
                        class=" reviewCardTextWrapper reviewAuthorCompany reviewCardAuthor_fontSize reviewCardText_color"
                        style={{ touchAction: "pan-y" }}
                      >
                        , {props.authorJob}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <br/>
      <br/>
      
    </div>
  );
}

export default SlideCard;
