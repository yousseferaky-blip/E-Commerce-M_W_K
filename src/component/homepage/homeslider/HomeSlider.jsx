import   './HomeSlider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import img1 from './../../../images/logo/women-logo.jpeg'
import img2 from './../../../images/logo/men-logo.jpeg'
import img3 from './../../../images/logo/kids-logo.jpg'
import img4 from './../../../images/logo/phone-logo.jpg'

const HomeSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        speed: 500,
        cssEase: "linear"
      };
  return (
    <div className='HomeSlider-Container'>
    <Slider {...settings}>
      <div>
      <img src={img2}/>
       <a href='./men'><button className='btn'>shop Mens<i class="fa-solid fa-arrow-right-long"></i></button></a>
      </div>
      <div>
       <img src={img1}/>
       <a href='./women'><button className='btn'>shop womens<i class="fa-solid fa-arrow-right-long"></i></button></a>
      </div>
      <div>
      <img src={img3}/>
       <a href='./kids'><button className='btn'>shop Kids<i class="fa-solid fa-arrow-right-long"></i></button></a>
      </div>
      <div>
      <img src={img4}/>
       <a href='./phone'><button className='btn'>shop Phones<i class="fa-solid fa-arrow-right-long"></i></button></a>
      </div>
    </Slider>
  </div>
  )
}

export default HomeSlider