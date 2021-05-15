import ill1 from "../../images/ill-1.png";
import ill2 from "../../images/ill-2.png";
import ill3 from "../../images/ill-3.png";


export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Hi there!',
    headLine: 'Here are some of my projects.',
    description: 'This website is one of them too!',
    buttonLabel: 'My Portfolio',
    img: ill1,
    imgStart: true,
 /* alt: 'img1', */
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'About me',
    headLine: '',
    description: '',
    buttonLabel: 'Visit my blog.',
    img: ill2,
    imgStart: false,
 /* alt: 'img1', */
    dark: false,
    primary: false,
    darkText: true
};

export const homeObjThree = {
    id: 'services',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Services',
    headLine: '',
    description: '',
    buttonLabel: '',
    img: ill3,
    imgStart: true,
 /* alt: 'img1', */
    dark: true,
    primary: true,
    darkText: false
};