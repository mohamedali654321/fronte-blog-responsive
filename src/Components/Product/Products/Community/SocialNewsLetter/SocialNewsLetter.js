import React from 'react'
import './SocialNewsLetter.css'
function SocialNewsLetter() {
    return (
        <div class="communityNewsletterContainer"
        data-aos-delay="200"
          
          data-aos-once="true"
          data-aos="zoom-in"
        >
        <div
          class="
              communityNewsletterWrapper
              communityNewsletter_layoutWrapper
              communityNewsletter_Wrapper
            "
        >
          <svg
            width="125"
            height="97"
            fill="none"
            class="communityNewsletter_paperPlane"
          >
            <path
              d="M0 36.898L125 .172 34.204 49.901 0 36.898z"
              fill="#A36FFF"
            ></path>
            <path
              d="M125 .172L34.205 49.901l14.58 31.069L125 .172z"
              fill="#8C4BFF"
            ></path>
            <path
              d="M125 .172l-72.378 56.24 29.096 39.95L125 .172z"
              fill="#A36FFF"
            ></path>
            <path
              d="M48.785 80.97l3.837-24.557 8.42 11.555L48.784 80.97z"
              fill="#7E43E6"
            ></path>
          </svg>
          <div class="communityNewsletter_innerWrraper">
            <div class="communityNewsletter_content">
              <h3
                class="
                    communityNewsletter_TitleContainer
                    communityNewsletter_Title_style
                    communityNewsletter_Title_small
                    communityNewsletter_Title_color
                  "
              >
                Join our Newsletter
              </h3>
              <p
                class="
                    communityNewsletter_Text
                    communityNewsletter_Text_style
                    communityNewsletter_Title_small
                    communityNewsletter_Title_color
                  "
              >
                Get all the latest Strapi updates, news and events.
              </p>
            </div>
            <form class="communityNewsletter_form">
              <input
                class="
                    communityNewsletterForm_input
                    communityNewsletterForm_emailInput
                  "
                type="email"
                name="email"
                placeholder="Email"
                aria-label="Email"
                required=""
                
              />
              <div
                class="
                    communityNewsletterForm_buttonContainer
                    communityNewsletterForm_buttonFullWidth
                  "
              >
                <div
                  class="
                      communityNewsletterForm_button
                      communityNewsletterForm_buttonBackground
                      communityNewsletterForm_buttonFullWidth
                    "
                >
                 
                  <div
                    class="
                        communityNewsletterForm_submit_background
                        communityNewsletterForm_buttonBackground
                      "
                    style={{ transform: "perspective(800px)" }}
                  >
                    
                  </div>
                  <input
                    class="
                        communityNewsletterForm_buttonLink_
                        communityNewsletterForm_Button
                        communityNewsletterForm_submitButton
                      "
                      style={{fontSize:"18px"}}
                    type="submit"
                    name="submit"
                    value="Subscribe"
                  />
                </div>
              </div>
              <p
                class="
                    communityNewsletter_Text
                    communityNewsletterDescWrapper
                    
                    communityNewsletterDescColor
                  "
              >
                By submitting this form you consent to us emailing
                you occasionally about our products and services.
                You can unsubscribe from emails at any time, and we
                will never pass your email to third parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    )
}

export default SocialNewsLetter
