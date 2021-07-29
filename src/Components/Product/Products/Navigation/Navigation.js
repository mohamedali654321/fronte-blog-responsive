import React from "react";
import "./Navigation.css";
function Navigation() {
  const iconLinks = [
    {
      title: "Developer Docs",
      url: "https://strapi.io/documentation/developer-docs/latest/getting-started/introduction.html",
      imageSrc: "./images/products/Docs_eaeebb385f_0f9f202b8f.svg",
    },
    {
      title: "User Guide",
      url: "https://strapi.io/documentation/user-docs/latest/getting-started/introduction.html",
      imageSrc: "./images/products/Guide_09ef691265_c697e5f9a8.svg",
    },
    {
      title: "Strapi Academy",
      url: "https://academy.strapi.io/",
      imageSrc: "./images/products/education_color_icon_df7a108290_6a4ece3811.svg",
    },
    {
      title: "Blog",
      url: "https://strapi.io/blog",
      imageSrc: "./images/products/Blog_c574ff6bf6_317c7fba9b.svg",
    },
    {
      title: "Starters",
      url: "https://strapi.io/starters",
      imageSrc: "./images/products/Starters_4b89901bbb_273b0aff32.svg",
    },
    {
      title: "Tutorials",
      url: "https://strapi.io/tutorials",
      imageSrc: "./images/products/Tutorials_8b77c0edf7_9a742e9db8.svg",
    },
    {
      title: "Video Library",
      url: "https://strapi.io/video-library",
      imageSrc: "./images/products/Recipes_b51019258a_2bb0e825c8.svg",
    },
  ];

  const sectionLinks = [
    {
      title: " Documentation",
      links: [
        {
          title: "Getting Started",
          url: "https://strapi.io/documentation/developer-docs/latest/getting-started/introduction.html",
        },
        {
          title: "Setup & Deployment",
          url: "https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/installation.html",
        },
        {
          title: "Development",
          url: "https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html",
        },
        {
          title: "Update & Migration",
          url: "https://strapi.io/documentation/developer-docs/latest/update-migration-guides/update-version.html",
        },
        {
          title: "Developer Resources",
          url: "https://strapi.io/documentation/developer-docs/latest/developer-resources/content-api/content-api.html",
        },
        {
          title: "Guides",
          url: "https://strapi.io/documentation/developer-docs/latest/guides/api-token.html",
        },
      ],
    },
    {
      title: "User Guide",
      links: [
        {
          title: "Getting Started",
          url: "https://strapi.io/documentation/user-docs/latest/getting-started/introduction.html",
        },
        {
          title: "Content Manager",
          url: "https://strapi.io/documentation/user-docs/latest/content-manager/introduction-to-content-manager.html",
        },
        {
          title: "Content-Type Builder",
          url: "https://strapi.io/documentation/user-docs/latest/content-types-builder/introduction-to-content-types-builder.html",
        },
        {
          title: "Users, Roles & Permissions",
          url: "https://strapi.io/documentation/user-docs/latest/users-roles-permissions/introduction-to-users-roles-permissions.html",
        },
        {
          title: "Plugins",
          url: "https://strapi.io/documentation/user-docs/latest/plugins/introduction-to-plugins.html",
        },
        {
          title: "General Settings",
          url: "https://strapi.io/documentation/user-docs/latest/settings/managing-global-settings.html",
        },
      ],
    },
    {
      title: "Resources",
      links: [
        {
          title: "Newsroom",
          url: "https://strapi.io/newsroom",
        },
        {
          title: "Support",
          url: "https://support.strapi.io/",
        },
        {
          title: "Press Kit",
          url: "https://www.notion.so/strapi/Media-Kit-2e389f6d82624cf29fee9c5223defab9",
        },
        {
          title: "Guide to Headless CMS",
          url: "https://strapi.io/headless-cms-guide",
        },
      ],
    },
  ];

  return (
    <div
      class="
          sidebarNavigation_display
          sidebarNavigation_container
        "
      style={{ top: "-276px" }}
    >
      <div class="iconLinks">
        {iconLinks.map((icon) => (
          <a
            class="navigation_link navigation_iconLink"
            target="_blank"
            alt=""
            href={icon.url}
          >
            <div class="navigation_iconWrapper">
              <img
                class="navigation_iconImg "
                src={icon.imageSrc}
                alt="Icon Developer Docs"
                style={{ opacity: 1, visibility: "inherit" }}
              />
            </div>
            <span
              class="
                navigation_linkText
                navigation_linkText_small
                navigation_linkText_color
              "
            >
              {icon.title}
            </span>
          </a>
        ))}
      </div>

      <div>
        {sectionLinks.map((section) => (
          <div class="navigationSecionLinks">
            <p
              class="
                navigation_linkText
                navigationSecionLinks_title
                navigation_linkText_small
                navigationSecionLinks_themTitle
              "
            >
              {section.title}
            </p>
            {section.links.map((link) => (
              <a class="navigation_link" target="_blank" alt="" href={link.url}>
                <span
                  class="
                  navigation_linkText
                  navigation_linkText_small
                  navigation_linkText_color
                "
                >
                  {link.title}
                </span>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navigation;
