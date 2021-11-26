import React from "react";
import { Rate } from "antd";

const ProductRates = (props) => {
  const { rate, commentsCount, reviewsCount } = props;
  return (
    <div className="product-rate">
      <Rate disabled allowHalf defaultValue={rate} />
      <a href="/" className="reviews">
        {reviewsCount} Değerlendirme
      </a>
      <div className="seperator"></div>
      <a href="/" className="questions">
        {commentsCount} Soru & Cevap
      </a>
    </div>
  );
};

export default ProductRates;
