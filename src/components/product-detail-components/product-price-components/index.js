import React from "react";

const ProductPrices = (props) => {
  const { oldPrice, salePrice } = props;

  return (
    <>
      <div className="product-price-content">
        <div className="product-old-price">{oldPrice} TL</div>
        <div className="product-sale-price">{salePrice} TL</div>
      </div>
      <div className="price-installment-text">
        12 Aya varan Taksit Seçenekleriyle!
      </div>
    </>
  );
};

export default ProductPrices;
