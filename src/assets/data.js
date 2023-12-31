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
  iconPassionate,
  iconResourceful,
  iconFriendly,
  illustrationCanada,
  illustrationAustralia,
  illustrationUK,
} from '../images';

const menuList = [
  {
    name: 'our company',
    path: '/company',
  },
  {
    name: 'locations',
    path: '/locations',
  },
  {
    name: 'contact',
    path: '/contact',
  },
];

export { menuList };

// Data List for project section of the home page
const projectDataList = [
  {
    name: 'web design',

    images: {
      desktop: webImgDesktopLarge,
      tablet: webImgTablet,
      mobile: webImgMobile,
    },
  },
  {
    name: 'app design',
    images: {
      desktop: appImgDesktop,
      tablet: appImgTablet,
      mobile: appImgMobile,
    },
  },
  {
    name: 'graphic design',
    images: {
      desktop: graphicImgDesktop,
      tablet: graphicImgTablet,
      mobile: graphicImgMobile,
    },
  },
];

export { projectDataList };

// Data for about us section in home component
const aboutUsData = [
  {
    title: 'passionate',
    text: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
    icon: iconPassionate,
  },
  {
    title: 'resourceful',
    text: 'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients needs.',
    icon: iconResourceful,
  },
  {
    title: 'friendly',
    text: ' We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
    icon: iconFriendly,
  },
];

export { aboutUsData };

// Data for project pages web design, app design and graphic design

const projectPageData = [
  {
    name: 'web design',
    text: 'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',

    projects: [
      {
        img: expressImg,
        title: 'express',
        cardText: 'A multi-carrier shipping website for ecommerce businesses',
      },
      {
        img: transferImg,
        title: 'transfer',
        cardText:
          'Site for low-cost money transfers and sending money within seconds',
      },
      {
        img: photonImg,
        title: 'photon',
        cardText:
          'A state-of-the-art music player with high-resolution audio and DSP effects',
      },
      {
        img: builderImg,
        title: 'builder',
        cardText:
          'Connects users with local contractors based on their location',
      },
      {
        img: blogrImg,
        title: 'blogr',
        cardText:
          'Blogr is a platform for creating an online blog or publication',
      },
      {
        img: campImg,
        title: 'camp',
        cardText:
          'Get expert training in coding, data, design, and digital marketing',
      },
    ],
    design: [
      {
        name: 'app design',
        images: {
          desktop: appImgDesktop,
          tablet: appImgTablet,
          mobile: appImgMobile,
        },
      },
      {
        name: 'graphic design',
        images: {
          desktop: graphicImgDesktop,
          tablet: graphicImgTablet,
          mobile: graphicImgMobile,
        },
      },
    ],
    bgClass: 'bg-web',
  },
  {
    name: 'app design',
    text: 'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.',

    projects: [
      {
        img: airfilterImg,
        title: 'airfilter',
        cardText:
          'Solving the problem of poor indoor air quality by filtering the air',
      },
      {
        img: eyecamImg,
        title: 'eyecam',
        cardText:
          'Product that lets you edit your favorite photos and videos at any time',
      },
      {
        img: faceitImg,
        title: 'faceit',
        cardText:
          'Get to meet your favorite internet superstar with the faceit app',
      },
      {
        img: todoImg,
        title: 'todo',
        cardText:
          'A todo app that features cloud sync with light and dark mode',
      },
      {
        img: loppstudiosImg,
        title: 'loopstudios',
        cardText: 'A VR experience app made for Loopstudios',
      },
    ],
    design: [
      {
        name: 'web design',
        images: {
          desktop: webImgDesktopSmall,
          tablet: webImgTablet,
          mobile: webImgMobile,
        },
      },
      {
        name: 'graphic design',
        images: {
          desktop: graphicImgDesktop,
          tablet: graphicImgTablet,
          mobile: graphicImgMobile,
        },
      },
    ],
    bgClass: 'bg-app',
  },
  {
    name: 'graphic design',
    text: 'We deliver eye-catching branding materials that are tailored to meet your business objectives.',

    projects: [
      {
        img: changeImg,
        title: 'tim brown',
        cardText: "A book cover designed for Tim Brown's new release, 'Change'",
      },
      {
        img: waterImg,
        title: 'boxed water',
        cardText: 'A simple packaging concept made for Boxed Water',
      },
      {
        img: scienceImg,
        title: 'science!',
        cardText: 'A poster made in collaboration with the Federal Art Project',
      },
    ],
    design: [
      {
        name: 'app design',
        images: {
          desktop: appImgDesktop,
          tablet: appImgTablet,
          mobile: appImgMobile,
        },
      },
      {
        name: 'web design',
        images: {
          desktop: webImgDesktopSmall,
          tablet: webImgTablet,
          mobile: webImgMobile,
        },
      },
    ],
    bgClass: 'bg-graphic',
  },
];

export { projectPageData };

// Data for LocationSection component and Locations component
const locationSectionData = [
  {
    country: 'canada',
    image: illustrationCanada,
    office: 'Designo Central Office',
    address: '3886 Wellington Street',
    city: 'Toronto, Ontario M9C 3J5',
    phone: '+1 253-863-8967',
    mail: 'contact@designo.co',
    position: [43.64834206329405, -79.37588378969907],
  },
  {
    country: 'australia',
    image: illustrationAustralia,
    office: 'Designo AU Office',
    address: '19 Balonne Street',
    city: 'New South Wales 2443',
    phone: '(02) 6720 9092',
    mail: 'contact@designo.au',
    position: [-30.329213200747986, 149.7882291479251],
  },
  {
    country: 'united kingdom',
    image: illustrationUK,
    office: 'Designo UK Office',
    address: '13  Colorado Way',
    city: 'Rhyd-y-fro SA8 9GA',
    phone: '078 3115 1400',
    mail: 'contact@designo.uk',
    position: [53.710380073261575, -1.3417493026908776],
  },
];

export { locationSectionData };
