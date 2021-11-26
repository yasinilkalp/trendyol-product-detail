import React from "react";
import {
  HomeIcon,
  AnnotationIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import { Badge } from "antd";

const StoreWidget = () => {
  return (
    <div className="widget">
      <Badge.Ribbon
        className="widget-badge-ribbon"
        size="small"
        text="8.8"
        style={{ backgroundColor: "#bac82d" }}
      >
        <div className="widget-title">
          <a href="/">VATKALI</a>
        </div>
      </Badge.Ribbon>
      <div className="widget-content">
        <div className="widget-item">
          <a href="/" className="widget-button items-start">
            <HomeIcon className="mt-1" />
            <div className="widget-text">
              <div className="font-semibold">Mağazayı Gör</div>
              <div className="seller-follower-count">196.0B Takipçi</div>
            </div>
            <ChevronRightIcon />
          </a>
        </div>
        <div className="widget-item">
          <a href="/" className="widget-button">
            <AnnotationIcon />
            <div className="widget-text font-semibold">Satıcı Soruları (170)</div>
            <ChevronRightIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default StoreWidget;
