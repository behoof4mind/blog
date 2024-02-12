import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://behoof4mind.github.io/blog/",
  author: "Denny Lavrushko",
  desc: "Personal blog and notes",
  title: "Denny's personal blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/behoof4mind",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/denis.laurus",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/beh00f4mind",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/beehoof4mind/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:dlavrushko@pm.me",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://gitlab.com/dlavrushko",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://www.reddit.com/user/beehoof4mind",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Telegram",
    href: "beehoof4mind",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
];
