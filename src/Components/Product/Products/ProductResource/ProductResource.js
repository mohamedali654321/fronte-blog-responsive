import React,{useEffect} from 'react'
import CardProduct from '../CardsProduct/CardProduct'
import './ProductResource.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function ProductResource() {



const productCards=[
{
  title:"Documentation",
  desc:"All you need to get Strapi up-and-running.",
  icon:"./images/products/book_icon_80d2c538d0_7c87cfcff3.svg"
},
{
  title:"User Guide",
  desc:"Get the most out of the admin panel with our user guide.",
  icon:"./images/products/user_guide_icon_8cbe401776_121b8a6c83.svg"
},
{
  title:"Strapi Academy",
  desc:"Learn how to become a Strapi expert.",
  icon:"./images/products/education_icon_18fb97653f_723577953c.svg"
}

];

useEffect(()=>{
  AOS.init()
})


    
    return (
        <div class="productResourceContainer"
                         data-aos="zoom-in"
                        
                        data-aos-once="true"
        
        >
        <div
          class="productResource_LabelTitleText productResource_intro "
          style={{ opacity: 1 }}
        >
          <div
            class="
                productResourceLabel
                productResourceLabel_style
                productResourceLabel_color
              "
          >
            <div>
              <div
                        
                style={{
                  position: "relative",
                  display: "inline-block",
                  opacity: 1,
                  transform:
                    "perspective(1000px) translate3d(0px, 0px, 0px)",
                }}
                class="productResourceLabelWords"
              >
                RESOURCE CENTER
              </div>
             
            </div>
          </div>
          <h1
            class="
                productResourceTitle
                productResourceTitle_style
                productResourceTitle_fontSize
                productResourceTitle_color
              "
          >
            <div class="productResourceTitleContainer"
                         data-aos="zoom-in"
                        data-aos-delay="100"
                        data-aos-offset="200"
                        data-aos-once="true"
            >
              <span>
                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                    opacity: 1,
                    transform:"perspective(1000px) translate3d(0px, 0px, 0px)"
                      
                  }}
                  class="productResourceLabelWords"
                >
                  KwareTech Resources
                </div>
               
              </span>
            </div>
          </h1>
          <div
            class="
                productResourceText
                productResourceText_style
                productResourceText_wrapper
             
                productResourceText_color
              "
                        data-aos="zoom-in"
                        data-aos-delay="200"
                        data-aos-offset="200"
                        data-aos-once="true"
                        
          >
            <div
              style={{
                position: "relative",
                display: "inline-block",
                opacity: 1,
                transform:
                  "perspective(1000px) translate3d(0px, 0px, 0px)",
              }}
              class="productResourceLabelWords"
            >
              Everything you need to optimize the way you work with
              Strapi.
            </div>
          </div>
        </div>
        <div class="productCardGrid">
        {
          productCards.map(card=>(
            <CardProduct
              title={card.title}
              desc={card.desc}
              icon={card.icon}

            />
          ))
        }



        
         
        

         
       
        </div>
      </div>
    )
}

export default ProductResource
