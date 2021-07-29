import React from "react";
import "./CommunityLink.css";
function CommunityLink(props) {
  return (
    <a
      class="
            communityLinkContainer
            communityLinkContainer_fullBackground
          "
          data-aos-delay="200"
          
          data-aos-once="true"
          data-aos="zoom-in-left"
      target="_blank"
      rel="noopener"
      alt=""
      href="https://discord.strapi.io/"
    >
      <div class="communityLink_icon">
        <div class="communityLink_iconBackground"></div>
        <img
          class="
                communityLink_iconImg
              "
          src={props.icon}
          alt="Icon of something looking between a crab and a playing remote to illustrate the Discord logo and the real time chat"
          style={{ opacity: 1, visibility: "inherit" }}
        />
      </div>
      <div class="communityLink_textContent">
        <p
          class="
                communityLinkTitleContainer
                communityLinkTitle_style
                communityLinkText_small
                communityLinkTitle_color
              "
        >
          {props.title}
        </p>
        <p
          class="
                communityLinkTextContainer
                communityLinkText_style
                communityLinkText_small
                communityLinkText_color
              "
        >
          {props.text}
        </p>
      </div>
    </a>
  );
}

export default CommunityLink;
