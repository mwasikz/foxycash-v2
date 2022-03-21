import CreditCard from '../../lotties/CreditCard/CreditCard';
import SignUp from '../../lotties/SignUp/SignUp';
import Secure from '../../lotties/Secure/Secure';
import CloudData from '../../lotties/CloudData/CloudData';


export const homeObjOne = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Exclusive Access',
    headLine: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive diamond card that allows you to send unlimited transactions without getting charged any fees',
    buttonLabel: 'Get Started',
    imgStart: '',
    img: <CreditCard />,
    imgStatic: 'images/credit_card_static.png' ,
    alt: 'Credit-Card'
}

export const homeObjTwo = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: '100% SECURE',
  headLine: 'Stay protected 24/7 anywhere anytime',
  description:
    'We have you covered no matter where you are located. Over 140 locations worldwide to ensure you have access anytime',
  buttonLabel: 'Learn More',
  imgStart: '',
  img: <Secure />,
  imgStatic: 'images/secure_static.png' ,
  alt: 'Vault'
};

export const homeObjThree = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'EASY SETUP',
  headLine: 'Super fast and simple onboarding process',
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  buttonLabel: 'Start Now',
  imgStart: 'start',
  img: <SignUp />,
  imgStatic: 'images/signup_static.png' ,
  alt: 'Sign-up'
};

export const homeObjFour = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'DATA ANALYTICS',
  headLine: 'Every transaction is stored on our secure cloud database',
  description:
    'Never ever have to worry again about saved reciepts. We store your data, so you can access it anytime.',
  buttonLabel: 'Sign Up Now',
  imgStart: 'start',
  img: <CloudData />,
  imgStatic: 'images/cloud_static.png' ,
  alt: 'Cloud-Data'
};