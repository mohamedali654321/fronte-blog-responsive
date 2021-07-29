import React from 'react'
import './NewsLetter.css'

function NewsLetter() {
    return (

        <div className="">
              <div className="NewsletterBanner  Newsletter_maxWidth">
                <div className="styles_wrapper__3XDOm styles_wrapper_Newsletter">
                  <div></div>
                  <div></div>
                  <div className="NewsletterContent">
                    <h3 className="NewsletterTitle Newslettertitle_position Newslettertitle_text Newslettertitle_color">
                      Join our Newsletter</h3>
                    
                  </div>
                  <form className="NewsletterForm"><input type="email"
                      className="styles_Input emailInput" name="email" value=""
                      placeholder="Email address" aria-label="Email address" required=""/>
                    <div className="Newsletter_buttonContainer">
                      <div className="styles_button__1CLx_ Newsletter_button_bg"><span className="Newsletter_button_shadow"
                          style={{opacity: 0}}></span>
                        <div className="Newsletter_button_background Newsletter_button_bg"
                          style={{transform: "perspective(800px)"}}>
                         
                        </div><input type="submit"
                          className="Newsletter_buttonLink Newsletter_Button styles_submitButton__Qdcr1"
                          name="submit" value="Subscribe"/>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
       
    )
}

export default NewsLetter
