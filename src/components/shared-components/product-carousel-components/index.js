import React from "react";
import { Rate } from "antd";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

var settings = {
  dots: false,
  arrows: true,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 2,
  nextArrow: <ChevronRightIcon />,
  prevArrow: <ChevronLeftIcon />,
  responsive: [ 
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    }
  ]
};

var sliderList = [];

const ProductCarousel = (props) => {
  const { title } = props;
  for (let i = 0; i < 8; i++) {
    sliderList.push({
      id: i,
      brand: "TrendyolMilla",
      name: "Siyah Yüksek Bel Nervür Dikişli Pantolon TWOSS21PL0093",
      //image: "https://via.placeholder.com/300x400/f0f0f0f?text=product-image",
      image:
        "https://cdn.dsmcdn.com/ty156/product/media/images/20210809/10/117038023/80490993/1/1_org_thumb.jpg",
      oldPrice: 92.78,
      salePrice: 45.78,
    });
  }

  return (
    <div className="product-carousel-content">
      <h2 className="font-semibold text-lg mobile:text-center">{title}</h2>
      <Slider {...settings}>
        {sliderList.map((product, index) => {
          return (
            <div key={index} className="product-list-item">
              <a href="/">
                <div className="product-list-item-image">
                  <img src={product.image} alt="product" />
                </div>
                <div className="product-list-item-desc">
                  <div className="product-name">
                    <span className="brand-name">{product.brand}</span>
                    {product.name}
                  </div>
                  <div className="product-rating">
                    <Rate disabled allowHalf defaultValue={4.5} />
                    <span className="product-rating-text">(25)</span>
                  </div>
                </div>
                <div className="product-list-item-price">
                  <span className="product-oldPrice">
                    {product.oldPrice} TL
                  </span>
                  <span className="product-salePrice">
                    {product.salePrice} TL
                  </span>
                </div>
              </a>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
