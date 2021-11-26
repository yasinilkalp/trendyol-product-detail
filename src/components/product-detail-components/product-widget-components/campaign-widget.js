import React from "react";
import { TagIcon, ChevronRightIcon } from "@heroicons/react/solid";

const CampaignWidget = () => {
  return (
    <div className="widget">
      <div className="widget-title"> ÜRÜNÜN KAMPANYALARI </div>
      <div className="widget-content">
        <div className="widget-item">
          <a href="/" className="widget-button">
            <TagIcon />
            <div className="campaign-name">50 TL ve Üzeri Kargo Bedava</div>
            <ChevronRightIcon />
          </a>
        </div>
        <div className="widget-item">
          <a href="/" className="widget-button">
            <TagIcon />
            <div className="campaign-name">Sepette %10 İndirim</div>
            <ChevronRightIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CampaignWidget;
