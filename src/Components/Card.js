import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
import videoExtensions from 'video-extensions'
import ReactPlayer from 'react-player'


function Card(props) {
    const BACKEND_URL = "http://54.220.211.123:1335"
    console.log(props)
   const locale =localStorage.getItem("locale")
   

    return (
        <div className="styles_cardContainer__2gwcO">
      <Link
        to={`/${localStorage.getItem("locale")}/blog/${props.slug}`}
        className="styles_CardWithArrowLink__2vqCa "
        style={{ opacity: 1, transform: "perspective(1000px)" }}
      >
        <div className="styles_backgroundContainer__2PkOb">
          <div
            className="styles_background__3JWQg styles_type1__Cbdq7"
            style={{
              transform: "perspective(100px) scale(1.0305, 1.0305)",
            }}
          ></div>
        </div>
        <div className="styles_cardContainer__3yGHu">
          <div
            href={`/${localStorage.getItem("locale")}/blog/${props.slug}`}
            className="styles_coverImageContainer__3LJ55 styles_large__1LCJm styles_bottom__3DIQZ"
            style={{ transform: "scale(1.0305, 1.0305)" }}
          >
            <div
              className="styles_coverImage__1pDIa"
              style={{ transform: "scale(1.0095, 1.0095)" }}
            >
              <div
                className="styles_Ratio__3CRRj styles_CardCover__1axIM"
                style={{ paddingBottom: "56.25%" }}
              >
                <div className="styles_children__1-hab">
                  {props.image &&
                    props.image.url !== null &&
                    videoExtensions.includes(props.image.ext.substring(1)) ===
                      true && (
                      <div className="styles_CoverImage__2NtS5">
                        <div className="styles_ratio__1y_8X styles_fluid__3DtuD">
                          <ReactPlayer
                            width="330px"
                            height="200px"
                            controls
                            url={`http://54.220.211.123:1335${props.image.url}`}
                            className="styles_Img__2JZ2e styles_img__1peOe "
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
                      <div className="styles_CoverImage__2NtS5">
                        <div className="styles_ratio__1y_8X styles_fluid__3DtuD">
                          <img
                            src={BACKEND_URL + props.image.url}
                            className="styles_Img__2JZ2e styles_img__1peOe "
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
                      <div className="styles_CoverImage__2NtS5">
                        <div className="styles_ratio__1y_8X styles_fluid__3DtuD">
                          <img
                            src="/images/default.png"
                            className="styles_Img__2JZ2e styles_img__1peOe "
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

                  <div className="styles_CoverImage__2NtS5">
                    <div className="styles_ratio__1y_8X styles_fluid__3DtuD">
                      <img
                        className="styles_Img__2JZ2e styles_img__1peOe "
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
            <div className="styles_cardContainer__2gwcO styles_ListCardContent__3ljxm styles_isList__1dR8M">
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

