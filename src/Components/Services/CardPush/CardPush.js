import React,{useEffect} from 'react'
import './CardPush.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
function CardPush() {
  useEffect(()=>{
    AOS.init()
  })
    return (
        <div class="cardPushFullWidth cardPushContainer"
        data-aos="zoom-in-right"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-once="true"
            
        >
        <div class="cardPushWrapper cardPushWrapper_style">
          <div class="cardPush_triangleImageWrapper">
            <div class="cardPush_triangleImage_background cardPush_triangleImage cardPush_triangleImage_bottom-left">
              <div class="cardPush_triangleImage_Ratio" style={{paddingBottom:"100%"}}>
              {/* <img
                  class=" cardPush_triangleImage_img "
                  src="./images/singleProduct/forza_31252cc165_8154e303ed.jpg"
                  alt="forza game" style={{opacity: 1, visibility: "inherit"}}/> */}
                  </div>
            </div>
          </div><a class="cardPushArrowLink cardPushArrowLink_position cardPushArrowLink_pointer" target=""
            alt="" href="https://strapi.io/user-stories/1minus1">
            <div class="cardPushArrowLink_backgroundContainer">
              <div class="cardPushArrowLink_backgroundContainer cardPushArrowLink_shadow">

              </div>
            </div>
            <div class="cardPushCardContainer">
              <div class="cardPushCard_cardContent">
                <div class="cardPushCard_InnerContent cardPushCard_cardStyle">
                  <div class="cardPushCard_cardImg">
                    <div class="cardPush_triangleImage_Ratio cardPushCard_card_fluid">
                    <img
                        class=" cardPush_triangleImage_img cardPushMinus_fit cardPushMinus_position"
                        src="./images/singleProduct/1minus1_logo_594ea4681b.png"
                        alt="1minus1 logo" style={{opacity: 1, visibility: "inherit"}}/>
                        </div>
                  </div>
                  <div class="cardPushText">
                  <span
                      class="cardPushLabel cardPushLabel_color">1minus1 &amp; Turn 10 Studios</span>
                    <h1
                      class="cardPushTitle cardPushTitle_style cardPushTitle_fontSize cardPushTitle_color">
                      How 1minus1 delivered a creative website for Turn 10 Studios, part of Xbox Game Studios, 25%
                      faster with Strapi</h1>
                  </div>
                </div>
              </div>
              <div class="cardPushLink">
                <div class="cardPushLine">

                </div>
                <span
                  class="cardPushLine_smallArrow cardPushLine_smallArrowLink cardPushSpreadMobileCenter ">
                  <span
                    class="cardPushCard_innerContainer">
                    <span class="cardPushLabel cardPushLabel_color">Read
                      Case Study</span>
                      <svg
                      class="cardPushCard_arrowSmall cardPushCard_icon cardPushCard_icon_color right"
                      viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 9.4l3.2-3.8L5 1.8a1 1 0 01-.2-.7c0-.3 0-.6.2-.7.4-.4.9-.4 1.2 0L10 4.9c.3.4.3 1 0 1.4L6 10.8c-.3.4-.8.4-1.2 0-.3-.4-.3-1 0-1.4z"
                        fill="#74E4A2">

                        </path>
                      <path d="M1 4.7a.9.9 0 100 1.8V4.7zm7.4 0H1v1.8h7.4V4.7z" fill="#74E4A2">

                      </path>
                    </svg>
                    </span>
                    </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    )
}

export default CardPush
