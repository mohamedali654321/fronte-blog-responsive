import React,{useEffect,useState} from "react";
import ReviewCard from "../ReviewCard/ReviewCard";

import SlideCard from '../SlideCard/SlideCard'
import "./Review.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

import AOS from 'aos'
import 'aos/dist/aos.css'

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

function Review() {
  const [visible, setVisible] = useState(3);
useEffect(()=>{
  setVisible(prevValue =>
    prevValue + 3

);

},[])


useEffect(()=>{
  AOS.init()
})

  const reviewCard = [
    {
      image: "./images/hero/societe-generale_2219adc9d6.svg",
      text: " Strapi has turned out to be a great choice so far: technical setup was really quick, and in a few days we were able to have a drafted site up & running, leveraging Strapi main  functionalities.",
      authorImg: "./images/hero/jerome_chauveau_723cb44e8e.png",
      authorName: "Jérôme Chauveau",
      authorJob: " DevOps Team Lead",
    },
    {
      image: "./images/hero/Rakuten_Global_Brand_Logo_398dd892a4.svg",
      text: " Our partnership with the Strapi team  enables us to give more flexibility and velocity to our product, marketing & customer care teams to manage content on the platform",
      authorImg: "./images/hero/1609523385163_b6daf00039.jpeg",
      authorName: "Francois Duprat",
      authorJob: " CPO",
    },
    {
      image: "./images/hero/Gatsby_Logo_a18a94b8a4.svg",
      text: "Developers today often choose between  open-source and cloud headless CMSs.Strapi combines the best of both. It's low-cost, customizable, and portable; it also has a great API, is scalable, and easy to set up.",
      authorImg: "./images/hero/1619033635036_3bcb11b0b5.jpeg",
      authorName: "Sam Bhagwat",
      authorJob: " Co-founder",
    },
    {
      image: "./images/hero/techcrunch-logo_4dc5e2a783.png",
      text: "Anybody can download Strapi and run it on their own server. You can then develop your front end, fetch content in your mobile app using the Strapi API and more.",
      authorImg: "./images/hero/qpg_UE_Wc_P_400x400_aec4474b43.jpeg",
      authorName: "Romain Dillet",
      authorJob: " Senior Writer",
    },
    {
      image: "./images/hero/Sans_titre_1_3588d4070e.png",
      text: "With Strapi Enterprise Edition, we've been able to ship new products to market in times I haven't experienced elsewhere.",
      authorImg: "./images/hero/1590162816988_fc592502de.jpeg",
      authorName: "David Lush",
      authorJob: " CTO",
    },
    {
      image: "./images/hero/vercel_logotype_dark_bdcc70f85c.png",
      text: "Strapi and Next.js both build on the same philosophy: open source is the path to success. Combine them with Vercel deployment and you have a stack with virtually infinite scalability, global performance, and security.",
      authorImg: "./images/hero/1549659251156_5e6d212538.jpeg",
      authorName: "Guillermo Rauch",
      authorJob: " CEO",
    },
    {
      image: "./images/hero/Erlkoenig_Logo_f4c1faea3b.png",
      text: "Strapi gives us a data-centric approach so that we can automize 100% of processes on the platform. It's a great tool to develop centralized datahubs which serve content to different channels.",
      authorImg:
        "./images/hero/Dominic_Land_1_38c4fd2c50_40835a8f8b_e37b53eaed.jpg",
      authorName: "Dominic Land",
      authorJob: " CEO",
    },
    {
      image: "./images/hero/nuxtjs_typo_6f120446e7.svg",
      text: "Strapi is more than a CMS, it gives a strong base for an API with a beautiful admin UI. A match in heaven combined with NuxtJS.",
      authorImg: "./images/hero/1537389178113_e1af7ef3a3.jpeg",
      authorName: "Sébastien Chopin",
      authorJob: " Founder",
    },
  ];

  const loop = [1, 2, 3];

  return (
    <div>
      <div class="review_slice reviewContainer">
        <div class=" reviewGradientHeader review_fullWidth review_maxWidth">
          <section class=" reviewGradient reviewGradient-center reviewGradient-fullWidth review_maxWidth">
            <div class="reviewWrapper reviewWrapper_style">
              <div class="reviewSubWrapper reviewWrapper_style">
                <div class=" reviewMobileInnerWrapper reviewInnerWrapper">
                  <div
                    class=" reviewLabelTitleText reviewLabelTitleText_maxWidth reviewLabelTitleText_withGradient reviewLabelTitleText_center"
                  
                    style={{ opacity: 1 }}
                  >
                    <div class=" reviewLabel reviewLabel_style reviewLabel_color"
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
                          class=""
                        >
                          Reviews
                        </div>
                      </div>
                    </div>
                    <h1 class=" reviewTitle reviewTitleWrapper reviewTitle_fontSize reviewTitle_color"

data-aos-delay="400"
                    data-aos-duration="200"
                    data-aos-offset="200"
          data-aos-once="true"
          data-aos="zoom-in"
                    
                    >
                      <div class="reviewTitleContainer">
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
                            Here’s what people have to say about us.
                          </div>
                        </span>
                      </div>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div class="reviewSlider reviewWrapper_style">
            <div class="stylesCardGrid">
              <div class="stylesCardGrid_column ">
                {reviewCard.slice(0, 3).map((card) => (
                  <ReviewCard
                    image={card.image}
                    text={card.text}
                    authorImg={card.authorImg}
                    authorName={card.authorName}
                    authorJob={card.authorJob}
                  />
                ))}
              </div>

              <div class="stylesCardGrid_column ">
                {reviewCard.slice(3, 6).map((card) => (
                  <ReviewCard
                    image={card.image}
                    text={card.text}
                    authorImg={card.authorImg}
                    authorName={card.authorName}
                    authorJob={card.authorJob}
                  />
                ))}
              </div>

              <div class="stylesCardGrid_column ">
                {reviewCard.slice(6, 9).map((card) => (
                  <ReviewCard
                    image={card.image}
                    text={card.text}
                    authorImg={card.authorImg}
                    authorName={card.authorName}
                    authorJob={card.authorJob}
                  />
                ))}
              </div>
            </div>
          </div>

          <div
            class="reviewSlider_responsive reviewslider_responsive_style"
            style={{ opacity: 1, height: "389px" }}
          >
            <div class="reviewSlider_itemsContainer">
              <div>
                <div
                  class="reviewSlider_itemsWrapper"
                  style={{ marginTop: "-40px" }}
                >
                  <Swiper
                    spaceBetween={60}
                    centeredSlides={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    className=""
                  >
                    {reviewCard.map((card) => (
                      <SwiperSlide>
                        <SlideCard
                          image={card.image}
                          text={card.text}
                          authorImg={card.authorImg}
                          authorName={card.authorName}
                          authorJob={card.authorJob}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
