import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'
import Card from '../Card/Card'

import './Blog.css'
import { Link, useHistory, useLocation } from 'react-router-dom'

import Navbar from 'kware-react-helper'
export default function Blog() {

    const query = new URLSearchParams(useLocation().search);
    const [visible, setVisible] = useState(12);
    const [card, setCard] = useState([]);
    const [locale, setLocale] = useState("en");
    const history = useHistory();
    const BACKEND_URL = "http://54.220.211.123:1335"
    const endPoint = "http://54.220.211.123:1335/articles?_sort=date:desc"
    const [categories,setCategories]=useState([]);
    const endPoints='http://54.220.211.123:1335/categories?_locale=' + localStorage.getItem("locale")

    const showMoreItems = () => {
        setVisible(prevValue =>
            prevValue + 6

        );

    }

    const [show,setShow]=useState(false);
    const showCategory =()=>{
        setShow(!show)
    }


    console.log({show})


useEffect(()=>{
  AOS.init()
})
  

    useEffect(() => {
        axios.get("http://54.220.211.123:1335/articles?_sort=publishDate:desc&_locale=" + localStorage.getItem("locale")).
            then(async res => {
                await setCard(res.data);
                console.log(res.data)

            })
            .catch(err => console.log(err))
    }, [card, localStorage.getItem("locale")]);



    
   
  

   useEffect(()=>{
       axios.get(endPoints).then(res=>{
           setCategories(res.data);
           

       }).catch(err=>console.log(err))
   },[categories,localStorage.getItem("locale")]);

   useEffect(()=>{
       document.addEventListener("mouseup",()=>{setShow(false)});
       
   })


    // function setLang() {
    //     setLocale(window.locales.value);
    //     history.push("/blog?_locale=" + window.locales.value);
    // }

    return (
        <div>
      <div className="styles_container_blog">
    
             
        <div className="styles_background_blog">
          <div className="styles_wrapper">
            <div className="styles_innerWrapper">
              <div
                className="styles_LabelTitleText_blog hero_title_blog  styles_center_align"
                style={{ opacity: 1 }}
                
               >
                <h1 className="blog_Title styles_title title-size themes_color">
                  <div className="titleContainer"
                  data-aos="zoom-in"
               data-aos-offset="200"
               data-aos-delay="300"
                  
                  
                  >
                    <span>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          opacity: 1,
                          transform:
                            "perspective(1000px) translate3d(0px, 0px, 0px)",
                        }}
                        
                      >

                                      <div class="liq-content">
                                        <h2>LibraryThings</h2>
                                        <h2>LibraryThings</h2>

                                    </div>
                        
                      </div>
                    </span>
                  </div>
                </h1>
              </div>
            </div>
          </div>
          <div className="triangle_container ">
            <div className="triangle  triangle_position">
              <div className="triangle_wrapper">
                <div className="dots_triangle">
                  <div
                    className="ratio_triangle"
                    style={{ paddingBottom: "30.927835051546392%" }}
                  >
                    {/* <img
                      className=" styles_img_triangle align_center__img"
                      src="/images/dots.svg"
                      style={{ opacity: 1, visibility: "inherit" }}
                    /> */}
                  </div>
                </div>
                <div className="styles_image">
                  <div
                    className="ratio_triangle"
                    style={{ paddingBottom: "100%" }}
                  >
                    {/* <img
                      className=" styles_img_triangle  align_center__img"
                      src="/images/triangle.svg"
                      style={{ opacity: 1, visibility: "inherit" }}
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="articles">
          <div className="styles_background_blog">
            <div className="styles_wrapper">
              <div className="styles_innerWrapper">








              



                <div className="styles_filterBar">
                  <div className="multiSelectsWrapper">
                    <div className="multiSelect multiSelect_innerWrapper">
                      <div className=" buttonContainer" >
                        <div className="styles_button__1CLx_ styles_buttons_bg buttonWrapper">
                         
                          <div
                            className="styles_background styles_buttons_bg"
                            style={{ transform: "perspective(800px)" }}
                          >
                         
                          </div>
                          <button className="buttonLink  styles_button_category" onClick={showCategory}>
                            <div className="styles_blog_text styles_blog_label styles_blog_smallText styles_blog_textColor">
                              Categories
                            </div>
                            <svg
                              fill="none"
                              viewBox="0 0 10 6"
                              className="category_arrow"
                            >
                              <path
                                fill="#74E4A2"
                                d="M5.06 5.783L.82.299h8.481l-4.24 5.484z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>

                      {
                        show ? (
                            <div className="styles-list" >
                        <div className="list-background"></div>
                        <ul className="options">
                            {
                            categories.map(cat=>(
                                <li className="item" role="option" tabIndex="0">
                                <span className="box" >
                                    <svg width="8" height="7" fill="#fff" className="styles_checkIcon">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M6.762 0L3 3.856l-1.763-1.67L0 3.423l3 2.91 5-5.096L6.762 0z"
                                            fill="#fff"
                                        ></path>
                                    </svg>
                                    
                                </span>
                               {cat.name}
                             </li>
                            ))
                            }
                           

                        </ul>


                    </div>
                        ):null
                    }
                      
                    </div>
                  </div>
                  <div className="InputText_search   searchText "
                  
                  >
                  
                    <input type="text" value="" name="search" placeholder="Search" />
                    <svg
                      viewBox="0 0 14 14"
                      fill="none"
                      className="styles_icon_search"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M9.489 10.699a5.99 5.99 0 01-3.547 1.183C2.676 11.882 0 9.22 0 5.95S2.691 0 5.958 0c3.266 0 5.926 2.663 5.926 5.949a5.97 5.97 0 01-1.182 3.55L14 12.785 12.787 14l-3.298-3.301zm.669-4.766a4.211 4.211 0 00-4.216-4.22 4.248 4.248 0 00-4.23 4.236 4.225 4.225 0 004.23 4.22c2.334 0 4.216-1.9 4.216-4.236z"
                      ></path>
                    </svg>
                  </div>
                </div>
















                <div className="tagsResults">
                  <div className="tagsWrapper"></div>
                  <p className="styles_blog_text results small_tags_text styles_blog_textColor">
                    <span>
                      Showing {visible <= card.length ? visible : card.length}{" "}
                      of {card.length} Blog Posts
                    </span>
                  </p>
                </div>
                <div
                  className="CardsGrid "
                  style={{ opacity: 1 }}
                >
                  {card.slice(0, visible).map((item,index) => (
                    <Card
                      image={item.image ? item.image : null}
                      tag={item.categories.length >= 0 ? item.categories : null}
                      title={item.title}
                      abstract={item.abstract}
                      name={item.author}
                      publishDate={item.publishDate}
                      slug={item.slug}
                      translator={item.translator ? item.translator : null}
                      index={index}
                      delay={item.id}
                    />
                  ))}
                </div>
                <div className="buttonContainer_showMore"
                 data-aos="zoom-in"
                 data-aos-offset="200"
                 data-aos-delay="200"
                 data-aos-once="true"
                >
                  <div className="button_showMore buttonContainer">
                    <div className="styles_button__1CLx_ styles_buttons_bg">
                     
                      <div
                      
                        className="styles_background styles_buttons_bg"
                        style={{ transform: "perspective(800px)" }}
                      >
                       
                      </div>
                      <Link
                        className="buttonLink "
                        onClick={showMoreItems}
                      >
                        See more
                        <svg
                          className="styles_SmallArrow SmallArrowstyles  "
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
      
      </div>
    </div>
    )
}
