import React,{useEffect} from 'react'
import './Learn.css'
import LinkIcon from './LinkIcon/LinkIcon'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Learn() {
  useEffect(()=>{
    AOS.init()
  })

  const Links=[
    {
      title:"Starters",
      text:"Get started in no time",
      icon:"./images/products/starter_icon_0df41f5df5_1c2d337459.svg"
    },
    {
      title:"Tutorials",
      text:"Where you’ll learn everything",
      icon:"./images/products/tutorial_icon_2f939092a4_8d07fa044a.svg"
    },
    {
      title:"Academy",
      text:"Learn how to become a Strapi expert.",
      icon:"./images/products/education_color_icon_df7a108290_6a4ece3811.svg"
    },

    {
      title:"Strapi Recipes",
      text:"Bite-size video tutorials",
      icon:"./images/products/recipe_starter_36c43126ce_065f8d503b.svg"
    },

    {
      title:"Webinars",
      text:"Check all our online meetups",
      icon:"./images/products/webinar_icon_29af7d8390_3d20ff5c55.svg"
    },

    {
      title:"Blog",
      text:"Discover all the latest about our product and culture.",
      icon:"./images/products/Vector_3_1748490973.svg"
    },



         

  ]

    return (
        <div class="learnContainer"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                        data-aos-offset="200"
                        data-aos-once="true"
        >
        <div
          class="learnLabelTitleText learnTitle_intro"
          style={{ opacity: 1 }}
        >
          <h1
            class="
                Learn_Title
                Learn_Title_style
                Learn_Title_small
                Learn_Title_color
              "
          >
            <div class="Learn_titleContainer">
              <span>
                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                    opacity: 1,
                    transform:
                      "perspective(1000px) translate3d(0px, 0px, 0px)",
                  }}
                  class="Learn_titleWord"
                >
                  Learn with Strapi
                </div>
                
              </span>
            </div>
          </h1>
          <div
            class="
                Learn_TextContainer
                Learn_Text_style
                Learn_Text
                
                Learn_Text_color
              "
          >
            <div
              style={{
                position: "relative",
                display: "inline-block",
                opacity: 1,
                fontSize:"17px",
                transform:
                  "perspective(1000px) translate3d(0px, 0px, 0px)",
              }}
              class="Learn_titleWord"
            >
              Explore our library of educational content to learn how to
              set up and manage your Strapi project.
            </div>
          </div>
        </div>
        <div class="Learn_GridLinks">
           {
             Links.map(link=>(

              <LinkIcon
                title={link.title}
                text={link.text}
                icon={link.icon}
              />


             ))
           }

          
         
         
         
          
        </div>
      </div>




    )
}

export default Learn
