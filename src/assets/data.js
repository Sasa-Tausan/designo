import {
  appImgDesktop,
  appImgTablet,
  appImgMobile,
  graphicImgDesktop,
  graphicImgTablet,
  graphicImgMobile,
  webImgDesktopLarge,
  webImgDesktopSmall,
  webImgTablet,
  webImgMobile,
  expressImg,
  transferImg,
  photonImg,
  builderImg,
  blogrImg,
  campImg,
  airfilterImg,
  eyecamImg,
  faceitImg,
  todoImg,
  loppstudiosImg,
  changeImg,
  waterImg,
  scienceImg,
} from "../images";

const menuList = [
  {
    name: "our company",
    path: "/company",
  },
  {
    name: "locations",
    path: "/locations",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export { menuList };

// Data List for project section of the home page
const projectDataList = [
  {
    name: "web design",

    images: {
      desktop: {
        large: webImgDesktopLarge,
        small: webImgDesktopSmall,
      },
      tablet: webImgTablet,
      mobile: webImgMobile,
    },
  },
  {
    name: "app design",
    images: {
      desktop: appImgDesktop,
      tablet: appImgTablet,
      mobile: appImgMobile,
    },
  },
  {
    name: "graphic design",
    images: {
      desktop: graphicImgDesktop,
      tablet: graphicImgTablet,
      mobile: graphicImgMobile,
    },
  },
];

export { projectDataList };

// Data for project pages web design, app design and graphic design

const projectPageData = [
  {
    name: "web design",
    text: "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",

    projects: [
      {
        img: expressImg,
        title: "express",
        cardText: "A multi-carrier shipping website for ecommerce businesses",
      },
      {
        img: transferImg,
        title: "transfer",
        cardText:
          "Site for low-cost money transfers and sending money within seconds",
      },
      {
        img: photonImg,
        title: "photon",
        cardText:
          "A state-of-the-art music player with high-resolution audio and DSP effects",
      },
      {
        img: builderImg,
        title: "builder",
        cardText:
          "Connects users with local contractors based on their location",
      },
      {
        img: blogrImg,
        title: "blogr",
        cardText:
          "Blogr is a platform for creating an online blog or publication",
      },
      {
        img: campImg,
        title: "camp",
        cardText:
          "Get expert training in coding, data, design, and digital marketing",
      },
    ],
    design: [
      {
        name: "app design",
        images: {
          desktop: appImgDesktop,
          tablet: appImgTablet,
          mobile: appImgMobile,
        },
      },
      {
        name: "graphic design",
        images: {
          desktop: graphicImgDesktop,
          tablet: graphicImgTablet,
          mobile: graphicImgMobile,
        },
      },
    ],
  },
  {
    name: "app design",
    text: "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",

    projects: [
      {
        img: airfilterImg,
        title: "airfilter",
        cardText:
          "Solving the problem of poor indoor air quality by filtering the air",
      },
      {
        img: eyecamImg,
        title: "eyecam",
        cardText:
          "Product that lets you edit your favorite photos and videos at any time",
      },
      {
        img: faceitImg,
        title: "faceit",
        cardText:
          "Get to meet your favorite internet superstar with the faceit app",
      },
      {
        img: todoImg,
        title: "todo",
        cardText:
          "A todo app that features cloud sync with light and dark mode",
      },
      {
        img: loppstudiosImg,
        title: "loopstudios",
        cardText: "A VR experience app made for Loopstudios",
      },
    ],
    design: [
      {
        name: "web design",
        images: {
          desktop: webImgDesktopSmall,
          tablet: webImgTablet,
          mobile: webImgMobile,
        },
      },
      {
        name: "graphic design",
        images: {
          desktop: graphicImgDesktop,
          tablet: graphicImgTablet,
          mobile: graphicImgMobile,
        },
      },
    ],
  },
  {
    name: "graphic design",
    text: "We deliver eye-catching branding materials that are tailored to meet your business objectives.",

    projects: [
      {
        img: changeImg,
        title: "tim brown",
        cardText: "A book cover designed for Tim Brown's new release, 'Change'",
      },
      {
        img: waterImg,
        title: "boxed water",
        cardText: "A simple packaging concept made for Boxed Water",
      },
      {
        img: scienceImg,
        title: "science!",
        cardText: "A poster made in collaboration with the Federal Art Project",
      },
    ],
    design: [
      {
        name: "app design",
        images: {
          desktop: appImgDesktop,
          tablet: appImgTablet,
          mobile: appImgMobile,
        },
      },
      {
        name: "web design",
        images: {
          desktop: webImgDesktopSmall,
          tablet: webImgTablet,
          mobile: webImgMobile,
        },
      },
    ],
  },
];

export { projectPageData };
