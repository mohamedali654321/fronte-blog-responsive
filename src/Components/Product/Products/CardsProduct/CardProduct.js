import React from 'react'
import './CardProduct.css'
function CardProduct(props) {
    return (
        <div
        class="
            productCardContainer
            productCardBackground
          "
          data-aos="zoom-in"
          data-aos-delay="200"
           data-aos-offset="200"
          data-aos-once="true"
      >
        <div class="productCard_icon">
          <img
            
            src={props.icon}
            alt="Icon of a book to illustrate the developer documentation"
            style={{ opacity: 1, visibility: "inherit" }}
          />
        </div>
        <div class="productCard_textContent">
          <div
            class="
                productCard_textContent_Title
                productCard_Title_RichText
                productCard_Title_font
                productCard_Title_small
                productCard_Title_color
              "
          >
            <p>{props.title}</p>
          </div>
          <p
            class="
                productCard_textContent_Text
                productCard_Text_position
                productCard_Text_small
                productCard_Title_color
              "
          >
            {props.desc}
          </p>
        </div>
        <div
          class="
              productCard_button_wrapper
              productCard_buttonContainer
              productCard_buttonContainer_fullWidth
            "
        >
          <div
            class="
                productCard_button
                productCard_buttonContainer_color
                productCard_buttonContainer_fullWidth
              "
          >
            
            <div
              class="
                  productCard_button_innerWrapper
                  productCard_buttonContainer_color
                "
              style={{ transform: "perspective(800px)" }}
            >
              
            </div>
            <a
              class="
                  productCard_button_buttonLink
                 
                 
                "
              target="_blank"
              alt=""
              href="https://strapi.io/documentation/developer-docs/latest/getting-started/introduction.html"
            >
              {props.title}
            </a>
          </div>
        </div>
      </div>
    )
}

export default CardProduct
