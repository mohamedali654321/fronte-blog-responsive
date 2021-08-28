import React, { useEffect, useState } from "react";
import "./Steps.css";

import AOS from "aos";
import "aos/dist/aos.css";
function Steps() {
  const [page, setPage] = useState();

  window.addEventListener("scroll", () => {
    setPage(window.pageYOffset);
  });
console.log(page)
  useEffect(() => {
    AOS.init();
  });


  return (
    <div>
      <div className=" stepSlice stepGradientHeader stepContainer">
        <section className=" step_gradient step_gradient-left stepContainer">
          <div className="stepWrapper stepWrapper_style">
            <div className=" stepMobileInnerWrapper stepInnerWrapper">
              <div
                className=" stepLabelTitleText stepLabelTitleText_wrapper stepLabelTitleText_withGradient stepLabelTitleText_center"
                data-aos-delay="200"
                data-aos-duration="200"
                data-aos-offset="200"
                data-aos-once="true"
                data-aos="zoom-in"
                style={{ opacity: 1 }}
              >
                <div
                  className=" stepLabel stepLabelWrapper steplabel_color"
                  data-aos-delay="200"
                  data-aos-duration="200"
                  data-aos-offset="200"
                  data-aos-once="true"
                  data-aos="zoom-in"
                >
                  <div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        opacity: 1,
                        transform:
                          "perspective(1000px) translate3d(0px, 0px, 0px)",
                      }}
                      className=""
                    >
                      Step-by-step guide
                    </div>
                  </div>
                </div>
                <h1
                  className=" stepTitle stepTitle_wrapper stepTitle_fontSize stepTitle_color"
                  data-aos-delay="200"
                  data-aos-duration="200"
                  data-aos-offset="200"
                  data-aos-once="true"
                  data-aos="zoom-in"
                >
                  <div className="stepTitleContainer">
                    <span>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          opacity: 1,
                          transform:
                            "perspective(1000px) translate3d(0px, 0px, 0px)",
                        }}
                        className=""
                      >
                        How does it work?
                      </div>
                    </span>
                  </div>
                </h1>
                <div
                  className=" stepText stepText_style stepText_fontSize stepText_color"
                  data-aos-delay="200"
                  data-aos-duration="200"
                  data-aos-offset="200"
                  data-aos-once="true"
                  data-aos="zoom-in"
                >
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      opacity: 1,
                      transform:
                        "perspective(1000px) translate3d(0px, 0px, 0px)",
                    }}
                    className=""
                  >
                    Make a flexible data structure in 2 minutes. Use our
                    powerful features to customize your API.
                  </div>
                </div>
              </div>
            </div>
            <div className=" stepTetrisContainer stepTetris_decoration stepTetris_color">
              <svg
                fill="none"
                viewBox="0 0 300 300"
                style={{ transform: "rotate(0deg)" }}
              >
                <g clip-path="url(#variant-1_svg__clip0)">
                  <path
                    className="variant-1_svg__tetris-dark-path"
                    fill="#7A4FF3"
                    d="M100 200H0v100h100V200zm100-100H100v100h100V100zM300 0H200v100h100V0z"
                  ></path>
                  <g>
                    <path
                      className="variant-1_svg__tetris-light-path"
                      fill="#956FFF"
                      d="M200 0H100v100h100V0z"
                    ></path>
                  </g>
                </g>
                <defs>
                  <clippath id="variant-1_svg__clip0">
                    <path fill="#fff" d="M0 0h300v300H0z"></path>
                  </clippath>
                  <filter
                    id="variant-1_svg__filter0_d"
                    width="140"
                    height="140"
                    x="84"
                    y="-12"
                    color-interpolation-filters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feflood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feflood>
                    <fecolormatrix
                      in="SourceAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></fecolormatrix>
                    <feoffset dx="4" dy="8"></feoffset>
                    <fegaussianblur stdDeviation="10"></fegaussianblur>
                    <fecolormatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></fecolormatrix>
                    <feblend
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    ></feblend>
                    <feblend
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    ></feblend>
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </section>

        <div className="step_stepsWrapper stepContainer">
          <div className="step_steps">
            <div className="step_stepsAnimatedBackground">
              <div className="step_stepsInnerWrapper">
                <div
                  // className={
                  //   (page > 3420  && page < 4254 ) || (page > 5230  && page < 6205 )
                  //     ? " float-right step_stepsAssetsWrapper"
                  //     : "float-left step_stepsAssetsWrapper"
                  // }

                  className="step_stepsAssetsWrapper "
                  style={{
                    transform:
                      "translate(0%, 0px) rotate(-4e-5deg) rotateY(15deg) rotateX(9.99994deg)",
                  }}
                >
                  <div className="step_stepsBackground_Img">
                    <div
                      className="step_stepsImage_ratio"
                      style={{ paddingBottom: "77.40112994350282%" }}
                    >
                      <img
                        className=" step_stepsImage step_stepsImage_cover step_stepsimage_center"
                        src="./images/hero/hp-primary-desktop_e0dab1f509.svg"
                        alt="Illustration of desktop "
                        style={{ opacity: 1, visibility: "inherit" }}
                      />
                    </div>
                  </div>
                  <div
                    className="step_steps_secondaryAssetsWrapper"
                    style={{ transform: "translate(0%, 0px)" }}
                  >
                    <div
                   
                     className={(page > 2224 && page < 3421) ? 'step_steps_secondary secondaryImgDisplayType1' : 'step_steps_secondary  secondaryImg-notDisplayType1'}
                      // className="step_steps_secondary"
                      // style={{
                      //   opacity: 1,
                      //   transform: "translate(0px, 30%)",
                      // }}
                    >
                      <div>
                        <div
                          className="step_stepsImage_ratio"
                          style={{
                            paddingBottom: "76.98744769874477%",
                          }}
                        >
                          <img
                            className=" step_stepsImage step_stepsImage_cover step_stepsimage_center"
                            src="./images/hero/hp-step1-2D_aeea862f0b.svg"
                            alt="Illustration of the Strapi Content-type fields"
                            style={{
                              opacity: 1,
                              visibility: "inherit",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                  
                    className={(page > 3421 && page < 4241) ? 'step_steps_secondary secondaryImgDisplayType1' : 'step_steps_secondary  secondaryImg-notDisplayType1'}
                      // className="step_steps_secondary"
                      // style={{
                      //   opacity: 0,
                      //   transform: "translate(0px, 30%)",
                      // }}
                    >
                      <div>
                        <div
                          className="step_stepsImage_ratio"
                          style={{
                            paddingBottom: "76.98744769874477%",
                          }}
                        >
                          <img
                            className="step_stepsImage step_stepsImage_cover step_stepsimage_center"
                            src="./images/hero/hp-step2-2D_6729998af1.svg"
                            alt="Illustration of the Strapi Content Manager"
                            style={{
                              opacity: 1,
                              visibility: "inherit",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                    


                    className={(page > 4241 && page < 5210) ? 'step_steps_secondary secondaryImgDisplayType2' : 'step_steps_secondary  secondaryImg-notDisplayType2'}
                      // className="step_steps_secondary"
                      // style={{
                      //   opacity: 0,
                      //   transform: "translate(0px, 0%)",
                      // }}
                    >
                      <div>
                        <div
                          className="step_stepsImage_ratio"
                          style={{ paddingBottom: "92.96%" }}
                        >
                          <img
                            className=" step_stepsImage step_stepsImage_cover step_stepsimage_center"
                            src="./images/hero/hp-step3-2D_7bc731eae8.svg"
                            alt="Illustration of Partner technologies of Strapi like AWS, Next.js, React, Netlify or Node.JS"
                            style={{
                              opacity: 1,
                              visibility: "inherit",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                    

                      className={(page > 5210 && page < 6215) ? 'step_steps_secondary secondaryImgDisplayType1' : 'step_steps_secondary  secondaryImg-notDisplayType1'}

                   
                      // className="step_steps_secondary"
                      
                      // style={{
                      //   opacity: 1,
                      //   transform: "translate(0px, 30%)",
                      // }}
                    >
                      <div>
                        <div
                          className="step_stepsImage_ratio"
                          style={{
                            paddingBottom: "73.88268156424581%",
                          }}
                        >
                          <img
                            className=" step_stepsImage step_stepsImage_cover step_stepsimage_center"
                            src="./images/hero/hp-step4-2D_9ab379c7f5.svg"
                            alt="Illustration of a GraphQL request"
                            style={{
                              opacity: 1,
                              visibility: "inherit",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                  
                    className={(page > 6215 ) ? 'step_steps_secondary secondaryImgDisplayType1' : 'step_steps_secondary  secondaryImg-notDisplayType1'}
                      // className="step_steps_secondary"
                      // style={{
                      //   opacity: 1,
                      //   transform: "translate(0px, 30%)",
                      // }}
                    >
                      <div>
                        <div
                          className="step_stepsImage_ratio"
                          style={{
                            paddingBottom: "76.98744769874477%",
                          }}
                        >
                          <img
                            className=" step_stepsImage step_stepsImage_cover step_stepsimage_center"
                            src="./images/hero/hp-step5-2D_9d3fc362cc.svg"
                            alt="Illustration of the deployment options in Strapi"
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
            </div>

            <div
              className="step_StepsContainer step_StepsContentRight"
              data-aos-delay="200"
              data-aos-duration="200"
              data-aos-offset="200"
              data-aos-once="true"
              data-aos="zoom-in"
            >
              <div className="step_StepsWrapper stepWrapper_style">
                <div className="step_StepsInner" style={{ opacity: 1 }}>
                  <div className="step_StepsContent" style={{ opacity: 1 }}>
                    <p className=" stepText step_StepsNumber step_stepsnumber_fontsize stepText_color">
                      <span
                        style={{
                          opacity: 1,
                          transform: "translate(0px, 0px)",
                        }}
                      >
                        Step. 1
                      </span>
                    </p>
                    <h1 className=" stepTitle step_StepsTitleWrapper step_stepsnumber_fontsize stepTitle_color">
                      <span>
                        <div
                          className=""
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          Effortlessly create content structures that flex to
                          your needs.
                        </div>
                      </span>
                    </h1>
                    <p className=" stepText step_StepsDescription stepText_color">
                      <span>
                        <div
                          className=""
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          No matter which data structure is the best for your
                          business, you can easily define models and add
                          relations to create rich layout experiences.
                        </div>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="step_StepsAssets">
                  <div className="step_stepsassets_img">
                    <div
                      className="step_stepsImage_ratio"
                      style={{ paddingBottom: "76.98744769874477%" }}
                    >
                      <img
                        className=" step_stepsImage step_stepsImage_cover step_stepsimage_center"
                        src="./images/hero/hp-step1-2D_aeea862f0b.svg"
                        alt="Illustration of the Strapi Content-type fields"
                        style={{ opacity: 1, visibility: "inherit" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: "100%", height: 0 }}></div>
            <div
              className="step_StepsContainer contentLeft"
              data-aos-delay="200"
              data-aos-duration="200"
              data-aos-offset="200"
              data-aos-once="true"
              data-aos="zoom-in"
            >
              <div className="step_StepsWrapper stepWrapper_style">
                <div className="step_StepsInner" style={{ opacity: 1 }}>
                  <div className="step_StepsContent" style={{ opacity: 1 }}>
                    <p className=" stepText step_StepsNumber step_stepsnumber_fontsize stepText_color">
                      <span
                        style={{
                          opacity: 1,
                          transform: "translate(0px, 0px)",
                        }}
                      >
                        Step. 2
                      </span>
                    </p>
                    <h1 className=" stepTitle step_StepsTitleWrapper step_stepsnumber_fontsize stepTitle_color">
                      <span>
                        <div
                          className=""
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          Seamlessly write, edit and manage any content types.
                        </div>
                      </span>
                    </h1>
                    <p className=" stepText step_StepsDescription normal stepText_color">
                      <span>
                        <div
                          className=""
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          Once you have created your content architecture, you
                          can start telling engaging stories. Allow
                          cross-functional teams to deliver content faster no
                          matter your industries, use cases, locations, devices,
                          and channels.
                        </div>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="step_StepsAssets">
                  <div className="step_stepsassets_img">
                    <div
                      className="step_stepsImage_ratio"
                      style={{ paddingBottom: "76.98744769874477%" }}
                    >
                      <img
                        className=" step_stepsImage step_stepsImage_cover step_stepsimage_center"
                        src="./images/hero/hp-step2-2D_6729998af1.svg"
                        alt="Illustration of the Strapi Content Manager"
                        style={{ opacity: 1, visibility: "inherit" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: "100%", height: 0 }}></div>
            <div
              className="step_StepsContainer step_StepsContentRight"
              data-aos-delay="200"
              data-aos-duration="200"
              data-aos-offset="200"
              data-aos-once="true"
              data-aos="zoom-in"
            >
              <div className="step_StepsWrapper stepWrapper_style">
                <div className="step_StepsInner" style={{ opacity: 1 }}>
                  <div className="step_StepsContent" style={{ opacity: 1 }}>
                    <p className=" stepText step_StepsNumber step_stepsnumber_fontsize stepText_color">
                      <span
                        style={{
                          opacity: 1,
                          transform: "translate(0px, 0px)",
                        }}
                      >
                        Step. 3
                      </span>
                    </p>
                    <h1 className=" stepTitle step_StepsTitleWrapper step_stepsnumber_fontsize stepTitle_color">
                      <span>
                        <div
                          className=""
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          Easily build apps and digital experiences without the
                          distraction of CMS complexities.
                        </div>
                      </span>
                    </h1>
                    <p className=" stepText step_StepsDescription normal stepText_color">
                      <span>
                        <div
                          className="step_StepsLine"
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          Focus your talent on what matters. You can integrate
                          individual best-in-className services by third-party
                          vendors and connect any framework of your choice.
                        </div>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="step_StepsAssets">
                  <div className="step_stepsassets_img">
                    <div
                      className="step_stepsImage_ratio"
                      style={{ paddingBottom: "92.96%" }}
                    >
                      <img
                        className=" step_stepsImage step_stepsImage_cover step_stepsimage_center"
                        src="./images/hero/hp-step3-2D_7bc731eae8.svg"
                        alt="Illustration of Partner technologies of Strapi like AWS, Next.js, React, Netlify or Node.JS"
                        style={{ opacity: 1, visibility: "inherit" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: "100%", height: 0 }}></div>
            <div
              className="step_StepsContainer contentLeft"
              data-aos-delay="200"
              data-aos-duration="200"
              data-aos-offset="200"
              data-aos-once="true"
              data-aos="zoom-in"
            >
              <div className="step_StepsWrapper stepWrapper_style">
                <div className="step_StepsInner" style={{ opacity: 1 }}>
                  <div className="step_StepsContent" style={{ opacity: 1 }}>
                    <p className=" stepText step_StepsNumber step_stepsnumber_fontsize stepText_color">
                      <span
                        style={{
                          opacity: 1,
                          transform: "translate(0px, 0px)",
                        }}
                      >
                        Step. 4
                      </span>
                    </p>
                    <h1 className=" stepTitle step_StepsTitleWrapper step_stepsnumber_fontsize stepTitle_color">
                      <span>
                        <div
                          className="step_StepsLine"
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          Consume Strapi API from any client using REST or
                          GraphQL.
                        </div>
                      </span>
                    </h1>
                    <p className=" stepText step_StepsDescription normal stepText_color">
                      <span>
                        <div
                          className="step_StepsLine"
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          You can use a standard RESTful API or GraphQL to query
                          your content. Based on Apollo, our GraphQL plugin
                          offers a full compatibility with the whole GraphQL
                          ecosystem.
                        </div>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="step_StepsAssets">
                  <div className="step_stepsassets_img">
                    <div
                      className="step_stepsImage_ratio"
                      style={{ paddingBottom: "73.88268156424581%" }}
                    >
                      <img
                        className=" step_stepsImage step_stepsImage_cover step_stepsimage_center"
                        src="./images/hero/hp-step4-2D_9ab379c7f5.svg"
                        alt="Illustration of a GraphQL request"
                        style={{ opacity: 1, visibility: "inherit" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: "100%", height: 0 }}></div>
            <div
              className="step_StepsContainer step_StepsContentRight"
              data-aos-delay="200"
              data-aos-duration="200"
              data-aos-offset="200"
              data-aos-once="true"
              data-aos="zoom-in"
            >
              <div className="step_StepsWrapper stepWrapper_style">
                <div className="step_StepsInner" style={{ opacity: 1 }}>
                  <div className="step_StepsContent" style={{ opacity: 1 }}>
                    <p className=" stepText step_StepsNumber step_stepsnumber_fontsize stepText_color">
                      <span
                        style={{
                          opacity: 1,
                          transform: "translate(0px, 0px)",
                        }}
                      >
                        Step. 5
                      </span>
                    </p>
                    <h1 className=" stepTitle step_StepsTitleWrapper step_stepsnumber_fontsize stepTitle_color">
                      <span>
                        <div
                          className=""
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          Deploy in 1-click on Digital Ocean, AWS or Heroku.
                        </div>
                      </span>
                    </h1>
                    <p className=" stepText step_StepsDescription normal stepText_color">
                      <span>
                        <div
                          className="step_StepsLine"
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          We partner with the best hosting platforms for a
                          smooth and seamless deployment. All you have to do is
                          choose the platform and use the 1-click deploy button.
                        </div>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="step_StepsAssets">
                  <div className="step_stepsassets_img">
                    <div
                      className="step_stepsImage_ratio"
                      style={{ paddingBottom: "76.98744769874477%" }}
                    >
                      <img
                        className=" step_stepsImage step_stepsImage_cover step_stepsimage_center"
                        src="./images/hero/hp-step5-2D_9d3fc362cc.svg"
                        alt="Illustration of the deployment options in Strapi"
                        style={{ opacity: 1, visibility: "inherit" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
