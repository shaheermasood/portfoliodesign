/**
 * Portfolio data model.
 * Edit this file to add/remove projects or update bio info.
 */

const SITE_DATA = {
  name: "Joshua Kaplan",
  copyright: "© 2021",
  primaryLinks: [
    { label: "Twitter", href: "https://twitter.com", color: "yellow" },
    { label: "Email", href: "mailto:hello@joshuakaplan.co", color: "yellow" },
  ],
  categoryTags: [
    "Packaging",
    "Logos",
    "Interfaces",
    "Print",
    "Patents",
  ],
  bio: "Multidisciplinary designer working at the intersection of brand identity, product design, and creative technology. Currently focused on building tools and visual systems that bridge the gap between physical and digital experiences. Previously at Stripe, Dropbox, and various early-stage ventures.",
};

const PROJECTS = [
  {
    index: "017",
    name: "Igloo",
    roles: [
      { label: "Designer", color: "blue" },
      { label: "Co-Founder", color: "green" },
    ],
    year: "2021",
    location: ["San Francisco,", "California"],
    url: "igloo.inc",
    description: "End-to-end brand identity and product design for a next-generation smart-home platform. Delivered packaging, wordmark, mobile app UI, and launch campaign.",
  },
  {
    index: "016",
    name: "Terrain",
    roles: [
      { label: "Lead Designer", color: "blue" },
    ],
    year: "2020",
    location: ["Brooklyn,", "New York"],
    url: "terrain.design",
    description: "Visual identity system and editorial website for landscape architecture studio. Included custom type pairings, grid system, and print collateral.",
  },
  {
    index: "015",
    name: "Canopy",
    roles: [
      { label: "Designer", color: "blue" },
      { label: "Engineer", color: "green" },
    ],
    year: "2020",
    location: ["Remote"],
    url: "canopy.so",
    description: "Design system and component library for a fintech startup. Built in Figma and implemented as a React component kit with full token support.",
  },
  {
    index: "014",
    name: "Arclight",
    roles: [
      { label: "Brand Designer", color: "blue" },
    ],
    year: "2019",
    location: ["Los Angeles,", "California"],
    url: "arclight.la",
    description: "Complete rebrand for a cinema chain including signage system, loyalty program identity, concession packaging, and digital kiosk interface.",
  },
  {
    index: "013",
    name: "Overgrowth",
    roles: [
      { label: "Designer", color: "blue" },
      { label: "Creative Director", color: "green" },
    ],
    year: "2019",
    location: ["Portland,", "Oregon"],
    url: "overgrowth.co",
    description: "Packaging and brand world for a botanical skincare line. Art-directed photography, designed labels, boxes, and the e-commerce storefront.",
  },
];
