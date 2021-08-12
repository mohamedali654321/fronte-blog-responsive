import React ,{useEffect}from 'react'
import './SeventhSection.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
function SeventhSection() {
  useEffect(()=>{
    AOS.init()
  })


    const list=[
        {
            title:"Mobile Applications",
            text:"The headless CMS for blazing-fast mobile applications.",
            iconSrc:"./images/singleProduct/icon-mobile_005dbc902e.svg",
            link:{
                title:"Discover",
                url:"https://strapi.io/solutions/mobile-cms"
            }

        },
        {
            title:"Brand and Corporate Websites",
            text:"The CMS to create, manage and expose your brand.",
            iconSrc:"./images/singleProduct/icon-corporate_4afa910d28.svg",
            link:{
                title:"Discover",
                url:"https://strapi.io/solutions/corporate-website-cms"
            }

        },
        {
            title:"Editorial Sites",
            text:"All your content centralized in one place",
            iconSrc:"./images/singleProduct/stacking-editorial_45481841bc.svg",
            link:{
                title:"Discover",
                url:"https://strapi.io/solutions/editorial-cms"
            }

        },
        {
            title:"Ecommerce",
            text:"Empower retailers to sell everywhere.",
            iconSrc:"./images/singleProduct/icon-ecommerce_16dbc73abd.svg",
            link:{
                title:"Discover",
                url:"https://strapi.io/solutions/ecommerce-cms"
            }

        },
        {
          title:"Foloi",
          text:"Folio Marketing.",
          iconSrc:"./images/singleProduct/icon-ecommerce_16dbc73abd.svg",
          link:{
              title:"Discover",
              url:"https://strapi.io/solutions/ecommerce-cms"
          }

      },
    ]
  
    return (
        <section
                  class="seventhSection_gradient seventhSection_StackingCards seventhSection_slice seventhSection_gradient-right seventhSectionContainer">
                  <div class="seventhSectionWrapper seventhSectionWrapper_style">
                    <div class="seventhSection_innerWrapper">
                      <div class="seventhSection_contentWrapper"
                      
                      >
                        <h1 class="seventhSectionTitle seventhSectionTitle_style seventhSectionTitle_color"
                         data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-once="true"
                        >
                        One CMS, many solutions
                        </h1>
                        <ul class="seventhSection_cardsContainer"
                          data-aos="zoom-in-up"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-duration="1200"
            data-aos-once="true"
                        >
                        {
                            list.map((item,index)=>(

                                <li class="seventhSectionCardContainer">
                            <div style={{paddingTop:"0px",paddingBottom:"80px"}}>
                              <div class="seventhSectionCardWrapper" style={{minHeight: "409px"}}>
                                <div class="seventhSectionCardHeader">
                                  <div class="seventhSectionCardIconWrapper">
                                    <div class="seventhSectionCardIcon_Ratio" style={{paddingBottom:"100%"}}>
                                      <div class="seventhSectionCardIcon_child">
                                        <div class="seventhSectionCard_imgContainer">
                                          <div class="seventhSectionIcon_ratio seventhSectionIcon_fluid"><img
                                              class=" seventhSectionCard_img "
                                              src={item.iconSrc}
                                              alt="Icon Mobile Applications" style={{opacity: 1, visibility: "inherit"}}/></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    class="seventhSectionCardText seventhSectionCardSteps seventhSectionCardStep_style seventhSectionTitle_color">
                                    0{index+1}/{list.length}</div>
                                </div>
                                <h1
                                  class="seventhSectionTitle seventhSectionCardTitle seventhSectionCardTitle_style seventhSectionTitle_color">
                                  {item.title}</h1>
                                <div
                                  class="seventhSectionCardText seventhSectionCardText_style seventhSectionCard_cardText seventhSectionCardText_color">
                                  <p>{item.text}</p>
                                  <p><a href={item.link.url}>{item.link.title}</a></p>
                                </div>
                              </div>
                            </div>
                          </li>

                            ))
                        }



                          
                         
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
    )
}

export default SeventhSection
