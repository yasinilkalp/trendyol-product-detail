import React from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { Breadcrumb } from "antd";

const BreadCrumbs = (props) => {
  return (
    <div className="breadcrumb-content">
      <Breadcrumb separator={<ChevronRightIcon className="w-3" />}>
        <Breadcrumb.Item href="/">Anasayfa</Breadcrumb.Item>
        <Breadcrumb.Item href="">Kadın</Breadcrumb.Item>
        <Breadcrumb.Item href="">Giyim</Breadcrumb.Item>
        <Breadcrumb.Item href="">Pantolon</Breadcrumb.Item>
        <Breadcrumb.Item>Vatkalı Pantolon</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumbs;
