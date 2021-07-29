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
   console.log(props.index)
   
  
    return (
        <div className="cardContainer "    >
      <Link
        to={`/${localStorage.getItem("locale")}/blog/${props.slug}`}
        className="CardWithArrowLink "

        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay={`${props.index}*200`}
        
        data-aos-once="true"
       
        
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
          <div className="cardContent">
            <div className="cardContainer ListCardContent  styles_List">
              <ul className="category_tags">
                {props.tag &&
                  props.tag.map(tag => (
                    <li className="category_tags_styles category_tags_items">
                      <span className="category_label category_label_style ">
                        {tag.name}
                      </span>
                    </li>
                  ))}
               
              </ul>
              <h2 className="card_titleContainer card_title card_small_text card_text_color">
                {props.title}
              </h2>
              <p className="card_text card_text_abstract abstract_small_text card_text_color_abstractPublish">
                {props.abstract}
              </p>
              <div className="AuthorContainer author author_small_label">
                <div>
                  <p className="card_text card_small_text author_color_label">
                  Author: {props.name}
                  </p>

                  {props.translator ? (
                    <p className="card_text card_small_text author_color_label">
                      Translated by: {props.translator}
                    </p>
                  ) : null}

                  <p className="card_text publish_label card_text_color_abstractPublish">
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

