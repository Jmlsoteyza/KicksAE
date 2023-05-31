// one images

import mainProduct1 from "../assets/images/mainproduct-lbj.png";
import subImage1 from "../assets/images/lbj_subimage1.png";
import subImage2 from "../assets/images/lbj_subimage2.png";
import subImage3 from "../assets/images/lbj_subimage3.png";

// Newb Images
import Newb1 from "../assets/images/Newb1.png";
import Newb2 from "../assets/images/Newb2.png";
import Newb3 from "../assets/images/Newb3.png";
import Newb4 from "../assets/images/Newb4.png";
import Newb5 from "../assets/images/Newb5.png";
import Newb6 from "../assets/images/Newb6.png";
import Newb7 from "../assets/images/Newb7.png";
import Newb8 from "../assets/images/Newb8.png";

// Puma Images
import Puma1 from "../assets/images/Puma1.png";
import Puma2 from "../assets/images/Puma2.png";
import Puma3 from "../assets/images/Puma3.png";
import Puma4 from "../assets/images/Puma4.png";
import Puma5 from "../assets/images/Puma5.png";
import Puma6 from "../assets/images/Puma6.png";
import Puma7 from "../assets/images/Puma7.png";
import Puma8 from "../assets/images/Puma8.png";

// two images

import mainProduct2 from "../assets/images/mainproduct-lbj2.png";
import lbj1 from "../assets/images/lbj1.png";
import lbj2 from "../assets/images/lbj2.png";
import lbj3 from "../assets/images/lbj3.png";

import mainProduct3 from "../assets/images/mainproduct-jdn.png";
import airjor1 from "../assets/images/airjor1.png";
import airjor2 from "../assets/images/airjor2.png";
import airjor3 from "../assets/images/airjor3.png";

import mainProduct4 from "../assets/images/mainproduct-jdn1.png";
import max1 from "../assets/images/max1.png";
import max2 from "../assets/images/max2.png";
import max3 from "../assets/images/max3.png";

import mainProduct5 from "../assets/images/mainproduct-af1.png";
import airgreen1 from "../assets/images/airgreen1.png";
import airgreen2 from "../assets/images/airgreen2.png";
import airgreen3 from "../assets/images/airgreen3.png";
import airgreen4 from "../assets/images/airgreen4.png";

import mainProduct6 from "../assets/images/mainproduct-af2.png";
import airblue1 from "../assets/images/airblue1.png";
import airblue2 from "../assets/images/airblue2.png";
import airblue3 from "../assets/images/airblue3.png";
import airblue4 from "../assets/images/airblue4.png";

import mainProduct7 from "../assets/images/mainproduct-af3.png";
import airviolet1 from "../assets/images/airviolet1.png";
import airviolet2 from "../assets/images/airviolet2.png";
import airviolet3 from "../assets/images/airviolet3.png";
import airviolet4 from "../assets/images/airviolet4.png";

const usSizes = [
  { value: "7" },
  { value: "7.5" },
  { value: "8" },
  { value: "8.5" },
  { value: "9" },
  { value: "9.5" },
  { value: "10" },
  { value: "10.5" },
  { value: "11" },
  { value: "11.5" },
  { value: "12" },
  { value: "12.5" },
  { value: "13" },
];

const euSizes = [
  { value: "40" },
  { value: "40.5" },
  { value: "41" },
  { value: "42" },
  { value: "42.5" },
  { value: "43" },
  { value: "44" },
  { value: "44.5" },
  { value: "45" },
  { value: "45.5" },
  { value: "46" },
  { value: "47" },
  { value: "47.5" },
];

const ProductData = [
  {
    id: 1,
    image: mainProduct1,
    subImage: [subImage1, subImage2, subImage3],
    title: "Men's LeBron XX Shoe",
    shortTitle: "Men's LeBron XX Shoe",
    subTitle: "Nike",
    price: "735.00",
    oldPrice: "1,050.00",
    category: "lebron",
    brand: "nike",
    uS: usSizes,
    eU: euSizes,
  },
  {
    id: 2,
    image: mainProduct2,
    subImage: [lbj1, lbj2, lbj3],
    title: "Men's LeBron Witness 7 Basketball Shoe",
    shortTitle: "Men's LeBron Witness 7",
    subTitle: "Nike",
    price: "429.00",
    oldPrice: "600.00",
    category: "lebron",
    brand: "nike",
    uS: usSizes,
    eU: euSizes,
  },
  {
    id: 3,
    image: mainProduct3,
    subImage: [airjor1, airjor2, airjor3],
    title: "Air Jordan 1 Mid 'Dark Concord' sneakers",
    shortTitle: "Air Jordan 1 Mid Dark Concord",
    subTitle: "Jordan",
    price: "680.00",
    oldPrice: "1000.00",
    category: "jordan",
    brand: "nike",
    uS: usSizes,
    eU: euSizes,
  },
  {
    id: 4,
    image: mainProduct4,
    subImage: [max1, max2, max3],
    title: "Men's Max Aura 4 Shoe",
    shortTitle: "Men's Max Aura 4 Shoe",
    subTitle: "Jordan",
    price: "472.00",
    oldPrice: "675.00",
    category: "jordan",
    brand: "nike",
    uS: usSizes,
    eU: euSizes,
  },
  {
    id: 5,
    image: mainProduct5,
    subImage: [airgreen1, airgreen2, airgreen3, airgreen4],
    title: "Louis Vuitton x Nike Air Force 1 Green",
    shortTitle: "Louis Vuitton Nike Air Force 1",
    subTitle: "Nike",
    price: "550.00",
    oldPrice: "800.00",
    category: "Nike AirForce1",
    brand: "nike",
    uS: usSizes,
    eU: euSizes,
  },
  {
    id: 6,
    image: mainProduct6,
    subImage: [airblue1, airblue2, airblue3, airblue4],
    title: "Nike Air Force 1 07 LV8",
    shortTitle: "Nike Air Force 1 07 LV8",
    subTitle: "Nike",
    price: "472.00",
    oldPrice: "472.00",
    category: "Nike AirForce1",
    brand: "nike",
    uS: usSizes,
    eU: euSizes,
  },
  {
    id: 7,
    image: mainProduct7,
    subImage: [airviolet1, airviolet2, airviolet3, airviolet4],
    title: "Louis Vuitton and Nike Air Force 1 Friends and Family",
    shortTitle: "Louis Vuitton and Nike Air Force 1",
    subTitle: "Nike",
    price: "750.00",
    oldPrice: "1000.00",
    category: "Nike AirForce1",
    brand: "nike",
    uS: usSizes,
    eU: euSizes,
  },
  {
    id: 8,
    image: Newb1,
    subImage: [Newb2, Newb3, Newb4],
    title: "New Balance Blue-Black",
    shortTitle: "New Balance Blue-Black",
    subTitle: "New Balance",
    price: "546.00",
    oldPrice: "800.00",
    category: "New Balance",
    brand: "new balance",
    uS: usSizes,
    eU: euSizes,
  },
  {
    id: 9,
    image: Newb5,
    subImage: [Newb6, Newb7, Newb8],
    title: "New Balance White-Black",
    shortTitle: "New Balance White-Black",
    subTitle: "New Balance",
    price: "420.00",
    oldPrice: "700.00",
    category: "New Balance",
    brand: "new balance",
    uS: usSizes,
    eU: euSizes,
  },
  {
    id: 10,
    image: Puma1,
    subImage: [Puma2, Puma3, Puma4],
    title: "Men's RS-Z Core Shoe",
    shortTitle: "Men's RS-Z Core Shoe",
    subTitle: "Puma",
    price: "339.00",
    oldPrice: "529.00",
    category: "Puma",
    brand: "puma",
    uS: usSizes,
    eU: euSizes,
  },
  {
    id: 11,
    image: Puma5,
    subImage: [Puma6, Puma7, Puma8],
    title: "Men's Wired Run Shoe",
    shortTitle: "Men's Wired Run Shoe",
    subTitle: "Puma",
    price: "179.00",
    oldPrice: "299.00",
    category: "Puma",
    brand: "puma",
    uS: usSizes,
    eU: euSizes,
  },
];

export default ProductData;
