import React,{useState,useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './SmallCard.css'
function SmallCard(props) {
  useEffect(()=>{
    AOS.init()
  })

    return (
        
      <div class="SmallCardContainer"
          
          data-aos-once="true"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-offset="200"
      
      
      >
      <a
          class="SmallCardContainer_style " target="" alt=""
          
          href="https://strapi.io/integrations/gatsby-cms"
          style={{opacity: 1, transform: "perspective(1000px)"}}
          
          >
          <div class="SmallCard_backgroundContainer_"
          
          
          >
            <div class="SmallCard_background SmallCard_backgroundShadow"></div>
          </div>
          <div class="SmallCard_cardContainer">
            <div class="SmallCard_cardContent">
              <div class="smallCard_PictureContent SmallCardContainer">
                <div class="smallCard_logo">
                  <div class="smallCard_ratio" style={{paddingBottom:"40%"}}><img
                      class=" smallCard_img "
                      src={props.image}
                      alt="GatsbyJS logo" style={{opacity: 1, visibility: "inherit"}}/></div>
                </div>
                <h1
                  class="smallCardTitle smallCardTitle_style smallCardTitle_fontSize smallCardTitle_color">
                  {props.title} </h1>
                <p
                  class="smallCardText smallCardText_description smallCardText_fontSize smallCardText_color">
                  {props.text}</p>
              </div>
            </div>
            <div class="smallCardLink_container">
              <div class="smallCardLink_line"></div><span
                class="smallCardLink_ArrowLink  "><span
                  class="smallCardLink_Wrapper"><span
                    class="smallCardLink_label smallCardLink_label_color">Create Project</span><svg
                    class="smallCardLink_SmallArrow smallCardLink_icon smallCardLink_fillColor right"
                    viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 9.4l3.2-3.8L5 1.8a1 1 0 01-.2-.7c0-.3 0-.6.2-.7.4-.4.9-.4 1.2 0L10 4.9c.3.4.3 1 0 1.4L6 10.8c-.3.4-.8.4-1.2 0-.3-.4-.3-1 0-1.4z"
                      fill="#74E4A2"></path>
                    <path d="M1 4.7a.9.9 0 100 1.8V4.7zm7.4 0H1v1.8h7.4V4.7z" fill="#74E4A2"></path>
                  </svg></span></span>
            </div>
          </div>
        </a>
        </div>

    )
}

export default SmallCard
