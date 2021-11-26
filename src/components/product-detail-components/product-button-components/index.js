import React from "react";
import { HeartIcon } from "@heroicons/react/outline";

const ProductButtons = (props) => {
  return (
    <div className="product-button-content">
      <div className="basket-buttons">
        <button>Sepete Ekle</button>
      </div>
      <div className="favorite-buttons">
        <button>
          <HeartIcon className="h-6 w-6 m-auto" />
        </button>
      </div>
    </div>
  );
};

export default ProductButtons;
