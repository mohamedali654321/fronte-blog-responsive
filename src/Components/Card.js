import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'
import videoExtensions from 'video-extensions'
import ReactPlayer from 'react-player'


function Card(props) {
    const BACKEND_URL = "http://54.220.211.123:1335"
    console.log(props)
   const locale =localStorage.getItem("locale")
   useEffect(()=>{
    AOS.init()
  })
   
   
  
    return (
        <div className="cardContainer "    >
      <Link
        to={`/${localStorage.getItem("locale")}/blog/${props.slug}`}
        className="CardWithArrowLink "

        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="200"
       
        
      >
        <div className="styles_backgroundContainer"
        
        
         >
          <div
            className="styles_background "
            style={{
              transform: "perspective(100px) scale(1.0305, 1.0305)",
            }}
          ></div>
        </div>
        <div className="styles_cardContainer">
          <div
            href={`/${localStorage.getItem("locale")}/blog/${props.slug}`}
            className="coverImageContainer styles_large "
            style={{ transform: "scale(1.0305, 1.0305)" }}
          >
            <div
              className="coverImage"
              style={{ transform: "scale(1.0095, 1.0095)" }}
            >
              <div
                className="styles_Ratio CardCover"
                style={{ paddingBottom: "56.25%" }}
              >
                <div className="styles_children">
                  {props.image &&
                    props.image.url !== null &&
                    videoExtensions.includes(props.image.ext.substring(1)) ===
                      true && (
                      <div className="styles_CoverImage">
                        <div className="ratio fluid">
                          <ReactPlayer
                            width="330px"
                            height="200px"
                            controls
                            url={`http://54.220.211.123:1335${props.image.url}`}
                            className="styles_Img styles_img "
                            style={{
                              opacity: 1,
                              visibility: "inherit",
                            }}
                          />
                        </div>
                      </div>
                    )}
                  {props.image &&
                    props.image.url !== null &&
                    videoExtensions.includes(props.image.ext) === false && (
                      <div className="styles_CoverImage">
                        <div className="ratio fluid">
                          <img
                            src={BACKEND_URL + props.image.url}
                            className="styles_Img styles_img "
                            style={{
                              opacity: 1,
                              visibility: "inherit",
                            }}
                          />
                        </div>
                      </div>
                    )}

                  {props.image === null && (
                    <>
                      <div className="styles_CoverImage">
                        <div className="ratio fluid">
                          <img
                            src="/images/default.png"
                            className="styles_Img styles_img "
                            style={{
                              opacity: 1,
                              visibility: "inherit",
                            }}
                          />
                          <ul className="defUl">
                            {props.tag &&
                              props.tag.map((tag) => (
                                <li className="defLi">
                                  <p className="defaultCat">{tag.name}</p>
                                </li>
                              ))}
                          </ul>
                          <p className="defaultCat"></p>
                          <span className="defaultTitle">{props.title}</span>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="styles_CoverImage">
                    <div className="ratio fluid">
                      <img
                        className="styles_Img styles_img "
                        style={{
                          opacity: 1,
                          visibility: "inherit",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="styles_cardContent__1exJ4">
            <div className="cardContainer styles_ListCardContent__3ljxm styles_isList__1dR8M">
              <ul className="styles_tags__12csC">
                {props.tag &&
                  props.tag.map(tag => (
                    <li className="styles_Tag__U_AL0 styles_tag__2Une0">
                      <span className="typography_Label__1knAy styles_tagLabel__MYC03 themes_gray__rNovr">
                        {tag.name}
                      </span>
                    </li>
                  ))}
                <li className="styles_Tag__U_AL0 styles_tag__2Une0">
                  
                </li>
              </ul>
              <h2 className="typography_Title__15mGG styles_title__3GD2G typography_smaller__2CuhM themes_dark__3hjQG">
                {props.title}
              </h2>
              <p className="typography_Text__21fWd styles_text__ZSJ0H typography_small__wcwpx themes_gray__rNovr">
                {props.abstract}
              </p>
              <div className="styles_Author__1L6by styles_author__12c2c styles_small__3qQTy">
                <div>
                  <p className="typography_Text__21fWd typography_smaller__2CuhM themes_bay-blue__339Mw">
                  Author: {props.name}
                  </p>

                  {props.translator ? (
                    <p className="typography_Text__21fWd typography_smaller__2CuhM themes_bay-blue__339Mw">
                      Translated by: {props.translator}
                    </p>
                  ) : null}

                  <p className="typography_Text__21fWd typography_legend__12cYE themes_gray__rNovr">
                    {props.publishDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
    )
}



export default Card

