import React from 'react'
import './SocialCard.css'
function SocialCard(props) {
    return (
        <div
        class="
            socialCardContainer
            socialCardWrapper
          "
          data-aos-delay="200"
          
          data-aos-once="true"
          data-aos="zoom-in-right"
      >
        <div class="socialCard_icon">
          <div
            class="
                socialCard_iconBackground_
                socialCardWrapper
              "
          ></div>
          <img
            class="
                socialCard_iconImg
              "
            src={props.icon}
            alt="Icon of a book to illustrate the documentation"
            style={{ opacity: 1, visibility: "inherit" }}
          />
        </div>
        <div
          class="
              styles_button__1Seie
              socialCardButtonContainer
              socialCardButtonFullWidth
            "
        >
          <div
            class="
                socialCardButton_innerWrraper
                socialCardButton_gradientPurpl
                socialCardButtonFullWidth
              "
          >
            
            <div
              class="
                  socialCardButton_background
                  socialCardButton_gradientPurpl
                "
              style={{ transform: "perspective(800px)" }}
            >
             
            </div>
            <a
              class="
                  socialCardButton_buttonLink
                  socialCardButton_style
                  socialCardButton_WrapperLink
                "
              target="_blank"
              rel="noopener"
              alt=""
              href="https://github.com/strapi/documentation/blob/main/CONTRIBUTING.md"
            >
              Contribute to the {props.title}
            </a>
          </div>
        </div>
      </div>
    )
}

export default SocialCard
