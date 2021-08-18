import React, { useState, useEffect } from "react";
import "./Details.css";
import { Link } from "react-router-dom";

import axios from "axios";


import ReactPlayer from "react-player";
import videoExtensions from "video-extensions";
import { DiscussionEmbed } from "disqus-react";

import ProgressBar from "react-scroll-progress-bar";
import Card from "../Card/Card";

function Details({ match }) {
  const slug = match.params.slug;
  const [details, setDetails] = useState([]);
  const [id, setId] = useState("");
  // const [title,setTitle]=useState()
  const [currentId, setCurrentId] = useState("");
  const [currentLocale, setCurrentLocale] = useState("");
  const [convertLocale, setConvertLocale] = useState("");
  const [cardData, setCardData] = useState([]);
  const [localeData, setLocaleData] = useState([]);
  const [locales, setLocales] = useState([]);
  const [title, setTitle] = useState("");
  const [testData, setTestData] = useState([]);
  const BACKEND_URL = "http://54.220.211.123:1335";
  const url = window.location.href;
  console.log({ url });
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${url}`;
  const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;

  useEffect(() => {
    axios
      .get(
        `http://54.220.211.123:1335/articles?slug=${slug}&_locale=${localStorage.getItem(
          "locale"
        )}`
      )
      .then(async (res) => {
        await setDetails(res.data);
        details.map((details) => {
          setCurrentId(details.id);
          setCurrentLocale(details.locale);
          setLocales(details.localizations);
          details.localizations.map((item) => {
            setId(item.id ? item.id : null);
            setConvertLocale(item.locale ? item.locale : null);
          });
        });
      })
      .catch((err) => console.log(err));
  }, [details]);

  console.log({ details });

  console.log(localStorage.getItem("locale") != currentLocale);
  console.log({ currentLocale }, { id });
  useEffect(() => {
    if (localStorage.getItem("locale") != currentLocale && locales.length > 0) {
      axios
        .get(
          `http://54.220.211.123:1335/articles?id=${id}&_locale=${localStorage.getItem(
            "locale"
          )}`
        )
        .then(async (res) => {
          if (res) {
            await setLocaleData(res.data);
          }
        })
        .catch((err) => console.log(err));
    }

    if (localStorage.getItem("locale") == currentLocale && locales.length > 0) {
      axios
        .get(
          `http://54.220.211.123:1335/articles?id=${currentId}&_locale=${localStorage.getItem(
            "locale"
          )}`
        )
        .then(async (res) => {
          if (res) {
            await setLocaleData(res.data);
          }
        })
        .catch((err) => console.log(err));
    }

    if (locales.length == 0) {
      axios
        .get(
          `http://54.220.211.123:1335/articles?id=${currentId}&_locale=${currentLocale}`
        )
        .then(async (res) => {
          if (res) {
            await setLocaleData(res.data);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [localeData]);

  console.log({ localeData });

  let keywords = [];

  details.map((details) => {
    if (details.keywords && details.keywords.length > 0) {
      details.keywords.map((item) => {
        if (item.word !== null) keywords.push(item.word.toLocaleLowerCase());
      });
    }
  });

  useEffect(() => {
    axios
      .get(
        "http://54.220.211.123:1335/articles?_sort=publishDate:desc&_locale=" +
          localStorage.getItem("locale")
      )
      .then(async (res) => {
        await setCardData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  let intersted = cardData.filter((card) => {
    if (keywords.length > 0) {
      for (let i = 0; i < keywords.length; i++) {
        return card.title.toLocaleLowerCase().includes(keywords[i]);
      }
    } else {
      return card.title.toLocaleLowerCase().includes("strapi");
    }
  });

  for (let i = 0; i < intersted.length; i++) {
    if (title === intersted[i].title) {
      intersted.splice(i, 1);
    }
  }

  console.log({intersted})

  return (
    <div>
    
      <div className="details_container">
      
        <div className="details_wrapper">
          <a
            className="backTo_link"
            target=""
            alt=""
            to="/blog"
            href="/blog"
          >
            <span
              className="
                  ArrowLink
                  backTo_link
                  ArrowLink_rotate
                "
            >
              <span className="ArrowLink_container">
                <span className="ArrowLink_label themes_colorBack">
                  Back to articles
                </span>
                <svg
                  className="
                      SmallArrow
                      styles_icon
                      fill_color
                 
                    "
                  viewBox="0 0 11 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 9.4l3.2-3.8L5 1.8a1 1 0 01-.2-.7c0-.3 0-.6.2-.7.4-.4.9-.4 1.2 0L10 4.9c.3.4.3 1 0 1.4L6 10.8c-.3.4-.8.4-1.2 0-.3-.4-.3-1 0-1.4z"
                    fill="#74E4A2"
                  ></path>
                  <path
                    d="M1 4.7a.9.9 0 100 1.8V4.7zm7.4 0H1v1.8h7.4V4.7z"
                    fill="#74E4A2"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        </div>

        <section
          className="
            
              article_container
              article_maxWidth
            "
        >
          {localeData.map((details) => (
            <div className="articleWrapper details_wrapper">
              <div className="">
                <div className="details_wrapper">
                  <div className="articleInnerWrapper">
                    <div className="articleIHeader">
                      <h1
                        className="
                        
                          details_title
                          details_titleLabel
                          themes_color
                        "
                        data-aos="zoom-in"
                        data-aos-once="true"
                      >
                        {details.title}
                      </h1>
                    </div>
                  </div>
                  <div
                    className="articleRatio articleCover"
                    style={{ paddingBottom: "62.5%" }}
                  >
                    <div className="styles_children_image" data-aos="zoom-in" data-aos-once="true">
                      <div className="articleCoverImage">
                        {details.coverMedia === null &&
                          details.image &&
                          details.image.url !== null &&
                          videoExtensions.includes(
                            details.image.ext.substring(1)
                          ) === true && (
                            <div className="styles_ratio_img styles_fluid_img">
                              <ReactPlayer
                                width="100%"
                                height="100%"
                                controls
                                url={`http://54.220.211.123:1335${details.image.url}`}
                                className="
                              
                              styles_img_article
                              
                              styles_img_center
                            "
                                style={{
                                  opacity: 1,
                                  visibility: "inherit",
                                  position: "absolute",
                                }}
                              />
                            </div>
                          )}

                        {details.coverMedia === null &&
                          details.image &&
                          videoExtensions.includes(
                            details.image.ext.substring(1)
                          ) === false && (
                            <div className="styles_ratio_img styles_fluid_img">
                              <img
                                src={BACKEND_URL + details.image.url}
                                className="
                              
                              styles_img_article
                              
                              styles_img_center
                            "
                                style={{
                                  opacity: 1,
                                  visibility: "inherit",
                                  position: "absolute",
                                }}
                              />
                            </div>
                          )}

                        {details.coverMedia !== null &&
                          details.coverMedia.url !== null &&
                          videoExtensions.includes(
                            details.coverMedia.ext.substring(1)
                          ) === false && (
                            <div className="styles_ratio_img styles_fluid_img">
                              <img
                                src={BACKEND_URL + details.coverMedia.url}
                                className="
                              
                              styles_img_article
                              
                              styles_img_center
                            "
                                style={{
                                  opacity: 1,
                                  visibility: "inherit",
                                  position: "absolute",
                                }}
                              />
                            </div>
                          )}

                        {details.coverMedia &&
                          details.coverMedia.url !== null &&
                          videoExtensions.includes(
                            details.coverMedia.ext.substring(1)
                          ) === true && (
                            <div className="styles_ratio_img styles_fluid_img">
                              <ReactPlayer
                                width="100%"
                                height="100%"
                                controls
                                url={`http://54.220.211.123:1335${details.coverMedia.url}`}
                                style={{
                                  opacity: 1,
                                  visibility: "inherit",
                                  position: "absolute",
                                }}
                                className="
                                styles_img_article
                              
                              styles_img_center
                              
                            "
                              />
                            </div>
                          )}

                        {!details.image && !details.coverMedia && (
                          <div className="styles_ratio_img styles_fluid_img">
                            <img
                              src="/images/default.png"
                              style={{ opacity: 1, visibility: "inherit" }}
                              className="

                              
                              styles_img_article
                              
                              styles_img_center
                            "
                            />
                            <ul className="styles_tags">
                              {details.categories &&
                                details.categories.length > 0 &&
                                details.categories.map((tag) => (
                                  <li className="style_tag">
                                    <p className="defaultCat">{tag.name}</p>
                                  </li>
                                ))}
                            </ul>

                            <span className="defaultTitle">
                              {details.title}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="article_contentWrapper details_wrapper">
                  <div className="article_contentContainer">
                    <div className="ShareContainer">
                      <ul className="share">
                        <li className="socialMedia">
                          <a
                            href={facebookUrl}
                            target="_blank"
                            rel="noopener"
                            alt
                            className="Button"
                            style={{ color: "#4e6294" }}
                          >
                            <div className="Icon">
                              <i className="fab fa-facebook-f"></i>
                            </div>
                          </a>
                        </li>

                        <li className="socialMedia">
                          <a
                            href={twitterUrl}
                            target="_blank"
                            className="Button"
                            style={{ color: "#4e6294" }}
                          >
                            <div className="Icon">
                              <i className="fab fa-twitter"></i>
                            </div>
                          </a>
                        </li>

                        <li className="socialMedia">
                          <a
                            href={linkedinUrl}
                            target="_blank"
                            className="Button"
                            style={{ color: "#4e6294" }}
                          >
                            <div className="Icon">
                              <i className="fab fa-linkedin"></i>
                            </div>
                          </a>
                        </li>

                        <li className="socialMedia">
                          <a
                            href={`https://api.whatsapp.com/send?text=${[
                              details.title,
                            ]} ${[url]}`}
                            target="_blank"
                            className="Button"
                            style={{ color: "#4e6294" }}
                          >
                            <div className="Icon">
                              <i className="fab fa-whatsapp"></i>
                            </div>
                          </a>
                        </li>

                        <li className="socialMedia">
                          <a
                            href={`mailto:?subject=${details.title}&body=${details.abstract}`}
                            target="_blank"
                            className="Button"
                            style={{ color: "#4e6294" }}
                          >
                            <div className="Icon">
                              <i className="far fa-envelope"></i>
                            </div>
                          </a>
                        </li>

                        <li className="socialMedia">
                          <Link
                            to="/"
                            className="Button"
                            style={{ color: "#4e6294" }}
                          >
                            <div className="Icon">
                              <i className="fab fa-tiktok"></i>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="articleInnerWrapper">
                      <div className="article_content">
                        <div className="article_Author">
                          <div className="styles_image_Author">
                            <div className="styles_ratio_img styles_fluid_img">
                              <img
                                className="
                                 
                                  styles_img_article
                                 
                                  styles_img_center
                                "
                                src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/22731000_59503fccb4.jpeg"
                                style={{ opacity: 1, visibility: "inherit" }}
                              />
                            </div>
                          </div>
                          <div>
                            <p
                              className="
                                typography_Text__21fWd
                                article_textSmall
                                themes_color
                              "
                              data-aos="zoom-in"
                              data-aos-delay="100"
                             data-aos-offset="200"
                             data-aos-once="true"
                            >
                              Author: {details.author}
                            </p>
                            <p
                              className="
                                typography_Text__21fWd
                                article_textSmall
                                themes_color
                              "
                              data-aos="zoom-in"
                              data-aos-delay="100"
                             data-aos-offset="200"
                             data-aos-once="true"
                            >
                              Translated by: {details.translator}
                            </p>
                            <p
                              className="
                                typography_Text__21fWd
                                article_publishTextSmall
                                article_content_color
                              "
                              data-aos="zoom-in"
                              data-aos-delay="100"
                             data-aos-offset="200"
                             data-aos-once="true"
                            >
                              {details.publishDate}
                            </p>
                          </div>
                        </div>
                        <div className="styles_separator "></div>

                        <div
                          className="
                            typography_Text__21fWd
                            styles_RichText
                            article_content_color
                          "
                        >
                        <div className="details" 
                        data-aos="zoom-in"
                        data-aos-delay="200"
                        data-aos-offset="300"
                        data-aos-once="true"
                        >

                        
                          <blockquote
                            dangerouslySetInnerHTML={{
                              __html: details.abstract,
                            }}
                          ></blockquote>

                          <div
                          
                            className="ContentDetails"
                            style={{ lineHeight: "20px" }}
                            dangerouslySetInnerHTML={{ __html: details.body }}
                          />
                               </div>
                          <div className="separator3"></div>
                          {/* {details.sources && details.sources.length > 0 ? (
                            <div className="">
                              <div className="">
                                <div className="sourceLabel">Sources: </div>
                                <div className="separator2"></div>
                                {details.sources.map((source) => (
                                  <div className="">
                                    <a
                                      href={source.url}
                                      className="sourceLinks"
                                    >
                                      {source.name}
                                    </a>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : null} */}
                        </div>
                      </div>
                     
                    </div>
                  </div>
                </div>

                <div className="comments" data-aos="zoom-in" data-aos-once="true">
                  <DiscussionEmbed
                    shortname="KwareTech-Comments"
                    config={{
                      url: "http://54.220.211.123:9000",
                      identifier: details.id,
                      title: details.title,
                      language: localStorage.getItem("locale"),
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </section>

        <div className="">
          

          <div className="RelatedArticlesGrid">
            <div className="article_maxWidth">
              <section className=" article_maxWidth">


                <div className="articleWrapper details_wrapper">
                  <div
                    className="
                        mobileInnerWrapper
                        articleInnerWrapper
                      "
                  >
                    <div className="">
                      <div className="">
                        <div
                          className="
                              
                            "
                          style={{ opacity: 1 }}
                        >
                          <h1
                            className="
                                details_title
                                RelatedArticle_title
                                details_titleLabel
                                themes_color
                              "
                          >
                            <div className="RelatedArticle_titleContainer">
                              <span>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    opacity: 1,
                                    transform: "translate3d(0px, 30px, -20px)",
                                  }}
                                  className="RelatedArticle_words"
                                >
                                  Other articles you don't want to miss 
                                </div>
                                
                              </span>
                            </div>


                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="details_wrapper">
                <div className="articleInnerWrapper">
                  <div
                    className="
                        RelatedArticle_CardsGrid
                        RelatedArticle_singleColumnOnTablet

                      "
                      style={{opacity:1,visibility:"visible"}}
                  >



{intersted &&
            intersted.length > 0 &&
            intersted
              .slice(0, 3)
              .map((item) => (
                <Card
                   image={item.image ? item.image : null}
                      tag={item.categories.length >= 0 ? item.categories : null}
                      title={item.title}
                      abstract={item.abstract}
                      name={item.author}
                      publishDate={item.publishDate}
                      slug={item.slug}
                      translator={item.translator ? item.translator : null}


                />
               
              ))}
                   









                  </div>
                </div>
              </div>
            </div>
          </div>





          <div
            className="
                NewsletterBanner
                
                article_maxWidth
              "
          >
            <div className="Newsletter_wrapper details_wrapper"

            >
              <div></div>
              <div></div>
              <div className="Newsletter_content">
                <h3
                  className="
                      details_title
                      Newsletter_label
                      article_textSmall
                      themes_white
                    "

                >
                  Join our Newsletter
                </h3>
                <p
                  className="
                      typography_Text__21fWd
                      article_textSmall
                      themes_white
                    "
                >
                  Get all the latest KwareTech updates, news and events.
                </p>
              </div>
              <form className="Newsletter_form">
                <input
                  className="Newsletter_formInput Newsletter_emailInput"
                  type="email"
                  name="email"
                  placeholder="Email"
                  aria-label="Email"
                  required=""
                  value=""
                />
                <div className="Newsletter_buttonContainer">
                  <div className="styles_button__1CLx_ Newsletter_buttonBg">
                   
                    <div
                      className="Newsletter_button_background Newsletter_buttonBg"
                      style={{ transform: "perspective(800px)" }}
                    >
                     
                    </div>
                    <input
                      className="
                          Newsletter_buttonLink
                          
                          styles_submitButton__Qdcr1
                        "
                      type="submit"
                      name="submit"
                      value="Submit"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
