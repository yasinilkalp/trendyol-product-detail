import React from "react";

const ProductInfo = (props) => {
  const { product } = props;
  return (
    <>
      <div className="product-info-title ">
        <a href="/">{product.brand.name}</a>
        {product.name}
      </div>
      <div className="product-seller-name">
        <span>Satıcı:</span>
        <a href="/">{product.seller}</a>
      </div>
    </>
  );
};

export default ProductInfo;
