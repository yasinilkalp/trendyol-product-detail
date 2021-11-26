import React from "react";
import "styles/product-detail.scss";
import ProductImages from "components/product-detail-components/product-image-components";
import ProductRates from "components/product-detail-components/product-rate-components";
import ProductPrices from "components/product-detail-components/product-price-components";
import ProductVariants from "components/product-detail-components/product-variant-components";
import ProductButtons from "components/product-detail-components/product-button-components";
import ProductDelivery from "components/product-detail-components/product-delivery-components";
import ProductFeatured from "components/product-detail-components/product-featured-components";
import ProductInfo from "components/product-detail-components/product-info-components";
import BreadCrumbs from "components/shared-components/breadcrumb-components";
import ProductWidgets from "components/product-detail-components/product-widget-components";
import ProductCarousel from "components/shared-components/product-carousel-components";
import ProductReviews from "components/product-detail-components/product-reviews-components";

const productData = {
  seller: "Vatkalı",
  name: "Deri Pantolon Siyah VTK20-PNT01041",
  rate: 4,
  commentsCount: 120,
  reviewsCount: 25,
  oldPrice: "384,99",
  salePrice: "183,95",
  images: [
    {
      image:
        "https://cdn.dsmcdn.com/ty199/product/media/images/20211015/18/149215577/89144027/3/3_org_zoom.jpg",
    },
    {
      image:
        "https://cdn.dsmcdn.com/ty198/product/media/images/20211015/18/149215577/89144027/8/8_org_zoom.jpg",
    },
    {
      image:
        "https://cdn.dsmcdn.com/ty200/product/media/images/20211015/18/149215577/89144027/7/7_org_zoom.jpg",
    },
    {
      image:
        "https://cdn.dsmcdn.com/ty198/product/media/images/20211015/18/149215577/89144027/8/8_org_zoom.jpg",
    },
    {
      image:
        "https://cdn.dsmcdn.com/ty200/product/media/images/20211015/18/149215577/89144027/7/7_org_zoom.jpg",
    },
  ],
  brand: {
    id: 5,
    name: "Vatkalı",
  },
};

function App() {
  return (
    <div className="page-container">
      <BreadCrumbs />
      <div className="flex mobile:block space-x-5 mobile:space-x-0">
        <div className="product-detail-container">
          <div className="product-detail-image">
            <ProductImages data={productData.images} />
          </div>
          <div className="product-detail-info">
            <div className="product-info-content">
              <ProductInfo product={productData} />
              <ProductRates
                rate={productData.rate}
                commentsCount={productData.commentsCount}
                reviewsCount={productData.reviewsCount}
              />
              <ProductPrices
                oldPrice={productData.oldPrice}
                salePrice={productData.salePrice}
              />
              <hr className="my-4" />
              <ProductVariants />
              <ProductButtons />
              <ProductDelivery />
              <hr className="my-4" />
              <ProductFeatured />
            </div>
          </div>
        </div>
        <ProductWidgets />
      </div>

      <div className="similar-product-container">
        <ProductCarousel title="Benzer Ürünler" />
        {/* <ProductCarousel title="Bu Ürünü Alanlar Bunları da Aldı" /> */}
      </div>
      <ProductReviews />
    </div>
  );
}

export default App;
