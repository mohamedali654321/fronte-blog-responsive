import React from "react";

import './Footer.css'


function Footer() {
  const menu = [
    {
      title: "product",
      lists: [
        "Why KwareTech?",
        "Content Architecture",
        "Features",
        "Enterprise Edition",
        "Partner Program",
        "Roadmap",
        "Support",
        "Support",
        "Changelog",
      ],
    },
    {
      title: "resources",
      lists: [
        "How to get started",
        "Meet the community",
        "Tutorials",
        "API documentation",
        "GitHub repository",
        "Starters",
        "Strapi vs Wordpress",
        "The Guide to Headless CMS",
      ],
    },
    {
      title: "integration",
      lists: [
        "All integrations",
        "React CMS",
        "Next.js CMS",
        "Gatsby CMS",
        "Vue.js CMS",
        "Nuxt.js CMS",
        "Gridsome CMS",
        "Flutter CMS",
        "Hugo CMS",
        "Typescript CMS",
      ],
    },
    {
      title: "company",
      lists: ["About us", "Blog", "Careers", "Contact", "Newsroom"],
    },
  ];

  return (
    <footer class="styles_Footer__2uyP7">
      <div class="styles_FullWidthCTABanner__3bVZg">
        <div class="styles_background__3s4bX">
          <div
            class="styles_ratio__1y_8X"
            style={{ paddingBottom: "100.67114093959732%" }}
          >
            <img
              class="styles_Img__2JZ2e styles_img__1peOe styles_cover__iPq3e styles_center__1laxx"
              src="https://strapi.io/_next/static/images/05cae2bf306c44b4a82fda253514822e.svg"
              style={{ opacity: 1, visibility: "inherit" }}
            />
          </div>
        </div>
        <div class="styles_maxWidth__4Sa58">
          <div class="styles_wrapper__ucHyy">
            <div class="styles_innerWrapper__18waN">
              <h1 class="typography_Title__15mGG styles_title__3kgAs themes_dark__3hjQG">
                Unleash content.
              </h1>
              <div class="styles_actions__3Uuxg">
                <div class="styles_button__1OPuL">
                  <div class="styles_buttonContainer__3V0Xl">
                    <div class="styles_button__1CLx_ styles_white__5wklN">
                      <span
                        class="styles_shadow__3eyWi"
                        style={{ opacity: 0 }}
                      ></span>
                      <div
                        class="styles_background__2gXxd styles_white__5wklN"
                        style={{ transform: "perspective(800px)" }}
                      >
                        <div
                          class="styles_hoverCircle__Nns-N"
                          style={{
                            opacity: 0,
                            transform:
                              "perspective(15px) translate3d(0px, 0px, -90px)",
                          }}
                        ></div>
                      </div>
                      <a
                        class="styles_buttonLink__2SP9n typography_Button__3B09N"
                        alt=""
                        href="https://strapi.io/starters"
                      >
                        Starters
                      </a>
                    </div>
                  </div>
                </div>
                <div class="styles_button__1OPuL">
                  <div class="styles_buttonContainer__3V0Xl">
                    <div class="styles_button__1CLx_ styles_purple__3tT7k">
                      <span
                        class="styles_shadow__3eyWi"
                        style={{ opacity: 0 }}
                      ></span>
                      <div
                        class="styles_background__2gXxd styles_purple__3tT7k"
                        style={{ transform: "perspective(800px)" }}
                      >
                        <div
                          class="styles_hoverCircle__Nns-N"
                          style={{
                            opacity: 0,
                            transform:
                              " perspective(15px) translate3d(0px, 0px, -90px)",
                          }}
                        ></div>
                      </div>
                      <a
                        class="styles_buttonLink__2SP9n typography_Button__3B09N"
                        target="_blank"
                        rel="noopener"
                        alt=""
                        href="https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html#_1-install-strapi-and-create-a-new-project"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="styles_maxWidth__4Sa58">
        <div class="styles_wrapper__ucHyy">
          <div class="styles_content__3zgFt">
            <div class="styles_leftContent__-13Pz">
              <a
                class="styles_Logo__3ZwK8 styles_logo__3Wtms"
                target=""
                alt=""
                as="/"
                href="https://strapi.io/"
              >
                <img
                  class="styles_img__2d7oy"
                  alt="Strapi logo"
                  media="[object Object]"
                  src="/images/KwareLatest.png"
                />
              </a>
              <p class="typography_Text__21fWd styles_tagline__rXOd3 typography_legend__12cYE themes_gray__rNovr">
                " KwareTech Corporation for Trading is a Saudi Arab institution
                working in the field of systems integration specialized in
                bilingual Information Access Technologies for government
                institutions and companies. ".
              </p>
            </div>
            <nav class="styles_navigation__3QaKY">
                     {
                         menu.map(item=>(
                            <div class="styles_MenuColumn__2GuQl">
                <p class="typography_Text__21fWd styles_sectionTitle__2wEts typography_small__wcwpx themes_dark__3hjQG">
                  {item.title}
                </p>
                <ul>
                {
                    item.lists.map(list=>(
                        <li class="styles_MenuColumnLink__16PCC">
                    <a
                      class="styles_link__1cbff typography_FooterLink__TNGH_"
                      alt=""
                      href="https://strapi.io/why-strapi"
                    >
                      {list}
                    </a>
                  </li>

                    ))
                }
              
                </ul>
                </div>


                         ))
                     }


             
              
             
            </nav>
          </div>
          <div class="styles_legals__oZBy1">
            <ul class="styles_subLinks__KmUXH">
              <li class="typography_Text__21fWd styles_subLink__2wvm- typography_smaller__2CuhM themes_gray__rNovr">
                © 2021 KwareTech
              </li>
              <a
                class="styles_subLink__2wvm-"
                target="_blank"
                rel="noopener"
                alt=""
                href="https://github.com/strapi/strapi/blob/master/LICENSE"
              >
                <span class="typography_Text__21fWd styles_subLink__2wvm- typography_smaller__2CuhM themes_gray__rNovr">
                  License
                </span>
              </a>
              <a
                class="styles_subLink__2wvm-"
                target=""
                alt=""
                href="https://strapi.io/terms"
              >
                <span class="typography_Text__21fWd styles_subLink__2wvm- typography_smaller__2CuhM themes_gray__rNovr">
                  Terms
                </span>
              </a>
              <a
                class="styles_subLink__2wvm-"
                target=""
                alt=""
                href="https://strapi.io/privacy"
              >
                <span class="typography_Text__21fWd styles_subLink__2wvm- typography_smaller__2CuhM themes_gray__rNovr">
                  Privacy
                </span>
              </a>
            </ul>
            <div class="styles_SocialLinks__3hAOF">
              <p class="typography_Text__21fWd styles_text__3LtSh typography_smaller__2CuhM themes_blue-haze__9waJi">
                Join us on
              </p>
              <ul class="">
                <li class="styles_IconLink__2QdfL">
                  <a
                    class="styles_link__1-ery"
                    target="_blank"
                    rel="noopener"
                    alt=""
                    href="https://github.com/strapi"
                  >
                    <div
                      class="styles_iconWrapper__vLdI5"
                      
                    >
                      <div class="styles_icon__m53aM">
                        <div
                          class="styles_ratio__1y_8X"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            class="styles_Img__2JZ2e styles_img__1peOe styles_contain__2jMbN styles_center__1laxx"
                            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Github.colored_76e5fa27f5.svg"
                            alt="Github logo light"
                            style={{ opacity: 1, visibility: "inherit" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      class="styles_hoverIconWrapper__1rbFJ"
                      
                    >
                      <div class="styles_icon__m53aM">
                        <div
                          class="styles_ratio__1y_8X"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            class="styles_Img__2JZ2e styles_img__1peOe styles_contain__2jMbN styles_center__1laxx"
                            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Github.grey_e7381d15e3.svg"
                            alt="Github logo dark"
                            style={{ opacity: 1, visibility: "inherit" }}
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </li>


                <li class="styles_IconLink__2QdfL">
                  <a
                    class="styles_link__1-ery"
                    target="_blank"
                    rel="noopener"
                    alt=""
                    href="https://github.com/strapi"
                  >
                    <div
                      class="styles_iconWrapper__vLdI5"
                      
                    >
                      <div class="styles_icon__m53aM">
                        <div
                          class="styles_ratio__1y_8X"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            class="styles_Img__2JZ2e styles_img__1peOe styles_contain__2jMbN styles_center__1laxx"
                            
                            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Slack.grey_2158d485e2.svg"
                            alt="Github logo light"
                            style={{ opacity: 1, visibility: "inherit" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      class="styles_hoverIconWrapper__1rbFJ"
                      
                    >
                      <div class="styles_icon__m53aM">
                        <div
                          class="styles_ratio__1y_8X"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            class="styles_Img__2JZ2e styles_img__1peOe styles_contain__2jMbN styles_center__1laxx"
                            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Slack.colored_91892a9e87.svg"
                            alt="Github logo dark"
                            style={{ opacity: 1, visibility: "inherit" }}
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </li>



                <li class="styles_IconLink__2QdfL">
                  <a
                    class="styles_link__1-ery"
                    target="_blank"
                    rel="noopener"
                    alt=""
                    href="https://discord.strapi.io/"
                  >
                    <div
                      class="styles_iconWrapper__vLdI5"
                      
                    >
                      <div class="styles_icon__m53aM">
                        <div
                          class="styles_ratio__1y_8X"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            class="styles_Img__2JZ2e styles_img__1peOe styles_contain__2jMbN styles_center__1laxx"
                           
                            src=" https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Discord_e9413ca15e.svg"
                            alt="Slack logo light"
                            style={{ opacity: 1, visibility: "inherit" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      class="styles_hoverIconWrapper__1rbFJ"
                      
                    >
                      <div class="styles_icon__m53aM">
                        <div
                          class="styles_ratio__1y_8X"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            class="styles_Img__2JZ2e styles_img__1peOe styles_contain__2jMbN styles_center__1laxx"
                            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Discord_Logo_Color_39fc36da33.svg"
                            alt="Discord logo colored"
                            style={{ opacity: 1, visibility: "inherit" }}
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
               
                <li class="styles_IconLink__2QdfL">
                  <a
                    class="styles_link__1-ery"
                    target="_blank"
                    rel="noopener"
                    alt=""
                    href="https://twitter.com/strapijs"
                  >
                    <div
                      class="styles_iconWrapper__vLdI5"
                      
                    >
                      <div class="styles_icon__m53aM">
                        <div
                          class="styles_ratio__1y_8X"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            class="styles_Img__2JZ2e styles_img__1peOe styles_contain__2jMbN styles_center__1laxx"
                            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/twitter.grey_(1)_d37ec1697f.svg"
                            alt="Twitter logo grey"
                            style={{ opacity: 1, visibility: "inherit" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      class="styles_hoverIconWrapper__1rbFJ"
                      
                    >
                      <div class="styles_icon__m53aM">
                        <div
                          class="styles_ratio__1y_8X"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            class="styles_Img__2JZ2e styles_img__1peOe styles_contain__2jMbN styles_center__1laxx"
                            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Twitter.colored_f5bebe2a2e.svg"
                            alt="Twitter logo"
                            style={{ opacity: 1, visibility: "inherit" }}
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="styles_IconLink__2QdfL">
                  <a
                    class="styles_link__1-ery"
                    target="_blank"
                    rel="noopener"
                    alt=""
                    href="https://www.facebook.com/strapijs/"
                  >
                    <div
                      class="styles_iconWrapper__vLdI5"
                      
                    >
                      <div class="styles_icon__m53aM">
                        <div
                          class="styles_ratio__1y_8X"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            class="styles_Img__2JZ2e styles_img__1peOe styles_contain__2jMbN styles_center__1laxx"
                            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Facebook.grey_4a7e1fda65.svg"
                            alt="Facebook logo grey"
                            style={{ opacity: 1, visibility: "inherit" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      class="styles_hoverIconWrapper__1rbFJ"
                      
                    >
                      <div class="styles_icon__m53aM">
                        <div
                          class="styles_ratio__1y_8X"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            class="styles_Img__2JZ2e styles_img__1peOe styles_contain__2jMbN styles_center__1laxx"
                            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Facebook.colored_4d18487e06.svg"
                            alt="Facebook logo"
                            style={{ opacity: 1, visibility: "inherit" }}
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="styles_IconLink__2QdfL">
                  <a
                    class="styles_link__1-ery"
                    target="_blank"
                    rel="noopener"
                    alt=""
                    href="https://www.linkedin.com/company/strapi"
                  >
                    <div
                      class="styles_iconWrapper__vLdI5"
                      
                    >
                      <div class="styles_icon__m53aM">
                        <div
                          class="styles_ratio__1y_8X"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            class="styles_Img__2JZ2e styles_img__1peOe styles_contain__2jMbN styles_center__1laxx"
                            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/LinkedIn.grey_0a6345f7d3.svg"
                            alt="Linkedin logo grey"
                            style={{ opacity: 1, visibility: "inherit" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      class="styles_hoverIconWrapper__1rbFJ"
                      
                    >
                      <div class="styles_icon__m53aM">
                        <div
                          class="styles_ratio__1y_8X"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            class="styles_Img__2JZ2e styles_img__1peOe styles_contain__2jMbN styles_center__1laxx"
                            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/LinkedIn.colored_53e452f06f.svg"
                            alt="Linkedin logo"
                            style={{ opacity: 1, visibility: "inherit" }}
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="styles_IconLink__2QdfL">
                  <a
                    class="styles_link__1-ery"
                    target="_blank"
                    rel="noopener"
                    alt=""
                    href="https://www.instagram.com/strapijs/"
                  >
                    <div
                      class="styles_iconWrapper__vLdI5"
                      
                    >
                      <div class="styles_icon__m53aM">
                        <div
                          class="styles_ratio__1y_8X"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            class="styles_Img__2JZ2e styles_img__1peOe styles_contain__2jMbN styles_center__1laxx"
                            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/instagram.grey_c39c37e339.svg"
                            alt="Instagram logo grey"
                            style={{ opacity: 1, visibility: "inherit" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      class="styles_hoverIconWrapper__1rbFJ"
                      
                    >
                      <div class="styles_icon__m53aM">
                        <div
                          class="styles_ratio__1y_8X"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            class="styles_Img__2JZ2e styles_img__1peOe styles_contain__2jMbN styles_center__1laxx"
                            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/instagram.colored_(1)_3164692cf2.svg"
                            alt="Instagram logo"
                            style={{ opacity: 1, visibility: "inherit" }}
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
