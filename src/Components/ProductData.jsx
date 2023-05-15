// one images

import mainProduct1 from "../assets/images/mainproduct-lbj.png";
import subImage1 from "../assets/images/lbj_subimage1.png";
import subImage2 from "../assets/images/lbj_subimage2.png";
import subImage3 from "../assets/images/lbj_subimage3.png";

// two images

import mainProduct2 from "../assets/images/mainproduct-lbj2.png";
import mainProduct3 from "../assets/images/mainproduct-jdn.png";
import mainProduct4 from "../assets/images/mainproduct-jdn1.png";
import mainProduct5 from "../assets/images/mainproduct-af1.png";
import mainProduct6 from "../assets/images/mainproduct-af2.png";
import mainProduct7 from "../assets/images/mainproduct-af3.png";

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
    subImage: [subImage1, subImage2, subImage3],
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
    subImage: [subImage1, subImage2, subImage3],
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
    subImage: [subImage1, subImage2, subImage3],
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
    subImage: [subImage1, subImage2, subImage3],
    title: "Louis Vuitton x Nike Air Force 1 Green",
    shortTitle: "Louis Vuitton Nike Air Force 1",
    subTitle: "Nike",
    price: "33.000",
    oldPrice: "33.000",
    category: "Nike AirForce1",
    brand: "nike",
    uS: usSizes,
    eU: euSizes,
  },
  {
    id: 6,
    image: mainProduct6,
    subImage: [subImage1, subImage2, subImage3],
    title: "Nike Air Force 1 07 LV8",
    shortTitle: "Nike Air Force 1 07 LV8",
    subTitle: "Nike",
    price: "472.00",
    oldPrice: "472.00",
    category: "Nike AirForce1",
    brand: "puma",
    uS: usSizes,
    eU: euSizes,
  },
  {
    id: 7,
    image: mainProduct7,
    subImage: [subImage1, subImage2, subImage3],
    title: "Louis Vuitton and Nike Air Force 1 Friends and Family",
    shortTitle: "Louis Vuitton and Nike Air Force 1",
    subTitle: "Nike",
    price: "268,085.20",
    oldPrice: "268,085.20",
    category: "Nike AirForce1",
    brand: "puma",
    uS: usSizes,
    eU: euSizes,
  },
];

export default ProductData;
