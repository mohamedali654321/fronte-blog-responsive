import React,{useEffect} from 'react'
import './ReviewCard.css'

import AOS from 'aos'
import 'aos/dist/aos.css'
function ReviewCard(props) {
  useEffect(()=>{
    AOS.init()
  })


    return (
        <div class="reviewCardContainer"
         data-aos-delay="200"
         data-aos-duration="1000"
          data-aos-once="true"
          data-aos="zoom-in-right"
        
        >
        <a
          class=" reviewCardWithArrowLink reviewCardWrapper reviewCardWrapperLink"
          
          href="https://strapi.io/user-stories/societe-generale-e-training-platform"
        >
          <div class="reviewCard_backgroundContainer">
            <div class=" reviewCard_background reviewCard_type1"></div>
          </div>
          <div class="reviewCard_innerWrapper">
            <div class="reviewCard_content">
              <div class="reviewCard_customerContent">
                <div class="reviewCard_picture">
                  <div class=" reviewCardImg_ratio reviewCardImg_fluid">
                    <img
                      class="  reviewCardImage reviewCardImage_contain reviewCardImage_left"
                      src={props.image}
                      alt="Societe Generale Logo "
                      style={{
                        opacity: 1,
                        visibility: "inherit",
                      }}
                    />
                  </div>
                </div>
                <div class="reviewCardText">
                  <p class=" reviewCardTextWrapper reviewCardText_description reviewCardText_fontSize reviewCardText_color">
                   {props.text}
                  </p>
                  <div class=" reviewCard_author ">
                    <div class=" reviewCard_authorCirclePicture reviewCard_authorPicture">
                      <div class="reviewCard_authorPictureStyle">
                        <div
                          class="reviewCardImg_ratio"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            class="  reviewCardImage reviewCard_authorPictureCover reviewCard_authorPictureCenter"
                            src={props.authorImg}
                            alt="Portrait of Jérôme Chauveau"
                            style={{
                              opacity: 1,
                              visibility: "inherit",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="reviewCardAuthor_content">
                      <span class="reviewCardAuthor_info">
                        <span class=" reviewCardTextWrapper reviewCardAuthor_name reviewCardAuthor_fontSize reviewLabel_color">
                          {props.authorName}
                        </span>
                        <span class=" reviewCardTextWrapper reviewAuthorCompany reviewCardAuthor_fontSize reviewCardText_color">
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
      </div>
    )
}

export default ReviewCard
