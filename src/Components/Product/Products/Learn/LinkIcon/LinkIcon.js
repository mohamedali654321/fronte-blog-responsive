import React from 'react'
import './LinkIcon.css'
function LinkIcon(props) {
    return (
       
        <a
        class="Learn_LinksContainer"
        alt=""
        href="https://strapi.io/starters"
                        data-aos="zoom-in-right"
                        data-aos-delay="200"
                        data-aos-offset="200"
                        data-aos-once="true"
      >
        <div class="Learn_Links_icon">
          <div class="Learn_Links_iconBackground"></div>
          <img
            class="
                
                Learn_Links_img
                
              "
            src={props.icon}
            alt="Icon of a ruler to illustrate the starters"
            style={{ opacity: 1, visibility: "inherit" }}
          />
        </div>
        <div class="Learn_Links_textContent">
          <p
            class="
                Learn_Title
                Learn_Links_textContentTitle
                Learn_Links_textContentTitle_small
                Learn_Title_color
              "
          >
            {props.title}
          </p>
          <p
            class="
                Learn_TextContainer
                Learn_Links_textContentText_small
                Learn_Links_textContentTitle_small
                Learn_Text_color
              "
          >
            {props.text}
          </p>
        </div>
      </a>

    )
}

export default LinkIcon
