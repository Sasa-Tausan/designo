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
} from '../images';

const projectDataList = [
  {
    name: 'web design',
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
