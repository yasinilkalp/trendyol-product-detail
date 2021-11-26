import React from "react";
import CampaignWidget from "./campaign-widget";
import CommentWidget from "./comment-widget";
import StoreWidget from "./store-widget";

const ProductWidgets = () => {
  return (
    <div className="product-widget-container">
      <CampaignWidget /> 
      <StoreWidget />
      <CommentWidget />
    </div>
  );
};

export default ProductWidgets;
