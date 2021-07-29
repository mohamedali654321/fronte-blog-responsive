import React,{useEffect} from 'react'
import './ChangeLog.css'
import TimeLineEntery from './TimeLineEntery/TimeLineEntery'
import AOS from 'aos'
import 'aos/dist/aos.css'
function ChangeLog() {

  useEffect(()=>{
    AOS.init()
  })
    const process=[
        {
            dec:"Improvements and fixes - Strapi v3.6.1 & v3.6.",
            date:"Apr 29, 2021"
        },
        {
            dec:"🌍 Internationalization - Strapi v3.6",
            date:"Apr 22, 2021"
        },
        {
            dec:"Starters CLI - v3.5.4",
            date:"Mar 25, 2021"
        },
        {
            dec:"🌍 Internationalization - Strapi v3.6",
            date:"Apr 22, 2021"
        },
    ]
    return (
        <div class="changeLogContainer"
                       data-aos="zoom-in"
                        data-aos-delay="200"
                        data-aos-offset="200"
                        data-aos-once="true"
        
        >
                <div class="changeLogLabelTitleText changeLogLabelTitleText_intro" style={{opacity: 1}}>
                  <h1 class="
                      changeLogLTitle
                      changeLogLTitle_style
                      changeLogLTitle_small
                      changeLogLTitle_color
                    "
                         
                    
                    >
                    <div class="changeLogLTitleContainer">
                      <span><div style={{
                           position: "relative",
                            display: "inline-block",
                            opacity: 1,
                            transform: "perspective(1000px) translate3d(0px, 0px, 0px)"

                      }}
                           
                              
                           class="changeLogLTitleContainer_word">
                          Changelog
                        </div></span>
                    </div>
                  </h1>
                  <div class="
                      changeLogLText
                      changeLogLTextRich
                      changeLogLText_style
                      
                      changeLogLText_color
                    ">
                    <div style={{
                           position: "relative",
                            display: "inline-block",
                            opacity: 1,
                            transform: "perspective(1000px) translate3d(0px, 0px, 0px)"

                      }}class="changeLogLTitleContainer_word">
                     Find out about the Strapi product updates, new features and general improvements.
                    </div>
                  </div>
                  <ul class="changeLogL_links">
                    <li class="changeLogL_link">
                      <div class="
                          changeLogLink_button
                          changeLogLink_buttonContainer
                        " style={{opacity: 1, transform: "perspective(1000px)"}}>
                        <div class="changeLogLink_button_style changeLogLink_buttonBackgroundColor">
                          
                          <div class="
                              changeLogLink_buttonBackground
                              changeLogLink_buttonBackgroundColor
                            " style={{transform: "perspective(800px)"}}>
                           
                          </div>
                          <a class="
                              changeLogLink_button_Link
                              changeLogLink_button_text
                            " alt="" href="https://strapi.io/changelog">See the changelogs</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div style={{opacity: 1, transform: "perspective(1000px)"}}>
                  {
                      process.map(process=>(
                        <TimeLineEntery
                        
                            desc={process.dec}
                            date={process.date}
                        />

                      ))
                  }


                       










                    
                   
                  </div>
                </div>
              </div>
    )
}

export default ChangeLog
