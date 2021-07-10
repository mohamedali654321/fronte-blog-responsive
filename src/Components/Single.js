import React, { useState, useEffect } from "react";
import "./Details.css";
import { Link } from "react-router-dom";

import axios from "axios";
import NewsLetterBanner from "./NewsLetterBanner";

import ReactPlayer from "react-player";
import videoExtensions from "video-extensions";
import { DiscussionEmbed } from "disqus-react";
import "./Single.css";

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

  return (
    <div>
      {/* <div className="styles_container__163CK">
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
               {
            localeData.map(details =>(



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
                      <div className="styles_ratio__1y_8X styles_fluid__3DtuD">
                        <img
                          className="
                              styles_Img__2JZ2e
                              styles_img__1peOe
                              styles_cover__iPq3e
                              styles_center__1laxx
                            "
                          src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Strapi_Custom_Plugin_426765d512.jpg"
                          alt="Auth0 Provider and Strapi Tutorial"
                          style={{ opacity: 1, visibility: "inherit" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="styles_contentWrapper__3IhP8 styles_wrapper__ucHyy">
                <div className="styles_contentContainer__JVCxT">
                  <div className="styles_sharerContainer__2Z9Nh">
                    <ul className="styles_sharer__NmSoJ styles_sharer__TxMzu">
                      <li className="styles_network__2C2Bz">
                        <div
                          className="
                              typography_Label__1knAy
                              styles_shareLabel__1_6vq
                              themes_bay-blue__339Mw
                            "
                        >
                          <div className="styles_shareLabelText__offC7">
                            Share on facebook
                          </div>
                        </div>
                        <div
                          className="styles_networkContainer__CzFEY"
                          style={{ opacity: 0, transform: "scale(0, 0)" }}
                        >
                          <div className="styles_background__1cxhx"></div>
                          <a
                            className="styles_networkLink__1dDfX"
                            target="_blank"
                            rel="noopener"
                            alt=""
                            href="http://www.facebook.com/sharer.php?u=https://strapi.io/blog/auth0-provider-and-strapi-tutorial"
                          >
                            <svg
                              fill="none"
                              viewBox="0 0 8 12"
                              className="styles_networkIcon__-c-mM"
                            >
                              <path
                                fill="#4e6294"
                                d="M1.162 6.391h1.316v5.415c0 .107.086.194.193.194h2.23a.194.194 0 00.194-.194v-5.39h1.512a.194.194 0 00.193-.17l.23-1.994a.194.194 0 00-.193-.216H5.095v-1.25c0-.377.203-.567.603-.567h1.139a.194.194 0 00.194-.194V.195a.194.194 0 00-.194-.194h-1.57L5.196 0c-.273 0-1.22.053-1.967.741-.828.763-.713 1.675-.686 1.834v1.46h-1.38a.194.194 0 00-.194.194v1.969c0 .106.086.193.193.193z"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </li>
                      <li className="styles_network__2C2Bz">
                        <div
                          className="
                              typography_Label__1knAy
                              styles_shareLabel__1_6vq
                              themes_bay-blue__339Mw
                            "
                        >
                          <div className="styles_shareLabelText__offC7">
                            Share on linkedin
                          </div>
                        </div>
                        <div
                          className="styles_networkContainer__CzFEY"
                          style={{ opacity: 0, transform: "scale(0, 0)" }}
                        >
                          <div className="styles_background__1cxhx"></div>
                          <a
                            className="styles_networkLink__1dDfX"
                            target="_blank"
                            rel="noopener"
                            alt=""
                            href="http://www.linkedin.com/shareArticle?url=https://strapi.io/blog/auth0-provider-and-strapi-tutorial&amp;title=Auth0%20Provider%20&amp;%20Strapi%20Tutorial"
                          >
                            <svg
                              fill="none"
                              viewBox="0 0 12 12"
                              className="styles_networkIcon__-c-mM"
                            >
                              <path
                                fill="#4e6294"
                                d="M2.793 3.86H.383a.193.193 0 00-.193.193v7.74c0 .106.087.193.194.193h2.409a.193.193 0 00.194-.194v-7.74a.193.193 0 00-.194-.193zM1.59.012A1.59 1.59 0 000 1.6a1.59 1.59 0 001.59 1.588A1.59 1.59 0 003.178 1.6 1.59 1.59 0 001.59.012zm7.331 3.656c-.967 0-1.683.416-2.116.888v-.502a.194.194 0 00-.194-.194H4.304a.194.194 0 00-.194.194v7.739c0 .107.087.194.194.194h2.404a.194.194 0 00.193-.194v-3.83c0-1.29.35-1.792 1.25-1.792.98 0 1.058.806 1.058 1.86v3.762c0 .107.086.194.193.194h2.405a.194.194 0 00.193-.194V7.548c0-1.919-.366-3.88-3.079-3.88z"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </li>
                      <li className="styles_network__2C2Bz">
                        <div
                          className="
                              typography_Label__1knAy
                              styles_shareLabel__1_6vq
                              themes_bay-blue__339Mw
                            "
                        >
                          <div className="styles_shareLabelText__offC7">
                            Share on twitter
                          </div>
                        </div>
                        <div
                          className="styles_networkContainer__CzFEY"
                          style={{ opacity: 0, transform: "scale(0, 0)" }}
                        >
                          <div className="styles_background__1cxhx"></div>
                          <a
                            className="styles_networkLink__1dDfX"
                            target="_blank"
                            rel="noopener"
                            alt=""
                            href="http://twitter.com/intent/tweet?url=https://strapi.io/blog/auth0-provider-and-strapi-tutorial&amp;text=Auth0%20Provider%20&amp;%20Strapi%20Tutorial"
                          >
                            <svg
                              fill="none"
                              viewBox="0 0 12 10"
                              className="styles_networkIcon__-c-mM"
                            >
                              <path
                                fill="#4e6294"
                                d="M11.728 1.22a4.603 4.603 0 01-.58.21c.234-.264.413-.576.522-.917a.194.194 0 00-.283-.226 4.55 4.55 0 01-1.35.534 2.58 2.58 0 00-4.358 2.174A6.594 6.594 0 011.152.593a.194.194 0 00-.317.025 2.577 2.577 0 00.264 2.965 2.184 2.184 0 01-.345-.154.193.193 0 00-.19.002.192.192 0 00-.097.163v.034c0 .927.498 1.76 1.26 2.216a2.179 2.179 0 01-.196-.03.194.194 0 00-.22.25 2.573 2.573 0 001.887 1.727 4.56 4.56 0 01-2.436.695c-.183 0-.366-.01-.546-.032a.195.195 0 00-.205.127c-.03.085.002.18.078.229a6.95 6.95 0 003.757 1.1c2.622 0 4.263-1.236 5.178-2.274 1.14-1.293 1.794-3.006 1.794-4.698l-.003-.213a5 5 0 001.152-1.221.193.193 0 00-.239-.284z"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </li>
                      <li className="styles_network__2C2Bz">
                        <div
                          className="
                              typography_Label__1knAy
                              styles_shareLabel__1_6vq
                              themes_bay-blue__339Mw
                            "
                        >
                          <div className="styles_shareLabelText__offC7">
                            Share by email
                          </div>
                        </div>
                        <div
                          className="styles_networkContainer__CzFEY"
                          style={{ opacity: 0, transform: "scale(0, 0)" }}
                        >
                          <div className="styles_background__1cxhx"></div>
                          <a
                            className="styles_networkLink__1dDfX"
                            target="_blank"
                            rel="noopener"
                            alt=""
                            href="mailto:?subject=Auth0%20Provider%20&amp;%20Strapi%20Tutorial&amp;body=In%20this%20tutorial%20we%20will%20cover%20implementing%20authentication%20in%20Strapi%20using%20Auth0,%20a%20Strapi%20authentication%20provider.%20https://strapi.io/blog/auth0-provider-and-strapi-tutorial"
                          >
                            <svg
                              fill="none"
                              viewBox="0 0 12 10"
                              className="styles_networkIcon__-c-mM"
                            >
                              <path
                                fill="#4e6294"
                                d="M6.323 5.44a.547.547 0 01-.646 0L1.091 2.078 0 1.277V9c0 .3.244.545.545.545h10.91A.545.545 0 0012 9V1.277l-1.09.8L6.322 5.44z"
                              ></path>
                              <path
                                fill="#4e6294"
                                d="M6 4.322L11.275.453H.724L6 4.323z"
                              ></path>
                            </svg>
                          </a>
                        </div>
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
                              alt="Anumadu Moses"
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
                            Anumadu Moses
                          </p>
                          <p
                            className="
                                typography_Text__21fWd
                                typography_smaller__2CuhM
                                themes_gray__rNovr
                              "
                          >
                            July 6, 2021
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
                        <p>body</p>
                      </div>
                    </div>
                    <div className="styles_deviceSharer__27Qa6">
                      <ul className="styles_sharer__TxMzu styles_row__2XgM3">
                        <li className="styles_network__2C2Bz">
                          <div
                            className="
                                typography_Label__1knAy
                                styles_shareLabel__1_6vq
                                themes_bay-blue__339Mw
                              "
                          >
                            <div className="styles_shareLabelText__offC7">
                              Share on facebook
                            </div>
                          </div>
                          <div
                            className="styles_networkContainer__CzFEY"
                            style={{ opacity: 0, transform: "scale(0, 0)" }}
                          >
                            <div className="styles_background__1cxhx"></div>
                            <a
                              className="styles_networkLink__1dDfX"
                              target="_blank"
                              rel="noopener"
                              alt=""
                              href="http://www.facebook.com/sharer.php?u=https://strapi.io/blog/auth0-provider-and-strapi-tutorial"
                            >
                              <svg
                                fill="none"
                                viewBox="0 0 8 12"
                                className="styles_networkIcon__-c-mM"
                              >
                                <path
                                  fill="#4e6294"
                                  d="M1.162 6.391h1.316v5.415c0 .107.086.194.193.194h2.23a.194.194 0 00.194-.194v-5.39h1.512a.194.194 0 00.193-.17l.23-1.994a.194.194 0 00-.193-.216H5.095v-1.25c0-.377.203-.567.603-.567h1.139a.194.194 0 00.194-.194V.195a.194.194 0 00-.194-.194h-1.57L5.196 0c-.273 0-1.22.053-1.967.741-.828.763-.713 1.675-.686 1.834v1.46h-1.38a.194.194 0 00-.194.194v1.969c0 .106.086.193.193.193z"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </li>
                        <li className="styles_network__2C2Bz">
                          <div
                            className="
                                typography_Label__1knAy
                                styles_shareLabel__1_6vq
                                themes_bay-blue__339Mw
                              "
                          >
                            <div className="styles_shareLabelText__offC7">
                              Share on linkedin
                            </div>
                          </div>
                          <div
                            className="styles_networkContainer__CzFEY"
                            style={{ opacity: 0, transform: "scale(0, 0)" }}
                          >
                            <div className="styles_background__1cxhx"></div>
                            <a
                              className="styles_networkLink__1dDfX"
                              target="_blank"
                              rel="noopener"
                              alt=""
                              href="http://www.linkedin.com/shareArticle?url=https://strapi.io/blog/auth0-provider-and-strapi-tutorial&amp;title=Auth0%20Provider%20&amp;%20Strapi%20Tutorial"
                            >
                              <svg
                                fill="none"
                                viewBox="0 0 12 12"
                                className="styles_networkIcon__-c-mM"
                              >
                                <path
                                  fill="#4e6294"
                                  d="M2.793 3.86H.383a.193.193 0 00-.193.193v7.74c0 .106.087.193.194.193h2.409a.193.193 0 00.194-.194v-7.74a.193.193 0 00-.194-.193zM1.59.012A1.59 1.59 0 000 1.6a1.59 1.59 0 001.59 1.588A1.59 1.59 0 003.178 1.6 1.59 1.59 0 001.59.012zm7.331 3.656c-.967 0-1.683.416-2.116.888v-.502a.194.194 0 00-.194-.194H4.304a.194.194 0 00-.194.194v7.739c0 .107.087.194.194.194h2.404a.194.194 0 00.193-.194v-3.83c0-1.29.35-1.792 1.25-1.792.98 0 1.058.806 1.058 1.86v3.762c0 .107.086.194.193.194h2.405a.194.194 0 00.193-.194V7.548c0-1.919-.366-3.88-3.079-3.88z"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </li>
                        <li className="styles_network__2C2Bz">
                          <div
                            className="
                                typography_Label__1knAy
                                styles_shareLabel__1_6vq
                                themes_bay-blue__339Mw
                              "
                          >
                            <div className="styles_shareLabelText__offC7">
                              Share on twitter
                            </div>
                          </div>
                          <div
                            className="styles_networkContainer__CzFEY"
                            style={{ opacity: 0, transform: "scale(0, 0)" }}
                          >
                            <div className="styles_background__1cxhx"></div>
                            <a
                              className="styles_networkLink__1dDfX"
                              target="_blank"
                              rel="noopener"
                              alt=""
                              href="http://twitter.com/intent/tweet?url=https://strapi.io/blog/auth0-provider-and-strapi-tutorial&amp;text=Auth0%20Provider%20&amp;%20Strapi%20Tutorial"
                            >
                              <svg
                                fill="none"
                                viewBox="0 0 12 10"
                                className="styles_networkIcon__-c-mM"
                              >
                                <path
                                  fill="#4e6294"
                                  d="M11.728 1.22a4.603 4.603 0 01-.58.21c.234-.264.413-.576.522-.917a.194.194 0 00-.283-.226 4.55 4.55 0 01-1.35.534 2.58 2.58 0 00-4.358 2.174A6.594 6.594 0 011.152.593a.194.194 0 00-.317.025 2.577 2.577 0 00.264 2.965 2.184 2.184 0 01-.345-.154.193.193 0 00-.19.002.192.192 0 00-.097.163v.034c0 .927.498 1.76 1.26 2.216a2.179 2.179 0 01-.196-.03.194.194 0 00-.22.25 2.573 2.573 0 001.887 1.727 4.56 4.56 0 01-2.436.695c-.183 0-.366-.01-.546-.032a.195.195 0 00-.205.127c-.03.085.002.18.078.229a6.95 6.95 0 003.757 1.1c2.622 0 4.263-1.236 5.178-2.274 1.14-1.293 1.794-3.006 1.794-4.698l-.003-.213a5 5 0 001.152-1.221.193.193 0 00-.239-.284z"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </li>
                        <li className="styles_network__2C2Bz">
                          <div
                            className="
                                typography_Label__1knAy
                                styles_shareLabel__1_6vq
                                themes_bay-blue__339Mw
                              "
                          >
                            <div className="styles_shareLabelText__offC7">
                              Share by email
                            </div>
                          </div>
                          <div
                            className="styles_networkContainer__CzFEY"
                            style={{ opacity: 0, transform: "scale(0, 0)" }}
                          >
                            <div className="styles_background__1cxhx"></div>
                            <a
                              className="styles_networkLink__1dDfX"
                              target="_blank"
                              rel="noopener"
                              alt=""
                              href="mailto:?subject=Auth0%20Provider%20&amp;%20Strapi%20Tutorial&amp;body=In%20this%20tutorial%20we%20will%20cover%20implementing%20authentication%20in%20Strapi%20using%20Auth0,%20a%20Strapi%20authentication%20provider.%20https://strapi.io/blog/auth0-provider-and-strapi-tutorial"
                            >
                              <svg
                                fill="none"
                                viewBox="0 0 12 10"
                                className="styles_networkIcon__-c-mM"
                              >
                                <path
                                  fill="#4e6294"
                                  d="M6.323 5.44a.547.547 0 01-.646 0L1.091 2.078 0 1.277V9c0 .3.244.545.545.545h10.91A.545.545 0 0012 9V1.277l-1.09.8L6.322 5.44z"
                                ></path>
                                <path
                                  fill="#4e6294"
                                  d="M6 4.322L11.275.453H.724L6 4.323z"
                                ></path>
                              </svg>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>



                
           



              </div>
            </div>
          </div>






            ))
        }

        
          
          
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
                                    opacity: 0,
                                    transform: "translate3d(0px, 30px, -20px)",
                                  }}
                                  className="styles_word__2432z"
                                >
                                  Other
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    opacity: 0,
                                    transform: "translate3d(0px, 30px, -20px)",
                                  }}
                                  className="styles_word__2432z"
                                >
                                  posts
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    opacity: 0,
                                    transform: "translate3d(0px, 30px, -20px)",
                                  }}
                                  className="styles_word__2432z"
                                >
                                  you
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    opacity: 0,
                                    transform: "translate3d(0px, 30px, -20px)",
                                  }}
                                  className="styles_word__2432z"
                                >
                                  don't
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    opacity: 0,
                                    transform: "translate3d(0px, 30px, -20px)",
                                  }}
                                  className="styles_word__2432z"
                                >
                                  want
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    opacity: 0,
                                    transform: "translate3d(0px, 30px, -20px)",
                                  }}
                                  className="styles_word__2432z"
                                >
                                  to
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                    opacity: 0,
                                    transform: "translate3d(0px, 30px, -20px)",
                                  }}
                                  className="styles_word__2432z"
                                >
                                  miss
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
                  >
                    <div className="styles_cardContainer__2gwcO">
                      <a
                        className="
                            styles_CardWithArrowLink__2vqCa
                            styles_withLink__2s5Hl
                          "
                        target=""
                        alt=""
                        href="/blog/protected-routes-and-authentication-with-react-and-node-js"
                        style={{
                          opacity: 0,
                          transform: "translate3d(0px, 0px, -150px);",
                        }}
                      >
                        <div className="styles_backgroundContainer__2PkOb">
                          <div className="styles_background__3JWQg styles_type1__Cbdq7"></div>
                        </div>
                        <div className="styles_cardContainer__3yGHu">
                          <div
                            href="/blog/protected-routes-and-authentication-with-react-and-node-js"
                            className="
                                styles_coverImageContainer__3LJ55
                                styles_large__1LCJm
                                styles_bottom__3DIQZ
                              "
                          >
                            <div className="styles_coverImage__1pDIa">
                              <div
                                className="
                                    styles_Ratio__3CRRj
                                    styles_CardCover__1axIM
                                  "
                                style={{ paddingBbottom: "56.25%" }}
                              >
                                <div className="styles_children__1-hab">
                                  <div className="styles_CoverImage__2NtS5">
                                    <div
                                      className="
                                          styles_ratio__1y_8X
                                          styles_fluid__3DtuD
                                        "
                                    >
                                      <img
                                        className="
                                            styles_Img__2JZ2e
                                            styles_img__1peOe
                                            styles_cover__iPq3e
                                            styles_center__1laxx
                                          "
                                        src=""
                                        alt="Protected routes and Authentication with React and Node.js"
                                        style={{
                                          opacity: 0,
                                          visibility: "hidden",
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="styles_cardContent__1exJ4">
                            <div
                              className="
                                  styles_cardContainer__2gwcO
                                  styles_ListCardContent__3ljxm
                                "
                            >
                              <ul className="styles_tags__12csC"></ul>
                              <h2
                                className="
                                    typography_Title__15mGG
                                    styles_title__3GD2G
                                    typography_smaller__2CuhM
                                    themes_dark__3hjQG
                                  "
                              >
                                Protected routes and Authentication with React
                                and Node.js
                              </h2>
                              <p
                                className="
                                    typography_Text__21fWd
                                    styles_text__ZSJ0H
                                    typography_small__wcwpx
                                    themes_gray__rNovr
                                  "
                              >
                                Learn how you can protect your routes and
                                authentication with React and Nodejs.
                              </p>
                              <div
                                className="
                                    styles_Author__1L6by
                                    styles_author__12c2c
                                    styles_small__3qQTy
                                  "
                              >
                                <div className="styles_image__1Q2zx">
                                  <div
                                    className="
                                        styles_ratio__1y_8X
                                        styles_fluid__3DtuD
                                      "
                                  >
                                    <img
                                      className="
                                          styles_Img__2JZ2e
                                          styles_img__1peOe
                                          styles_cover__iPq3e
                                          styles_center__1laxx
                                        "
                                      src=""
                                      alt="Cyril Lopez"
                                      style={{
                                        opacity: 0,
                                        visibility: "hidden",
                                      }}
                                    />
                                  </div>
                                </div>
                                <div>
                                  <p
                                    className="
                                        typography_Text__21fWd
                                        typography_smaller__2CuhM
                                        themes_bay-blue__339Mw
                                      "
                                  >
                                    Cyril Lopez
                                  </p>
                                  <p
                                    className="
                                        typography_Text__21fWd
                                        typography_legend__12cYE
                                        themes_gray__rNovr
                                      "
                                  >
                                    February 21, 2018
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="styles_cardContainer__2gwcO">
                      <a
                        className="
                            styles_CardWithArrowLink__2vqCa
                            styles_withLink__2s5Hl
                          "
                        target=""
                        alt=""
                        href="/blog/learning-strapi-authentication-flows-facebook-provider"
                        style={{
                          opacity: 0,
                          transform: "translate3d(0px, 0px, -150px);",
                        }}
                      >
                        <div className="styles_backgroundContainer__2PkOb">
                          <div className="styles_background__3JWQg styles_type1__Cbdq7"></div>
                        </div>
                        <div className="styles_cardContainer__3yGHu">
                          <div
                            href="/blog/learning-strapi-authentication-flows-facebook-provider"
                            className="
                                styles_coverImageContainer__3LJ55
                                styles_large__1LCJm
                                styles_bottom__3DIQZ
                              "
                          >
                            <div className="styles_coverImage__1pDIa">
                              <div
                                className="
                                    styles_Ratio__3CRRj
                                    styles_CardCover__1axIM
                                  "
                                style={{ paddingBbottom: "56.25%" }}
                              >
                                <div className="styles_children__1-hab">
                                  <div className="styles_CoverImage__2NtS5">
                                    <div
                                      className="
                                          styles_ratio__1y_8X
                                          styles_fluid__3DtuD
                                        "
                                    >
                                      <img
                                        className="
                                            styles_Img__2JZ2e
                                            styles_img__1peOe
                                            styles_cover__iPq3e
                                            styles_center__1laxx
                                          "
                                        src=""
                                        alt="Learning Strapi Authentication Flows with the Facebook Provider"
                                        style={{
                                          opacity: 0,
                                          visibility: "hidden",
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="styles_cardContent__1exJ4">
                            <div
                              className="
                                  styles_cardContainer__2gwcO
                                  styles_ListCardContent__3ljxm
                                "
                            >
                              <ul className="styles_tags__12csC"></ul>
                              <h2
                                className="
                                    typography_Title__15mGG
                                    styles_title__3GD2G
                                    typography_smaller__2CuhM
                                    themes_dark__3hjQG
                                  "
                              >
                                Learning Strapi Authentication Flows with the
                                Facebook Provider
                              </h2>
                              <p
                                className="
                                    typography_Text__21fWd
                                    styles_text__ZSJ0H
                                    typography_small__wcwpx
                                    themes_gray__rNovr
                                  "
                              >
                                In this tutorial you will learn the
                                implementation process of Facebook as an
                                authentication provider in Strapi using Ngrok.
                              </p>
                              <div
                                className="
                                    styles_Author__1L6by
                                    styles_author__12c2c
                                    styles_small__3qQTy
                                  "
                              >
                                <div className="styles_image__1Q2zx">
                                  <div
                                    className="
                                        styles_ratio__1y_8X
                                        styles_fluid__3DtuD
                                      "
                                  >
                                    <img
                                      className="
                                          styles_Img__2JZ2e
                                          styles_img__1peOe
                                          styles_cover__iPq3e
                                          styles_center__1laxx
                                        "
                                      src=""
                                      alt="Anumadu Moses"
                                      style={{
                                        opacity: 0,
                                        visibility: "hidden",
                                      }}
                                    />
                                  </div>
                                </div>
                                <div>
                                  <p
                                    className="
                                        typography_Text__21fWd
                                        typography_smaller__2CuhM
                                        themes_bay-blue__339Mw
                                      "
                                  >
                                    Anumadu Moses
                                  </p>
                                  <p
                                    className="
                                        typography_Text__21fWd
                                        typography_legend__12cYE
                                        themes_gray__rNovr
                                      "
                                  >
                                    March 23, 2021
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="styles_cardContainer__2gwcO">
                      <a
                        className="
                            styles_CardWithArrowLink__2vqCa
                            styles_withLink__2s5Hl
                          "
                        target=""
                        alt=""
                        href="/blog/a-beginners-guide-to-authentication-and-authorization-in-strapi"
                        style={{
                          opacity: 0,
                          transform: "translate3d(0px, 0px, -150px);",
                        }}
                      >
                        <div className="styles_backgroundContainer__2PkOb">
                          <div className="styles_background__3JWQg styles_type1__Cbdq7"></div>
                        </div>
                        <div className="styles_cardContainer__3yGHu">
                          <div
                            href="/blog/a-beginners-guide-to-authentication-and-authorization-in-strapi"
                            className="
                                styles_coverImageContainer__3LJ55
                                styles_large__1LCJm
                                styles_bottom__3DIQZ
                              "
                          >
                            <div className="styles_coverImage__1pDIa">
                              <div
                                className="
                                    styles_Ratio__3CRRj
                                    styles_CardCover__1axIM
                                  "
                                style={{ paddingBbottom: "56.25%" }}
                              >
                                <div className="styles_children__1-hab">
                                  <div className="styles_CoverImage__2NtS5">
                                    <div
                                      className="
                                          styles_ratio__1y_8X
                                          styles_fluid__3DtuD
                                        "
                                    >
                                      <img
                                        className="
                                            styles_Img__2JZ2e
                                            styles_img__1peOe
                                            styles_cover__iPq3e
                                            styles_center__1laxx
                                          "
                                        src=""
                                        alt="A Beginners Guide to Authentication and Authorization in Strapi"
                                        style={{
                                          opacity: 0,
                                          visibility: "hidden",
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="styles_cardContent__1exJ4">
                            <div
                              className="
                                  styles_cardContainer__2gwcO
                                  styles_ListCardContent__3ljxm
                                "
                            >
                              <ul className="styles_tags__12csC"></ul>
                              <h2
                                className="
                                    typography_Title__15mGG
                                    styles_title__3GD2G
                                    typography_smaller__2CuhM
                                    themes_dark__3hjQG
                                  "
                              >
                                A Beginners Guide to Authentication and
                                Authorization in Strapi
                              </h2>
                              <p
                                className="
                                    typography_Text__21fWd
                                    styles_text__ZSJ0H
                                    typography_small__wcwpx
                                    themes_gray__rNovr
                                  "
                              >
                                In this beginners guide you will learn the
                                different authentication and authorization
                                systems available in Strapi, and how to create
                                roles and permissions, authenticate a user and
                                assign roles to individual users.
                              </p>
                              <div
                                className="
                                    styles_Author__1L6by
                                    styles_author__12c2c
                                    styles_small__3qQTy
                                  "
                              >
                                <div className="styles_image__1Q2zx">
                                  <div
                                    className="
                                        styles_ratio__1y_8X
                                        styles_fluid__3DtuD
                                      "
                                  >
                                    <img
                                      className="
                                          styles_Img__2JZ2e
                                          styles_img__1peOe
                                          styles_cover__iPq3e
                                          styles_center__1laxx
                                        "
                                      src=""
                                      alt="Solomon Eseme"
                                      style={{
                                        opacity: 0,
                                        visibility: "hidden",
                                      }}
                                    />
                                  </div>
                                </div>
                                <div>
                                  <p
                                    className="
                                        typography_Text__21fWd
                                        typography_smaller__2CuhM
                                        themes_bay-blue__339Mw
                                      "
                                  >
                                    Solomon Eseme
                                  </p>
                                  <p
                                    className="
                                        typography_Text__21fWd
                                        typography_legend__12cYE
                                        themes_gray__rNovr
                                      "
                                  >
                                    May 27, 2021
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
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
                  Get all the latest Strapi updates, news and events.
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
      </div> */}
    </div>
  );
}

export default Single;
