import React,{useEffect} from 'react'
import './Feature.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Feature() {
  useEffect(()=>{
    AOS.init()
  })
    return (
        
        <div class=" featureSlice featureContainer feature_maxWidth">
        <section class=" feature_gradient feature_gradient-right feature_maxWidth">
          <div class="featureWrapper featureWrapper_style">
            <div class=" featureWrapper_mobileInnerWrapper featureInnerWrapper">
              <div
                class=" featureLabelTitleText featureLabelTitleText_width featureLabelTitleText_withGradient featureLabelTitleText_center"
                style={{ opacity: 1 }}
              >
                <div class=" featureLabel featureLabelWrapper featureLabelColor"
                data-aos="zoom-in"              
          data-aos-once="true"
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
                      class=""
                    >
                      Top Features
                    </div>
                    
                  </div>
                </div>
                <h1 class=" featureTitle featureTitleWrapper featureTitle_fontSize featureTitle_color"
                 data-aos="zoom-in"              
          data-aos-once="true"
          data-aos-offset="200"
        data-aos-delay="300"
                >
                  <div class="featureTitleContainer">
                    <span>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          opacity: 1,
                          transform:
                            "perspective(1000px) translate3d(0px, 0px, 0px)",
                        }}
                        class=""
                      >
                        Build apps fast.
                      </div>
                      
                    </span>
                  </div>
                </h1>
                <div class=" featureText featureText_rich featureText_style featureText_theme featureText_fontStyle featureText_color"
                  data-aos="zoom-in"              
          data-aos-once="true"
          data-aos-offset="200"
        data-aos-delay="450"
                >
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      opacity: 1,
                      transform:
                        "perspective(1000px) translate3d(0px, 0px, 0px)",
                    }}
                    class=""
                  >
                    Building self-hosted, customizable, and performant content API has never been easier.
                  </div>
                  
                </div>
              </div>
              <ul class="featureList">
                <div
                  class="featureIconTitleText featureIcon_item"

                  data-aos="zoom-in-right"
                        data-aos-delay="200"
                        data-aos-offset="200"
                        data-aos-once="true"
                        data-aos-duration="700"
                  style={{ opacity: 1 }}
                  
                >
                  <div class="featureIcon_container">
                    <div class="featureIcon_wrapper">
                      <div
                        class="featureIcon_innerWrapper"
                        style={{
                          opacity: 1,
                          transform: "perspective(1000px)",
                        }}
                      >
                        <div class="featureIcon">
                          <div
                            class="featureIconRatio"
                            style={{
                              paddingBottom: "55.26315789473685%",
                            }}
                          >
                            <figure class="featureIcon_lottieWrapper">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 38 21"
                                width="38"
                                height="21"
                                preserveAspectRatio="xMidYMid meet"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  transform:
                                    "translate3d(0px, 0px, 0px)",
                                }}
                              >
                                <defs>
                                  <clippath id="__lottie_element_123">
                                    <rect
                                      width="38"
                                      height="21"
                                      x="0"
                                      y="0"
                                    ></rect>
                                  </clippath>
                                </defs>
                                <g clip-path="url(#__lottie_element_123)">
                                  <g
                                    transform="matrix(1,0,0,1,26.586999893188477,0.7769994735717773)"
                                    opacity="1"
                                    style={{ display: "block" }}
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,5.830999851226807,9.916000366210938)"
                                    >
                                      <path
                                        fill="rgb(128,235,255)"
                                        fill-opacity="1"
                                        d=" M-4.929999828338623,6.589000225067139 C-4.929999828338623,6.589000225067139 1.5509999990463257,-0.00800000037997961 1.5509999990463257,-0.00800000037997961 C1.5509999990463257,-0.00800000037997961 -4.929999828338623,-6.605000019073486 -4.929999828338623,-6.605000019073486 C-5.242000102996826,-6.921999931335449 -5.418000221252441,-7.355000019073486 -5.418000221252441,-7.804999828338623 C-5.418000221252441,-8.253999710083008 -5.242000102996826,-8.6850004196167 -4.929999828338623,-9.003000259399414 C-4.2789998054504395,-9.666000366210938 -3.2260000705718994,-9.666000366210938 -2.575000047683716,-9.003000259399414 C-2.575000047683716,-9.003000259399414 5.0929999351501465,-1.1990000009536743 5.0929999351501465,-1.1990000009536743 C5.744999885559082,-0.5360000133514404 5.744999885559082,0.5360000133514404 5.0929999351501465,1.1990000009536743 C5.0929999351501465,1.1990000009536743 -2.575000047683716,9.003000259399414 -2.575000047683716,9.003000259399414 C-3.2260000705718994,9.666000366210938 -4.2789998054504395,9.666000366210938 -4.929999828338623,9.003000259399414 C-5.565000057220459,8.34000015258789 -5.580999851226807,7.251999855041504 -4.929999828338623,6.589000225067139z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(1,0,0,1,-0.41300010681152344,0.7769994735717773)"
                                    opacity="1"
                                    style={{ display: "block" }}
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,5.99399995803833,9.916000366210938)"
                                    >
                                      <path
                                        fill="rgb(128,235,255)"
                                        fill-opacity="1"
                                        d=" M4.929999828338623,6.589000225067139 C4.929999828338623,6.589000225067139 -1.5509999990463257,-0.00800000037997961 -1.5509999990463257,-0.00800000037997961 C-1.5509999990463257,-0.00800000037997961 4.929999828338623,-6.605000019073486 4.929999828338623,-6.605000019073486 C5.243000030517578,-6.921999931335449 5.419000148773193,-7.355000019073486 5.419000148773193,-7.804999828338623 C5.419000148773193,-8.253999710083008 5.243000030517578,-8.6850004196167 4.929999828338623,-9.003000259399414 C4.2789998054504395,-9.666000366210938 3.2260000705718994,-9.666000366210938 2.575000047683716,-9.003000259399414 C2.575000047683716,-9.003000259399414 -5.0920000076293945,-1.1990000009536743 -5.0920000076293945,-1.1990000009536743 C-5.74399995803833,-0.5360000133514404 -5.74399995803833,0.5360000133514404 -5.0920000076293945,1.1990000009536743 C-5.0920000076293945,1.1990000009536743 2.575000047683716,9.003000259399414 2.575000047683716,9.003000259399414 C3.2260000705718994,9.666000366210938 4.2789998054504395,9.666000366210938 4.929999828338623,9.003000259399414 C5.565000057220459,8.34000015258789 5.581999778747559,7.251999855041504 4.929999828338623,6.589000225067139z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(1,0,0,1,13.5,0.6929998397827148)"
                                    opacity="0.9884535769281734"
                                    style={{ display: "block" }}
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,5.75,10)"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="miter"
                                        fill-opacity="0"
                                        stroke-miterlimit="4"
                                        stroke="rgb(59,186,210)"
                                        stroke-opacity="1"
                                        stroke-width="4"
                                        d=" M3.75,-8 C3.75,-8 -3.75,8 -3.75,8"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          display: "block",
                          textAlign: "start",
                          position: "relative",
                          opacity: 1,
                          transform: "translate(0px, 0px)",
                        }}
                      >
                        <h1  class=" featureTitle featureIcon_title featureIcon_titleFontSize featureTitle_color">
                          Open Source
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div class="featureIcon_text">
                    <div class=" featureText featureText_rich featureText_fontSize featureText_color">
                      <div
                        style={{
                          display: "block",
                          textAlign: "start",
                          position: "relative",
                          opacity: 1,
                          transform: "translate(0px, 0px)",
                        }}
                      >
                        Forever. The entire codebase is available on GitHub and maintained by hundreds of contributors.

                      </div>
                      
                    </div>
                  </div>
                </div>
                <div
                  class="featureIconTitleText featureIcon_item"
                        data-aos="zoom-in-left"
                        data-aos-delay="200"
                        data-aos-offset="200"
                        data-aos-once="true"
                        data-aos-duration="700"
                  style={{ opacity: 1 }}
                >
                  <div class="featureIcon_container">
                    <div class="featureIcon_wrapper">
                      <div
                        class="featureIcon_innerWrapper"
                        style={{
                          opacity: 1,
                          transform: "perspective(1000px)",
                        }}
                      >
                        <div class="featureIcon">
                          <div
                            class="featureIconRatio"
                            style={{
                              paddingBottom: "89.47368421052632%",
                            }}
                          >
                            <figure class="featureIcon_lottieWrapper">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 38 34"
                                width="38"
                                height="34"
                                preserveAspectRatio="xMidYMid meet"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  transform:
                                    "translate3d(0px, 0px, 0px)",
                                }}
                              >
                                <defs>
                                  <clippath id="__lottie_element_134">
                                    <rect
                                      width="38"
                                      height="34"
                                      x="0"
                                      y="0"
                                    ></rect>
                                  </clippath>
                                </defs>
                                <g clip-path="url(#__lottie_element_134)">
                                  <g
                                    transform="matrix(1,0,0,1,-0.25,0.1359996795654297)"
                                    opacity="1"
                                    style={{ display: "block" }}
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,19.25,16.58300018310547)"
                                    >
                                      <path
                                        fill="rgb(128,235,255)"
                                        fill-opacity="1"
                                        d=" M-16,-16.33300018310547 C-16,-16.33300018310547 16,-16.33300018310547 16,-16.33300018310547 C17.656999588012695,-16.33300018310547 19,-14.989999771118164 19,-13.333000183105469 C19,-13.333000183105469 19,13.333000183105469 19,13.333000183105469 C19,14.98900032043457 17.656999588012695,16.33300018310547 16,16.33300018310547 C16,16.33300018310547 -16,16.33300018310547 -16,16.33300018310547 C-17.656999588012695,16.33300018310547 -19,14.98900032043457 -19,13.333000183105469 C-19,13.333000183105469 -19,-13.333000183105469 -19,-13.333000183105469 C-19,-14.989999771118164 -17.656999588012695,-16.33300018310547 -16,-16.33300018310547z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(1,0,0,1,3.229999542236328,8.290999412536621)"
                                    opacity="1"
                                    style={{ display: "block" }}
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,15.770999908447266,10.831999778747559)"
                                    >
                                      <path
                                        fill="rgb(255,255,255)"
                                        fill-opacity="1"
                                        d=" M-15.520999908447266,-10.581999778747559 C-15.520999908447266,-10.581999778747559 15.520999908447266,-10.581999778747559 15.520999908447266,-10.581999778747559 C15.520999908447266,-10.581999778747559 15.520999908447266,9.581999778747559 15.520999908447266,9.581999778747559 C15.520999908447266,10.133999824523926 15.072999954223633,10.581999778747559 14.520999908447266,10.581999778747559 C14.520999908447266,10.581999778747559 -14.520999908447266,10.581999778747559 -14.520999908447266,10.581999778747559 C-15.072999954223633,10.581999778747559 -15.520999908447266,10.133999824523926 -15.520999908447266,9.581999778747559 C-15.520999908447266,9.581999778747559 -15.520999908447266,-10.581999778747559 -15.520999908447266,-10.581999778747559z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(1,0,0,1,8.527000427246094,14.547000885009766)"
                                    opacity="1"
                                    style={{ display: "block" }}
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,0,0)"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="miter"
                                        fill-opacity="0"
                                        stroke-miterlimit="4"
                                        stroke="rgb(128,235,255)"
                                        stroke-opacity="1"
                                        stroke-width="3"
                                        d=" M1.5,1.5 C1.5,1.5 19.44499969482422,1.5 19.44499969482422,1.5"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(1,0,0,1,8.527000427246094,20.81100082397461)"
                                    opacity="1"
                                    style={{ display: "block" }}
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,0,0)"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="miter"
                                        fill-opacity="0"
                                        stroke-miterlimit="4"
                                        stroke="rgb(190,245,255)"
                                        stroke-opacity="1"
                                        stroke-width="3"
                                        d=" M1.5,1.5 C1.5,1.5 19.44499969482422,1.5 19.44499969482422,1.5"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(1,0,0,1,2.7080001831054688,2.552000045776367)"
                                    opacity="1"
                                    style={{ display: "block" }}
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,1.75,1.75)"
                                    >
                                      <path
                                        fill="rgb(255,255,255)"
                                        fill-opacity="1"
                                        d=" M0,-1.5 C0.8289999961853027,-1.5 1.5,-0.8289999961853027 1.5,0 C1.5,0.8289999961853027 0.8289999961853027,1.5 0,1.5 C-0.8289999961853027,1.5 -1.5,0.8289999961853027 -1.5,0 C-1.5,-0.8289999961853027 -0.8289999961853027,-1.5 0,-1.5z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(1,0,0,1,7.140999794006348,2.552000045776367)"
                                    opacity="1"
                                    style={{ display: "block" }}
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,1.75,1.75)"
                                    >
                                      <path
                                        fill="rgb(255,255,255)"
                                        fill-opacity="1"
                                        d=" M0,-1.5 C0.8289999961853027,-1.5 1.5,-0.8289999961853027 1.5,0 C1.5,0.8289999961853027 0.8289999961853027,1.5 0,1.5 C-0.8289999961853027,1.5 -1.5,0.8289999961853027 -1.5,0 C-1.5,-0.8289999961853027 -0.8289999961853027,-1.5 0,-1.5z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(1,0,0,1,13.067999839782715,13.297000885009766)"
                                    opacity="1"
                                    style={{ display: "block" }}
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,2.75,2.75)"
                                    >
                                      <path
                                        fill="rgb(59,186,210)"
                                        fill-opacity="1"
                                        d=" M0,-2.5 C1.38100004196167,-2.5 2.5,-1.38100004196167 2.5,0 C2.5,1.38100004196167 1.38100004196167,2.5 0,2.5 C-1.38100004196167,2.5 -2.5,1.38100004196167 -2.5,0 C-2.5,-1.38100004196167 -1.38100004196167,-2.5 0,-2.5z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(1,0,0,1,20.523000717163086,19.56100082397461)"
                                    opacity="1"
                                    style={{ display: "block" }}
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,2.75,2.75)"
                                    >
                                      <path
                                        fill="rgb(59,186,210)"
                                        fill-opacity="1"
                                        d=" M0,-2.5 C1.38100004196167,-2.5 2.5,-1.3799999952316284 2.5,0 C2.5,1.38100004196167 1.38100004196167,2.5 0,2.5 C-1.38100004196167,2.5 -2.5,1.38100004196167 -2.5,0 C-2.5,-1.3799999952316284 -1.38100004196167,-2.5 0,-2.5z"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          display: "block",
                          textAlign: "start",
                          position: "relative",
                          opacity: 1,
                          transform: "translate(0px, 0px)",
                        }}
                      >
                        <h1 class=" featureTitle featureIcon_title featureIcon_titleFontSize featureTitle_color">
                          Customizable
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div class="featureIcon_text">
                    <div class=" featureText featureText_rich featureText_fontSize featureText_color">
                      <div
                        style={{
                          display: "block",
                          textAlign: "start",
                          position: "relative",
                          opacity: 1,
                          transform: "translate(0px, 0px)",
                        }}
                      >
                        Easily customize the admin panel as well as the API. Extend your content
                        management with custom plugins, in seconds.
                      </div>
                     
                    </div>
                  </div>
                </div>
                <div
                  class="featureIconTitleText featureIcon_item"

                  data-aos="zoom-in-right"
                        data-aos-delay="500"
                        data-aos-offset="200"
                        data-aos-once="true"
                        data-aos-duration="700"
                  style={{ opacity: 1 }}
                >
                  <div class="featureIcon_container">
                    <div class="featureIcon_wrapper">
                      <div
                        class="featureIcon_innerWrapper"
                        style={{
                          opacity: 1,
                          transform: "perspective(1000px)",
                        }}
                      >
                        <div class="featureIcon">
                          <div
                            class="featureIconRatio"
                            style={{
                              paddingBottom: "89.47368421052632%",
                            }}
                          >
                            <figure class="featureIcon_lottieWrapper">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 38 34"
                                width="38"
                                height="34"
                                preserveAspectRatio="xMidYMid meet"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  transform:
                                    "translate3d(0px, 0px, 0px)",
                                }}
                              >
                                <defs>
                                  <clippath id="__lottie_element_160">
                                    <rect
                                      width="38"
                                      height="34"
                                      x="0"
                                      y="0"
                                    ></rect>
                                  </clippath>
                                </defs>
                                <g clip-path="url(#__lottie_element_160)">
                                  <g
                                    transform="matrix(1,0,0,1,-0.25,-0.05699920654296875)"
                                    opacity="1"
                                    style={{ display: "block" }}
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,19.25,16.75)"
                                    >
                                      <path
                                        fill="rgb(128,235,255)"
                                        fill-opacity="1"
                                        d=" M-16,-16.5 C-16,-16.5 16,-16.5 16,-16.5 C17.656999588012695,-16.5 19,-15.156999588012695 19,-13.5 C19,-13.5 19,13.5 19,13.5 C19,15.156999588012695 17.656999588012695,16.5 16,16.5 C16,16.5 -16,16.5 -16,16.5 C-17.656999588012695,16.5 -19,15.156999588012695 -19,13.5 C-19,13.5 -19,-13.5 -19,-13.5 C-19,-15.156999588012695 -17.656999588012695,-16.5 -16,-16.5z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(1,0,0,1,3.75,3.9430007934570312)"
                                    opacity="1"
                                    style={{ display: "block" }}
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,15.25,12.75)"
                                    >
                                      <path
                                        fill="rgb(255,255,255)"
                                        fill-opacity="1"
                                        d=" M-15,-11.5 C-15,-12.052000045776367 -14.552000045776367,-12.5 -14,-12.5 C-14,-12.5 14,-12.5 14,-12.5 C14.553000450134277,-12.5 15,-12.052000045776367 15,-11.5 C15,-11.5 15,11.5 15,11.5 C15,12.052000045776367 14.553000450134277,12.5 14,12.5 C14,12.5 -14,12.5 -14,12.5 C-14.552000045776367,12.5 -15,12.052000045776367 -15,11.5 C-15,11.5 -15,-11.5 -15,-11.5z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    style={{ display: "block" }}
                                    transform="matrix(1,0,0,1,18.715999603271484,7.955999374389648)"
                                    opacity="1"
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,6.151000022888184,9.01099967956543)"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        fill-opacity="0"
                                        stroke="rgb(59,186,210)"
                                        stroke-opacity="1"
                                        stroke-width="3"
                                        d=" M-3.1510000228881836,6.010000228881836 C-3.1510000228881836,6.010000228881836 -1.2920000553131104,6.010000228881836 -1.2920000553131104,6.010000228881836 C-0.1860000044107437,6.010000228881836 0.7080000042915344,5.114999771118164 0.7080000042915344,4.010000228881836 C0.7080000042915344,4.010000228881836 0.7080000042915344,2.7899999618530273 0.7080000042915344,2.7899999618530273 C0.7080000042915344,2.4779999256134033 0.8550000190734863,2.181999921798706 1.1039999723434448,1.9919999837875366 C1.1039999723434448,1.9919999837875366 2.622999906539917,0.8399999737739563 2.622999906539917,0.8399999737739563 C3.1510000228881836,0.4399999976158142 3.1510000228881836,-0.3529999852180481 2.622999906539917,-0.753000020980835 C2.622999906539917,-0.753000020980835 1.1039999723434448,-1.9079999923706055 1.1039999723434448,-1.9079999923706055 C0.8550000190734863,-2.0969998836517334 0.7089999914169312,-2.3910000324249268 0.7089999914169312,-2.7039999961853027 C0.7089999914169312,-2.7039999961853027 0.7089999914169312,-4.010000228881836 0.7089999914169312,-4.010000228881836 C0.7089999914169312,-5.114999771118164 -0.1860000044107437,-6.010000228881836 -1.2910000085830688,-6.010000228881836 C-1.2910000085830688,-6.010000228881836 -3.1510000228881836,-6.010000228881836 -3.1510000228881836,-6.010000228881836"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    style={{ display: "block" }}
                                    transform="matrix(1,0,0,1,6.309000015258789,7.955999374389648)"
                                    opacity="1"
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,6.151000022888184,9.01099967956543)"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        fill-opacity="0"
                                        stroke="rgb(59,186,210)"
                                        stroke-opacity="1"
                                        stroke-width="3"
                                        d=" M3.1510000228881836,6.010000228881836 C3.1510000228881836,6.010000228881836 1.2920000553131104,6.010000228881836 1.2920000553131104,6.010000228881836 C0.18700000643730164,6.010000228881836 -0.7080000042915344,5.114999771118164 -0.7080000042915344,4.010000228881836 C-0.7080000042915344,4.010000228881836 -0.7080000042915344,2.7899999618530273 -0.7080000042915344,2.7899999618530273 C-0.7080000042915344,2.4779999256134033 -0.8550000190734863,2.181999921798706 -1.1039999723434448,1.9919999837875366 C-1.1039999723434448,1.9919999837875366 -2.622999906539917,0.8399999737739563 -2.622999906539917,0.8399999737739563 C-3.1510000228881836,0.4399999976158142 -3.1510000228881836,-0.3529999852180481 -2.622999906539917,-0.753000020980835 C-2.622999906539917,-0.753000020980835 -1.1039999723434448,-1.9079999923706055 -1.1039999723434448,-1.9079999923706055 C-0.8550000190734863,-2.0969998836517334 -0.7089999914169312,-2.3910000324249268 -0.7089999914169312,-2.7039999961853027 C-0.7089999914169312,-2.7039999961853027 -0.7089999914169312,-4.010000228881836 -0.7089999914169312,-4.010000228881836 C-0.7080000042915344,-5.114999771118164 0.18700000643730164,-6.010000228881836 1.2910000085830688,-6.010000228881836 C1.2910000085830688,-6.010000228881836 3.1510000228881836,-6.010000228881836 3.1510000228881836,-6.010000228881836"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          display: "block",
                          textAlign: "start",
                          position: "relative",
                          opacity: 1,
                          transform: "translate(0px, 0px)",
                        }}
                      >
                        <h1 class=" featureTitle featureIcon_title featureIcon_titleFontSize featureTitle_color">
                          RESTful or GraphQL
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div class="featureIcon_text">
                    <div class=" featureText featureText_rich featureText_fontSize featureText_color">
                      <div
                        style={{
                          display: "block",
                          textAlign: "start",
                          position: "relative",
                          opacity: 1,
                          transform: "translate(0px, 0px)",
                        }}
                      >
                        Consume the API from any client (React,Vue, Angular), mobile apps or even IoT devices, using REST or GraphQL.
                      </div>
                     
                    </div>
                  </div>
                </div>
                <div
                  class="featureIconTitleText featureIcon_item"

                  data-aos="zoom-in-left"
                        data-aos-delay="500"
                        data-aos-offset="200"
                        data-aos-once="true"
                        data-aos-duration="700"
                  style={{ opacity: 1 }}
                >
                  <div class="featureIcon_container">
                    <div class="featureIcon_wrapper">
                      <div
                        class="featureIcon_innerWrapper"
                        style={{
                          opacity: 1,
                          transform: "perspective(1000px)",
                        }}
                      >
                        <div class="featureIcon">
                          <div
                            class="featureIconRatio"
                            style={{
                              paddingBottom: "81.57894736842105%",
                            }}
                          >
                            <figure class="featureIcon_lottieWrapper">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 38 31"
                                width="38"
                                height="31"
                                preserveAspectRatio="xMidYMid meet"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  transform:
                                    "translate3d(0px, 0px, 0px)",
                                }}
                              >
                                <defs>
                                  <clippath id="__lottie_element_174">
                                    <rect
                                      width="38"
                                      height="31"
                                      x="0"
                                      y="0"
                                    ></rect>
                                  </clippath>
                                </defs>
                                <g clip-path="url(#__lottie_element_174)">
                                  <g
                                    transform="matrix(1,0,0,1,-0.24900054931640625,0.4069995880126953)"
                                    opacity="1"
                                    style={{ display: "block" }}
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,19.249000549316406,8.75)"
                                    >
                                      <path
                                        fill="rgb(128,235,255)"
                                        fill-opacity="1"
                                        d=" M-15.99899959564209,-8.5 C-15.99899959564209,-8.5 16.000999450683594,-8.5 16.000999450683594,-8.5 C17.658000946044922,-8.5 19.000999450683594,-7.1570000648498535 19.000999450683594,-5.5 C19.000999450683594,-5.5 19.000999450683594,5.5 19.000999450683594,5.5 C19.000999450683594,7.1570000648498535 17.658000946044922,8.5 16.000999450683594,8.5 C16.000999450683594,8.5 -15.99899959564209,8.5 -15.99899959564209,8.5 C-17.6560001373291,8.5 -18.999000549316406,7.1570000648498535 -18.999000549316406,5.5 C-18.999000549316406,5.5 -18.999000549316406,-5.5 -18.999000549316406,-5.5 C-18.999000549316406,-7.1570000648498535 -17.6560001373291,-8.5 -15.99899959564209,-8.5z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(1,0,0,1,3.6489992141723633,4.406999588012695)"
                                    opacity="1"
                                    style={{ display: "block" }}
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,15.35200023651123,4.75)"
                                    >
                                      <path
                                        fill="rgb(255,255,255)"
                                        fill-opacity="1"
                                        d=" M-15.10200023651123,-3.5 C-15.10200023651123,-4.052000045776367 -14.654000282287598,-4.5 -14.10200023651123,-4.5 C-14.10200023651123,-4.5 14.10200023651123,-4.5 14.10200023651123,-4.5 C14.654999732971191,-4.5 15.10200023651123,-4.052000045776367 15.10200023651123,-3.5 C15.10200023651123,-3.5 15.10200023651123,3.5 15.10200023651123,3.5 C15.10200023651123,4.052000045776367 14.654999732971191,4.5 14.10200023651123,4.5 C14.10200023651123,4.5 -14.10200023651123,4.5 -14.10200023651123,4.5 C-14.654000282287598,4.5 -15.10200023651123,4.052000045776367 -15.10200023651123,3.5 C-15.10200023651123,3.5 -15.10200023651123,-3.5 -15.10200023651123,-3.5z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(1,0,0,1,26.058000564575195,6.406999588012695)"
                                    opacity="1"
                                    style={{ display: "block" }}
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,2.686000108718872,2.75)"
                                    >
                                      <path
                                        fill="rgb(59,186,210)"
                                        fill-opacity="1"
                                        d=" M-0.0010000000474974513,-2.5 C1.3450000286102295,-2.5 2.436000108718872,-1.38100004196167 2.436000108718872,0 C2.436000108718872,1.38100004196167 1.3450000286102295,2.5 -0.0010000000474974513,2.5 C-1.3459999561309814,2.5 -2.436000108718872,1.38100004196167 -2.436000108718872,0 C-2.436000108718872,-1.38100004196167 -1.3459999561309814,-2.5 -0.0010000000474974513,-2.5z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(1,0,0,1,5.5970001220703125,6.406999588012695)"
                                    opacity="1"
                                    style={{ display: "block" }}
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,2.686000108718872,2.75)"
                                    >
                                      <path
                                        fill="rgb(59,186,210)"
                                        fill-opacity="1"
                                        d=" M0.4869999885559082,-2.5 C0.4869999885559082,-2.5 2.436000108718872,-2.5 2.436000108718872,-2.5 C2.436000108718872,-2.5 -0.4869999885559082,2.5 -0.4869999885559082,2.5 C-0.4869999885559082,2.5 -2.436000108718872,2.5 -2.436000108718872,2.5 C-2.436000108718872,2.5 0.4869999885559082,-2.5 0.4869999885559082,-2.5z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(1,0,0,1,9.494000434875488,6.406999588012695)"
                                    opacity="1"
                                    style={{ display: "block" }}
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,2.686000108718872,2.75)"
                                    >
                                      <path
                                        fill="rgb(59,186,210)"
                                        fill-opacity="1"
                                        d=" M0.4869999885559082,-2.5 C0.4869999885559082,-2.5 2.436000108718872,-2.5 2.436000108718872,-2.5 C2.436000108718872,-2.5 -0.4869999885559082,2.5 -0.4869999885559082,2.5 C-0.4869999885559082,2.5 -2.436000108718872,2.5 -2.436000108718872,2.5 C-2.436000108718872,2.5 0.4869999885559082,-2.5 0.4869999885559082,-2.5z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(1,0,0,1,13.391999244689941,6.406999588012695)"
                                    opacity="1"
                                    style={{ display: "block" }}
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,2.686000108718872,2.75)"
                                    >
                                      <path
                                        fill="rgb(59,186,210)"
                                        fill-opacity="1"
                                        d=" M0.4869999885559082,-2.5 C0.4869999885559082,-2.5 2.436000108718872,-2.5 2.436000108718872,-2.5 C2.436000108718872,-2.5 -0.4869999885559082,2.5 -0.4869999885559082,2.5 C-0.4869999885559082,2.5 -2.436000108718872,2.5 -2.436000108718872,2.5 C-2.436000108718872,2.5 0.4869999885559082,-2.5 0.4869999885559082,-2.5z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(1,0,0,1,-0.24900054931640625,13.406999588012695)"
                                    opacity="1"
                                    style={{ display: "block" }}
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,19.249000549316406,8.75)"
                                    >
                                      <path
                                        fill="rgb(128,235,255)"
                                        fill-opacity="1"
                                        d=" M-15.99899959564209,-8.5 C-15.99899959564209,-8.5 16.000999450683594,-8.5 16.000999450683594,-8.5 C17.658000946044922,-8.5 19.000999450683594,-7.1570000648498535 19.000999450683594,-5.5 C19.000999450683594,-5.5 19.000999450683594,5.5 19.000999450683594,5.5 C19.000999450683594,7.1570000648498535 17.658000946044922,8.5 16.000999450683594,8.5 C16.000999450683594,8.5 -15.99899959564209,8.5 -15.99899959564209,8.5 C-17.6560001373291,8.5 -18.999000549316406,7.1570000648498535 -18.999000549316406,5.5 C-18.999000549316406,5.5 -18.999000549316406,-5.5 -18.999000549316406,-5.5 C-18.999000549316406,-7.1570000648498535 -17.6560001373291,-8.5 -15.99899959564209,-8.5z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(1,0,0,1,3.6489992141723633,17.4060001373291)"
                                    opacity="1"
                                    style={{ display: "block" }}
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,15.35200023651123,4.75)"
                                    >
                                      <path
                                        fill="rgb(255,255,255)"
                                        fill-opacity="1"
                                        d=" M-15.10200023651123,-3.5 C-15.10200023651123,-4.052000045776367 -14.654000282287598,-4.5 -14.10200023651123,-4.5 C-14.10200023651123,-4.5 14.10200023651123,-4.5 14.10200023651123,-4.5 C14.654999732971191,-4.5 15.10200023651123,-4.052000045776367 15.10200023651123,-3.5 C15.10200023651123,-3.5 15.10200023651123,3.5 15.10200023651123,3.5 C15.10200023651123,4.052999973297119 14.654999732971191,4.5 14.10200023651123,4.5 C14.10200023651123,4.5 -14.10200023651123,4.5 -14.10200023651123,4.5 C-14.654000282287598,4.5 -15.10200023651123,4.052999973297119 -15.10200023651123,3.5 C-15.10200023651123,3.5 -15.10200023651123,-3.5 -15.10200023651123,-3.5z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(1,0,0,1,26.058000564575195,19.4060001373291)"
                                    opacity="1"
                                    style={{ display: "block" }}
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,2.686000108718872,2.75)"
                                    >
                                      <path
                                        fill="rgb(59,186,210)"
                                        fill-opacity="1"
                                        d=" M-0.0010000000474974513,-2.5 C1.3450000286102295,-2.5 2.436000108718872,-1.3799999952316284 2.436000108718872,0 C2.436000108718872,1.38100004196167 1.3450000286102295,2.5 -0.0010000000474974513,2.5 C-1.3459999561309814,2.5 -2.436000108718872,1.38100004196167 -2.436000108718872,0 C-2.436000108718872,-1.3799999952316284 -1.3459999561309814,-2.5 -0.0010000000474974513,-2.5z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(1,0,0,1,5.5970001220703125,19.4060001373291)"
                                    opacity="1"
                                    style={{ display: "block" }}
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,2.686000108718872,2.75)"
                                    >
                                      <path
                                        fill="rgb(59,186,210)"
                                        fill-opacity="1"
                                        d=" M0.4869999885559082,-2.5 C0.4869999885559082,-2.5 2.436000108718872,-2.5 2.436000108718872,-2.5 C2.436000108718872,-2.5 -0.4869999885559082,2.5 -0.4869999885559082,2.5 C-0.4869999885559082,2.5 -2.436000108718872,2.5 -2.436000108718872,2.5 C-2.436000108718872,2.5 0.4869999885559082,-2.5 0.4869999885559082,-2.5z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(1,0,0,1,9.494000434875488,19.4060001373291)"
                                    opacity="1"
                                    style={{ display: "block" }}
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,2.686000108718872,2.75)"
                                    >
                                      <path
                                        fill="rgb(59,186,210)"
                                        fill-opacity="1"
                                        d=" M0.4869999885559082,-2.5 C0.4869999885559082,-2.5 2.436000108718872,-2.5 2.436000108718872,-2.5 C2.436000108718872,-2.5 -0.4869999885559082,2.5 -0.4869999885559082,2.5 C-0.4869999885559082,2.5 -2.436000108718872,2.5 -2.436000108718872,2.5 C-2.436000108718872,2.5 0.4869999885559082,-2.5 0.4869999885559082,-2.5z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    transform="matrix(1,0,0,1,13.391999244689941,19.4060001373291)"
                                    opacity="1"
                                    style={{ display: "block" }}
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,2.686000108718872,2.75)"
                                    >
                                      <path
                                        fill="rgb(59,186,210)"
                                        fill-opacity="1"
                                        d=" M0.4869999885559082,-2.5 C0.4869999885559082,-2.5 2.436000108718872,-2.5 2.436000108718872,-2.5 C2.436000108718872,-2.5 -0.4869999885559082,2.5 -0.4869999885559082,2.5 C-0.4869999885559082,2.5 -2.436000108718872,2.5 -2.436000108718872,2.5 C-2.436000108718872,2.5 0.4869999885559082,-2.5 0.4869999885559082,-2.5z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    style={{ display: "none" }}
                                    transform="matrix(0.699999988079071,0,0,0.699999988079071,26.86410140991211,7.231999397277832)"
                                    opacity="0.74"
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,2.686000108718872,2.75)"
                                    >
                                      <path
                                        fill="rgb(255,255,255)"
                                        fill-opacity="1"
                                        d=" M-0.0010000000474974513,-2.5 C1.3450000286102295,-2.5 2.436000108718872,-1.38100004196167 2.436000108718872,0 C2.436000108718872,1.38100004196167 1.3450000286102295,2.5 -0.0010000000474974513,2.5 C-1.3459999561309814,2.5 -2.436000108718872,1.38100004196167 -2.436000108718872,0 C-2.436000108718872,-1.38100004196167 -1.3459999561309814,-2.5 -0.0010000000474974513,-2.5z"
                                      ></path>
                                    </g>
                                  </g>
                                  <g
                                    style={{ display: "none" }}
                                    transform="matrix(0.699999988079071,0,0,0.699999988079071,26.86410140991211,20.231000900268555)"
                                    opacity="0.27"
                                  >
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,2.686000108718872,2.75)"
                                    >
                                      <path
                                        fill="rgb(255,255,255)"
                                        fill-opacity="1"
                                        d=" M-0.0010000000474974513,-2.5 C1.3450000286102295,-2.5 2.436000108718872,-1.3799999952316284 2.436000108718872,0 C2.436000108718872,1.38100004196167 1.3450000286102295,2.5 -0.0010000000474974513,2.5 C-1.3459999561309814,2.5 -2.436000108718872,1.38100004196167 -2.436000108718872,0 C-2.436000108718872,-1.3799999952316284 -1.3459999561309814,-2.5 -0.0010000000474974513,-2.5z"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          display: "block",
                          textAlign: "start",
                          position: "relative",
                          opacity: 1,
                          transform: "translate(0px, 0px)",
                        }}
                      >
                        <h1 class=" featureTitle featureIcon_title featureIcon_titleFontSize featureTitle_color">
                          Self-hosted
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div class="featureIcon_text">
                    <div class=" featureText featureText_rich featureText_fontSize featureText_color">
                      <div
                        style={{
                          display: "block",
                          textAlign: "start",
                          position: "relative",
                          opacity: 1,
                          transform: "translate(0px, 0px)",
                        }}
                      >
                        Don’t give up on data privacy or lock yourself in. Keep control of your data and your costs at all time.
                      </div>
                      
                    </div>
                  </div>
                </div>
              </ul>
            </div>
            <div class=" featureTetris featureTetris_decoration featureTetris_color">
              <svg
                fill="none"
                viewBox="0 0 300 300"
                class="featureTetris_svg"
                style={{ transform: "rotate(0deg)" }}
              >
                <g clip-path="url(#variant-1_svg__clip0)">
                  <path
                    
                    fill="#7A4FF3"
                    d="M100 200H0v100h100V200zm100-100H100v100h100V100zM300 0H200v100h100V0z"
                  ></path>
                  <g >
                    <path
                      
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
      </div>
    )
}

export default Feature
