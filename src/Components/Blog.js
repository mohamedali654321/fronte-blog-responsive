import React, { useState, useEffect } from 'react'

import axios from 'axios'
import Card from './Card'
import FilterBar from './FilterBar'
import './Blog.css'
import { Link, useHistory, useLocation } from 'react-router-dom'
import NewsLetter from './Newsletter'
export default function Blog() {

    const query = new URLSearchParams(useLocation().search);
    const [visible, setVisible] = useState(12);
    const [card, setCard] = useState([]);
    const [locale, setLocale] = useState("en");
    const history = useHistory();
    const BACKEND_URL = "http://54.220.211.123:1335"
    const endPoint = "http://54.220.211.123:1335/articles?_sort=date:desc"

    const showMoreItems = () => {
        setVisible(prevValue =>
            prevValue + 6

        );

    }




    useEffect(() => {
        axios.get("http://54.220.211.123:1335/articles?_sort=publishDate:desc&_locale=" + localStorage.getItem("locale")).
            then(async res => {
                await setCard(res.data);
                console.log(res.data)

            })
            .catch(err => console.log(err))
    }, [card, localStorage.getItem("locale")]);




    // function setLang() {
    //     setLocale(window.locales.value);
    //     history.push("/blog?_locale=" + window.locales.value);
    // }

    return (
        <div>
      <div className="styles_container__163CK">
        <div className="styles_maxWidth__4Sa58">
          <div className="styles_wrapper__ucHyy">
            <div className="styles_innerWrapper__18waN">
              <div
                className="styles_LabelTitleText__1RD_E styles_hero__3if6L styles_center__2_RcD"
                style={{ opacity: 1 }}
              >
                <h1 className="typography_Title__15mGG styles_title__1TzMX typography_large__TBB8X themes_dark__3hjQG">
                  <div className="styles_titleContainer__2TSrx">
                    <span>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          opacity: 1,
                          transform:
                            "perspective(1000px) translate3d(0px, 0px, 0px)",
                        }}
                        className="styles_word__2432z"
                      >

                                      <div class="liq-content">
                                        <h2>LibraryThings</h2>
                                        <h2>LibraryThings</h2>

                                    </div>
                        {/* Blog */}
                      </div>
                    </span>
                  </div>
                </h1>
              </div>
            </div>
          </div>
          <div className="styles_triangle__2V9Rb left">
            <div className="styles_Triangle__2-wAg left styles_bottom-left__2DonM">
              <div className="styles_wrapper__CodYq">
                <div className="styles_dots__2T1ot">
                  <div
                    className="styles_ratio__1y_8X"
                    style={{ paddingBottom: "30.927835051546392%" }}
                  >
                    <img
                      className="styles_Img__2JZ2e styles_img__1peOe styles_cover__iPq3e styles_center__1laxx"
                      src="/images/dots.svg"
                      style={{ opacity: 1, visibility: "inherit" }}
                    />
                  </div>
                </div>
                <div className="styles_image__2nN29">
                  <div
                    className="styles_ratio__1y_8X"
                    style={{ paddingBottom: "100%" }}
                  >
                    <img
                      className="styles_Img__2JZ2e styles_img__1peOe styles_cover__iPq3e styles_center__1laxx"
                      src="/images/triangle.svg"
                      style={{ opacity: 1, visibility: "inherit" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="styles_AlgoliaArticles__3DXpK">
          <div className="styles_maxWidth__4Sa58">
            <div className="styles_wrapper__ucHyy">
              <div className="styles_innerWrapper__18waN">
                <div className="styles_filterBar__jv2PA">
                  <div className="styles_multiSelectsWrapper__1WMcO">
                    <div className="styles_multiSelect__2N3Ep styles_MultiSelect__331Sv">
                      <div className="styles_buttonContainer__1rAYf styles_buttonContainer__3V0Xl">
                        <div className="styles_button__1CLx_ styles_gray__1r7Jg styles_buttonWrapper__TAxYH">
                          <span
                            className="styles_shadow__3eyWi"
                            style={{ opacity: 0 }}
                          ></span>
                          <div
                            className="styles_background__2gXxd styles_gray__1r7Jg"
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
                          <button className="styles_buttonLink__2SP9n typography_Button__3B09N styles_button__39WQl">
                            <div className="typography_Text__21fWd styles_label__1edzn typography_smaller__2CuhM themes_bay-blue__339Mw">
                              Categories
                            </div>
                            <svg
                              fill="none"
                              viewBox="0 0 10 6"
                              className="styles_arrow__2ystB"
                            >
                              <path
                                fill="#74E4A2"
                                d="M5.06 5.783L.82.299h8.481l-4.24 5.484z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>











                    









                      

                      
                    </div>
                  </div>
                  <div className="styles_InputText__450nG styles_search__2juEn withIcon">
                  
                    <input type="text" placeholder="Search" />
                    <svg
                      viewBox="0 0 14 14"
                      fill="none"
                      className="styles_icon__2MJKl"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M9.489 10.699a5.99 5.99 0 01-3.547 1.183C2.676 11.882 0 9.22 0 5.95S2.691 0 5.958 0c3.266 0 5.926 2.663 5.926 5.949a5.97 5.97 0 01-1.182 3.55L14 12.785 12.787 14l-3.298-3.301zm.669-4.766a4.211 4.211 0 00-4.216-4.22 4.248 4.248 0 00-4.23 4.236 4.225 4.225 0 004.23 4.22c2.334 0 4.216-1.9 4.216-4.236z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="styles_tagsResults__1UMb0">
                  <div className="styles_tagsWrapper__Cw-Pg"></div>
                  <p className="typography_Text__21fWd styles_results__1_39O typography_small__wcwpx themes_gray__rNovr">
                    <span>
                      Showing {visible <= card.length ? visible : card.length}{" "}
                      of {card.length} Blog Posts
                    </span>
                  </p>
                </div>
                <div
                  className="styles_CardsGrid__2pV6O styles_isList__3Xc-G"
                  style={{ opacity: 1 }}
                >
                  {card.slice(0, visible).map((item) => (
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
                <div className="styles_buttonContainer__1rP_U">
                  <div className="styles_button__1GlNg styles_buttonContainer__3V0Xl">
                    <div className="styles_button__1CLx_ styles_gray__1r7Jg">
                      <span
                        className="styles_shadow__3eyWi"
                        style={{ opacity: 0 }}
                      ></span>
                      <div
                        className="styles_background__2gXxd styles_gray__1r7Jg"
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
                      <Link
                        className="styles_buttonLink__2SP9n typography_Button__3B09N"
                        onClick={showMoreItems}
                      >
                        See more
                        <svg
                          className="styles_SmallArrow__i7hnM styles_smallArrow__25_zn styles_gray__1hLfy right"
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
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       {/* <NewsLetter/> */}
      </div>
    </div>
    )
}
