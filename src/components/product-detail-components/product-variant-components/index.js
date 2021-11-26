import React from "react";

var variants = [
  {
    name: "Renk",
    type: "color",
    values: ["Kırmızı", "Sarı", "Yeşil", "Mavi", "Siyah"],
  },
  {
    name: "Beden",
    type: "size",
    values: ["XS", "S", "M", "L", "XL", "XXL"],
  },
];

const ProductVariants = (props) => { 
  return (
    <div className="product-variant-content">
      {variants.map((variant, index) => {
        return (
          <div key={index} className="product-variant">
            <div className="product-variant-title">{variant.name}</div>
            {variant.type === "color" ? (
              <ColorVariant variant={variant} />
            ) : (
              <SizeVariant variant={variant} />
            )}
          </div>
        );
      })}
    </div>
  );
};

const ColorVariant = (props) => {
  const { variant } = props;
  return (
    <div className="product-variants">
      {variant.values.map((value, index) => {
        return (
          <div key={index} className="product-variant-value type-color">
            <img
              src="https://via.placeholder.com/40x60/f0f0f0?text=resim"
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

const SizeVariant = (props) => {
  const { variant } = props;
  return (
    <div className="product-variants">
      {variant.values.map((value, index) => {
        return (
          <div key={index} className="product-variant-value type-size">
            {value}
          </div>
        );
      })}
    </div>
  );
};

export default ProductVariants;
