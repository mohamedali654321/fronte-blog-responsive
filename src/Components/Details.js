import React, { useState, useEffect } from "react";
import "./Details.css";
import { Link } from "react-router-dom";

import axios from "axios";
import NewsLetterBanner from "./NewsLetterBanner";

import ReactPlayer from "react-player";
import videoExtensions from "video-extensions";
import { DiscussionEmbed } from "disqus-react";
import "./Single.css";

import Card from "./Card";

function Single({ match }) {
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
      <div className="styles_container__163CK">
        <div className="styles_wrapper__ucHyy">
          <a
            className="styles_link__2_Dlj"
            target=""
            alt=""
            to="/blog"
            href="/blog"
          >
            <span
              className="
                  styles_ArrowLink__30wgu
                  styles_link__2_Dlj
                  purple
                  styles_reversed__3MsTn
                "
            >
              <span className="styles_container__37KUB">
                <span className="typography_Label__1knAy themes_purple__2jb4m">
                  Back to articles
                </span>
                <svg
                  className="
                      styles_SmallArrow__i7hnM
                      styles_icon__1xaT9
                      styles_purple__TTVOU
                      right
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
              styles_gradient-right__2o2Bn
              styles_footer__1UMS5
              styles_maxWidth__4Sa58
            "
        >
          {localeData.map((details) => (
            <div className="styles_wrapper__huNlp styles_wrapper__ucHyy">
              <div className="">
                <div className="styles_wrapper__ucHyy">
                  <div className="styles_innerWrapper__18waN">
                    <div className="styles_header__3Gvv7">
                      <h1
                        className="
                          typography_Title__15mGG
                          typography_large__TBB8X
                          themes_dark__3hjQG
                        "
                      >
                        {details.title}
                      </h1>
                    </div>
                  </div>
                  <div
                    className="styles_Ratio__3CRRj styles_articleCover__2vRCN"
                    style={{ paddingBottom: "62.5%" }}
                  >
                    <div className="styles_children__1-hab">
                      <div className="styles_CoverImage__2NtS5">
                        {details.coverMedia === null &&
                          details.image &&
                          details.image.url !== null &&
                          videoExtensions.includes(
                            details.image.ext.substring(1)
                          ) === true && (
                            <div className="styles_ratio__1y_8X styles_fluid__3DtuD">
                              <ReactPlayer
                                width="100%"
                                height="100%"
                                controls
                                url={`http://54.220.211.123:1335${details.image.url}`}
                                className="
                              styles_Img__2JZ2e
                              styles_img__1peOe
                              styles_cover__iPq3e
                              styles_center__1laxx
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
                            <div className="styles_ratio__1y_8X styles_fluid__3DtuD">
                              <img
                                src={BACKEND_URL + details.image.url}
                                className="
                              styles_Img__2JZ2e
                              styles_img__1peOe
                              styles_cover__iPq3e
                              styles_center__1laxx
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
                            <div className="styles_ratio__1y_8X styles_fluid__3DtuD">
                              <img
                                src={BACKEND_URL + details.coverMedia.url}
                                className="
                              styles_Img__2JZ2e
                              styles_img__1peOe
                              styles_cover__iPq3e
                              styles_center__1laxx
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
                            <div className="styles_ratio__1y_8X styles_fluid__3DtuD">
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
                              
                            "
                              />
                            </div>
                          )}

                        {!details.image && !details.coverMedia && (
                          <div className="styles_ratio__1y_8X styles_fluid__3DtuD">
                            <img
                              src="/images/default.png"
                              style={{ opacity: 1, visibility: "inherit" }}
                              className="

                              styles_Img__2JZ2e
                              styles_img__1peOe
                              styles_cover__iPq3e
                              styles_center__1laxx
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

                <div className="styles_contentWrapper__3IhP8 styles_wrapper__ucHyy">
                  <div className="styles_contentContainer__JVCxT">
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

                    <div className="styles_innerWrapper__18waN">
                      <div className="styles_content__19Gmi">
                        <div className="styles_Author__1L6by">
                          <div className="styles_image__1Q2zx">
                            <div className="styles_ratio__1y_8X styles_fluid__3DtuD">
                              <img
                                className="
                                  styles_Img__2JZ2e
                                  styles_img__1peOe
                                  styles_cover__iPq3e
                                  styles_center__1laxx
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
                                typography_small__wcwpx
                                themes_purple__2jb4m
                              "
                            >
                              Author: {details.author}
                            </p>
                            <p
                              className="
                                typography_Text__21fWd
                                typography_small__wcwpx
                                themes_purple__2jb4m
                              "
                            >
                              Translated by: {details.translator}
                            </p>
                            <p
                              className="
                                typography_Text__21fWd
                                typography_smaller__2CuhM
                                themes_gray__rNovr
                              "
                            >
                              {details.publishDate}
                            </p>
                          </div>
                        </div>
                        <div className="styles_separator__2oEjP styles_Separator__11mf1"></div>

                        <div
                          className="
                            typography_Text__21fWd
                            styles_RichText__3_pYI
                            themes_gray__rNovr
                          "
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

                          <div className="separator3"></div>
                          {details.sources && details.sources.length > 0 ? (
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
                          ) : null}
                        </div>
                      </div>
                      <div className="styles_deviceSharer__27Qa6"></div>
                    </div>
                  </div>
                </div>

                <div className="comments">
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
          

          <div className="styles_RelatedArticlesGrid__32D_C">
            <div className="styles_maxWidth__4Sa58">
              <section className="styles_gradient-right__2o2Bn styles_maxWidth__4Sa58">


                <div className="styles_wrapper__huNlp styles_wrapper__ucHyy">
                  <div
                    className="
                        styles_mobileInnerWrapper__34pIE
                        styles_innerWrapper__18waN
                      "
                  >
                    <div className="styles_headerWrapper__26l8S">
                      <div className="styles_content__18bB1">
                        <div
                          className="
                              styles_LabelTitleText__1RD_E
                              styles_center__2_RcD
                            "
                          style={{ opacity: 1 }}
                        >
                          <h1
                            className="
                                typography_Title__15mGG
                                styles_title__1TzMX
                                typography_large__TBB8X
                                themes_dark__3hjQG
                              "
                          >
                            <div className="styles_titleContainer__2TSrx">
                              <span>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    opacity: 1,
                                    transform: "translate3d(0px, 30px, -20px)",
                                  }}
                                  className="styles_word__2432z"
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
              <div className="styles_wrapper__ucHyy">
                <div className="styles_innerWrapper__18waN">
                  <div
                    className="
                        styles_CardsGrid__2pV6O
                        styles_singleColumnOnTablet__1CxJs

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
                styles_NewsletterBanner__emGYC
                styles_slice__3lIJ8
                styles_maxWidth__4Sa58
              "
          >
            <div className="styles_wrapper__3XDOm styles_wrapper__ucHyy">
              <div></div>
              <div></div>
              <div className="styles_content__2QxRq">
                <h3
                  className="
                      typography_Title__15mGG
                      styles_title__3yUXI
                      typography_small__wcwpx
                      themes_white__22kAN
                    "
                >
                  Join our Newsletter
                </h3>
                <p
                  className="
                      typography_Text__21fWd
                      typography_small__wcwpx
                      themes_white__22kAN
                    "
                >
                  Get all the latest KwareTech updates, news and events.
                </p>
              </div>
              <form className="styles_form__2eGlO">
                <input
                  className="styles_Input__Z3Wqw styles_emailInput__2GXWR"
                  type="email"
                  name="email"
                  placeholder="Email"
                  aria-label="Email"
                  required=""
                  value=""
                />
                <div className="styles_buttonContainer__3V0Xl">
                  <div className="styles_button__1CLx_ styles_purple__3tT7k">
                    <span
                      className="styles_shadow__3eyWi"
                      style={{ opacity: 0 }}
                    ></span>
                    <div
                      className="styles_background__2gXxd styles_purple__3tT7k"
                      style={{ transform: "perspective(800px)" }}
                    >
                      <div
                        className="styles_hoverCircle__Nns-N"
                        style={{
                          opacity: 0,
                          transform:
                            "perspective(15px) translate3d(0px, 0px, -90px)",
                        }}
                      ></div>
                    </div>
                    <input
                      className="
                          styles_buttonLink__2SP9n
                          typography_Button__3B09N
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

export default Single;
