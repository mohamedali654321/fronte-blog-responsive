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
    <footer class="footerContainer">
      <div class="fullWidthBanner">
      <div class="footer_img_background">
          <div
            class="footer_imgRatio"
            style={{ paddingBottom: "100.67114093959732%" }}
          >
            <img
              class=" footerImage  "
              src="https://strapi.io/_next/static/images/05cae2bf306c44b4a82fda253514822e.svg"
              style={{ opacity: 1, visibility: "inherit" }}
            />
          </div>
        </div>
        <div class="container_maxWidth">
          <div class="wrapper">
            <div class="innerWrapper">
              <h1 class="top_section_title top_title themes_color">
                Unleash content.
              </h1>
              <div class="actions_container">
                <div class="actions_button">
                  <div class="actions_buttonContainer">
                    <div class="actions_buttonStyle start_button_bg">
                   
                      <div
                        class="action_button_background start_button_bg"
                        style={{ transform: "perspective(800px)" }}
                      >
                     
                      </div>
                      <a
                        class="action_buttonLink button_label"
                        alt=""
                        href="https://strapi.io/starters"
                      >
                        Starters
                      </a>
                    </div>
                  </div>
                </div>
                <div class="actions_button">
                  <div class="actions_buttonContainer">
                    <div class="actions_buttonStyle get_start_button_bg">
                      
                      <div
                        class="action_button_background get_start_button_bg"
                        style={{ transform: "perspective(800px)" }}
                      >
                        
                      </div>
                      <a
                        class="action_buttonLink button_label"
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
      <div class="container_maxWidth">
        <div class="wrapper">
          <div class="footer_content">
            <div class="leftContent">
              <a
                class="left_logo_style left_logo_position"
                target=""
                alt=""
                as="/"
                href="https://strapi.io/"
              >
                <img
                  class="left_logo_img"
                  
                  src="/images/KwareLatest.png"
                />
              </a>
              <p class="footer_text footer_tags footer_tags_style footer_text_color">
                " KwareTech Corporation for Trading is a Saudi Arab institution
                working in the field of systems integration specialized in
                bilingual Information Access Technologies for government
                institutions and companies. ".
              </p>
            </div>
            <nav class="navigation">
                     {
                         menu.map(item=>(
                            <div class="MenuColumn">
                <p class="footer_text sectionTitle TitleLabel themes_color">
                  {item.title}
                </p>
                <ul>
                {
                    item.lists.map(list=>(
                        <li class="MenuColumnLink">
                    <a
                      class="ItemLink FooterLinkItem"
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
          <div class="contact">
            <ul class="contact_subLinks">
              <li class="footer_text legal_subLink legal_subLink_label footer_text_color">
                © 2021 KwareTech
              </li>
              <a
                class="legal_subLink"
                target="_blank"
                rel="noopener"
                alt=""
                href="https://github.com/strapi/strapi/blob/master/LICENSE"
              >
                <span class="footer_text legal_subLink legal_subLink_label footer_text_color">
                  License
                </span>
              </a>
              <a
                class="legal_subLink"
                target=""
                alt=""
                href="https://strapi.io/terms"
              >
                <span class="footer_text legal_subLink legal_subLink_label footer_text_color">
                  Terms
                </span>
              </a>
              <a
                class="legal_subLink"
                target=""
                alt=""
                href="https://strapi.io/privacy"
              >
                <span class="footer_text legal_subLink legal_subLink_label footer_text_color">
                  Privacy
                </span>
              </a>
            </ul>
            <div class="SocialLinks">
              <p class="footer_text styles_text__3LtSh legal_subLink_label themes_social_color">
                Join us on
              </p>
              <ul class="">
                <li class="IconLink">
                  <a
                    class="styles_link_social"
                    target="_blank"
                    rel="noopener"
                    alt=""
                    href="https://github.com/strapi"
                  >
                    <div
                      class="iconWrapper"
                      
                    >
                      <div class="styles_icon_social">
                        <div
                          class="footer-ratio"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            class="footer-img footer-img-styles styles_contain_social align_center"
                            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Github.colored_76e5fa27f5.svg"
                            alt="Github logo light"
                            style={{ opacity: 1, visibility: "inherit" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      class="hoverIconWrapper"
                      
                    >
                      <div class="styles_icon_social">
                        <div
                          class="footer-ratio"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            class="footer-img footer-img-styles styles_contain_social align_center"
                            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Github.grey_e7381d15e3.svg"
                            alt="Github logo dark"
                            style={{ opacity: 1, visibility: "inherit" }}
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </li>


                <li class="IconLink">
                  <a
                    class="styles_link_social"
                    target="_blank"
                    rel="noopener"
                    alt=""
                    href="https://github.com/strapi"
                  >
                    <div
                      class="iconWrapper"
                      
                    >
                      <div class="styles_icon_social">
                        <div
                          class="footer-ratio"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            class="footer-img footer-img-styles styles_contain_social align_center"
                            
                            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Slack.grey_2158d485e2.svg"
                            alt="Github logo light"
                            style={{ opacity: 1, visibility: "inherit" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      class="hoverIconWrapper"
                      
                    >
                      <div class="styles_icon_social">
                        <div
                          class="footer-ratio"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            class="footer-img footer-img-styles styles_contain_social align_center"
                            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Slack.colored_91892a9e87.svg"
                            alt="Github logo dark"
                            style={{ opacity: 1, visibility: "inherit" }}
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </li>



                <li class="IconLink">
                  <a
                    class="styles_link_social"
                    target="_blank"
                    rel="noopener"
                    alt=""
                    href="https://discord.strapi.io/"
                  >
                    <div
                      class="iconWrapper"
                      
                    >
                      <div class="styles_icon_social">
                        <div
                          class="footer-ratio"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            class="footer-img footer-img-styles styles_contain_social align_center"
                           
                            src=" https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Discord_e9413ca15e.svg"
                            alt="Slack logo light"
                            style={{ opacity: 1, visibility: "inherit" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      class="hoverIconWrapper"
                      
                    >
                      <div class="styles_icon_social">
                        <div
                          class="footer-ratio"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            class="footer-img footer-img-styles styles_contain_social align_center"
                            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Discord_Logo_Color_39fc36da33.svg"
                            alt="Discord logo colored"
                            style={{ opacity: 1, visibility: "inherit" }}
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
               
                <li class="IconLink">
                  <a
                    class="styles_link_social"
                    target="_blank"
                    rel="noopener"
                    alt=""
                    href="https://twitter.com/strapijs"
                  >
                    <div
                      class="iconWrapper"
                      
                    >
                      <div class="styles_icon_social">
                        <div
                          class="footer-ratio"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            class="footer-img footer-img-styles styles_contain_social align_center"
                            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/twitter.grey_(1)_d37ec1697f.svg"
                            alt="Twitter logo grey"
                            style={{ opacity: 1, visibility: "inherit" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      class="hoverIconWrapper"
                      
                    >
                      <div class="styles_icon_social">
                        <div
                          class="footer-ratio"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            class="footer-img footer-img-styles styles_contain_social align_center"
                            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Twitter.colored_f5bebe2a2e.svg"
                            alt="Twitter logo"
                            style={{ opacity: 1, visibility: "inherit" }}
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="IconLink">
                  <a
                    class="styles_link_social"
                    target="_blank"
                    rel="noopener"
                    alt=""
                    href="https://www.facebook.com/strapijs/"
                  >
                    <div
                      class="iconWrapper"
                      
                    >
                      <div class="styles_icon_social">
                        <div
                          class="footer-ratio"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            class="footer-img footer-img-styles styles_contain_social align_center"
                            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Facebook.grey_4a7e1fda65.svg"
                            alt="Facebook logo grey"
                            style={{ opacity: 1, visibility: "inherit" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      class="hoverIconWrapper"
                      
                    >
                      <div class="styles_icon_social">
                        <div
                          class="footer-ratio"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            class="footer-img footer-img-styles styles_contain_social align_center"
                            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Facebook.colored_4d18487e06.svg"
                            alt="Facebook logo"
                            style={{ opacity: 1, visibility: "inherit" }}
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="IconLink">
                  <a
                    class="styles_link_social"
                    target="_blank"
                    rel="noopener"
                    alt=""
                    href="https://www.linkedin.com/company/strapi"
                  >
                    <div
                      class="iconWrapper"
                      
                    >
                      <div class="styles_icon_social">
                        <div
                          class="footer-ratio"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            class="footer-img footer-img-styles styles_contain_social align_center"
                            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/LinkedIn.grey_0a6345f7d3.svg"
                            alt="Linkedin logo grey"
                            style={{ opacity: 1, visibility: "inherit" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      class="hoverIconWrapper"
                      
                    >
                      <div class="styles_icon_social">
                        <div
                          class="footer-ratio"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            class="footer-img footer-img-styles styles_contain_social align_center"
                            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/LinkedIn.colored_53e452f06f.svg"
                            alt="Linkedin logo"
                            style={{ opacity: 1, visibility: "inherit" }}
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="IconLink">
                  <a
                    class="styles_link_social"
                    target="_blank"
                    rel="noopener"
                    alt=""
                    href="https://www.instagram.com/strapijs/"
                  >
                    <div
                      class="iconWrapper"
                      
                    >
                      <div class="styles_icon_social">
                        <div
                          class="footer-ratio"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            class="footer-img footer-img-styles styles_contain_social align_center"
                            src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/instagram.grey_c39c37e339.svg"
                            alt="Instagram logo grey"
                            style={{ opacity: 1, visibility: "inherit" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      class="hoverIconWrapper"
                      
                    >
                      <div class="styles_icon_social">
                        <div
                          class="footer-ratio"
                          style={{ paddingBottom: "100%" }}
                        >
                          <img
                            class="footer-img footer-img-styles styles_cover__iPq3e styles_contain_social align_center"
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
