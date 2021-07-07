import React from 'react'
import './NewsLetter.css'

function NewsLetter() {
    return (

        <div className="">
              <div className="styles_NewsletterBanner__emGYC styles_slice__3lIJ8 styles_maxWidth__4Sa58">
                <div className="styles_wrapper__3XDOm styles_wrapper__ucHyy">
                  <div></div>
                  <div></div>
                  <div className="styles_content__2QxRq">
                    <h3 className="typography_Title__15mGG styles_title__3yUXI typography_small__wcwpx themes_white__22kAN">
                      Join our Newsletter</h3>
                  </div>
                  <form className="styles_form__2eGlO"><input type="email"
                      className="styles_Input__Z3Wqw styles_emailInput__2GXWR" name="email" value=""
                      placeholder="Email address" aria-label="Email address" required=""/>
                    <div className="styles_buttonContainer__3V0Xl">
                      <div className="styles_button__1CLx_ styles_purple__3tT7k"><span className="styles_shadow__3eyWi"
                          style={{opacity: 0}}></span>
                        <div className="styles_background__2gXxd styles_purple__3tT7k"
                          style={{transform: "perspective(800px)"}}>
                          <div className="styles_hoverCircle__Nns-N"
                            style={{opacity: 0, transform: "perspective(15px) translate3d(0px, 0px, -90px)"}}></div>
                        </div><input type="submit"
                          className="styles_buttonLink__2SP9n typography_Button__3B09N styles_submitButton__Qdcr1"
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
