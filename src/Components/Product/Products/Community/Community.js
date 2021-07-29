import React,{useEffect} from "react";
import "./Community.css";
import CommunityLink from "./CommunityLink/CommunityLink";
import SocialCard from "./SocialCard/SocialCard";
import SocialNewsLetter from "./SocialNewsLetter/SocialNewsLetter";
import AOS from 'aos'
import 'aos/dist/aos.css'
function Community() {
  useEffect(()=>{
    AOS.init()
  })
  const CommuniesLink = [
    {
      title: "Discord",
      text: "Connect in real time with other Strapi users",
      icon: "./images/products/iconfinder_discord_3069758_1_1_18c962b4c9_b698a303d6.svg",
    },
    {
      title: "Forum",
      text: "Find answers and ask questions to the community",
      icon: "./images/products/forum_14cfcb6fc1_3d87b46985.png",
    },
    {
      title: "Github",
      text: "Where it all happens",
      icon: "./images/products/github_a0fb0e8472_2f1a9ca3d9.png",
    },
    {
      title: "Twitter",
      text: "Stay up to date with the latest news",
      icon: "./images/products/twitter_4117b0ebb6_8167d31c10.png",
    },
  ];
  const socialCards = [
    {
      title: "Documentation",
      icon: "./images/products/book_icon_80d2c538d0_7c87cfcff3.svg",
    },
    {
      title: "Codebase",
      icon: "./images/products/Subtract_b17455b597_062be5a73e.svg",
    },
  ];
  return (
    <div class="communityContainer">
      <div
        class="communityLabelTitleText communityLabelTitleText_intro"
        style={{ opacity: 1 }}
      >
        <h1
          class="
                communityTitle
                communityTitle_style
                communityTitle_small
                communityTitle_color
              "
        >
          <div class="communityTitleContainer"
                         data-aos="zoom-in"
                        data-aos-once="true"
          >
            <span>
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                  opacity: 1,
                  transform: "perspective(1000px) translate3d(0px, 0px, 0px)",
                }}
                class="communityTitleWords"
              >
                Connect with the community
              </div>
            </span>
          </div>
        </h1>
        <div
          class="
                communityText
                communityText_rich
                communityText_style
                communityText_color
              "
              data-aos="zoom-in"
              data-aos-once="true"
        >
          <div
            style={{
              position: "relative",
              display: "inline-block",
              fontSize:"17px",
              opacity: 1,
              transform: "perspective(1000px) translate3d(0px, 0px, 0px)",
            }}
            class="communityTitleWords"
          >
            Join the conversation with users from all over the world.
          </div>
        </div>
      </div>
      <div class="communitySliceGrid">
        {CommuniesLink.map((link) => (
          <CommunityLink title={link.title} text={link.text} icon={link.icon} />
        ))}
      </div>

      <div class="communitySliceGrid">
        {socialCards.map((card) => (
          <SocialCard title={card.title} icon={card.icon} />
        ))}

        <SocialNewsLetter />
      </div>
    </div>
  );
}

export default Community;
