import React from "react";
import SliderImage from "react-zoom-slider";

const ProductImages = (props) => {
  const { data } = props;
  return <SliderImage data={data} showDescription={false} />;
};

export default ProductImages;
