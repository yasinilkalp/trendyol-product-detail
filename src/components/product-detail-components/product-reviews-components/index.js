import React from "react";
import { Rate } from "antd";
import { ChevronDownIcon, CheckCircleIcon } from "@heroicons/react/outline";

const commentsData = [
  {
    id: 1,
    name: "Berfin kış",
    comment:
      "çok yumuşak 170 boyum 50 kilo bel kısmı ve basen kısmı bol bi beden daha küçük alın ben 36 beden aldım 34 tam olurdu aylar boyunca bekledim 36 alıp tadilata verdim istediğim gibi olmadı kargo hızlıydı",
    rate: 5,
    date: "1 Kasım 2021",
  },
  {
    id: 2,
    name: "m** o**",
    comment:
      "5 puanın daha üstü olsaydı da verebilseydim keşke hayatımda giydiğim en iyi deri pantolonlardan biri 1.62 boy 57 kilo 36 beden aldım. belden biraz boşluk oluşturdu ama belim ince basenim büyük olduğu için bekliyordum. 10/10 ürün",
    rate: 4,
    date: "12 Ekim 2021",
  },
  {
    id: 3,
    name: "Berfin kış",
    comment:
      "çok yumuşak 170 boyum 50 kilo bel kısmı ve basen kısmı bol bi beden daha küçük alın ben 36 beden aldım 34 tam olurdu aylar boyunca bekledim 36 alıp tadilata verdim istediğim gibi olmadı kargo hızlıydı",
    rate: 5,
    date: "1 Kasım 2021",
  },
  {
    id: 4,
    name: "m** o**",
    comment:
      "5 puanın daha üstü olsaydı da verebilseydim keşke hayatımda giydiğim en iyi deri pantolonlardan biri 1.62 boy 57 kilo 36 beden aldım. belden biraz boşluk oluşturdu ama belim ince basenim büyük olduğu için bekliyordum. 10/10 ürün",
    rate: 4,
    date: "12 Ekim 2021",
  },
  {
    id: 5,
    name: "Berfin kış",
    comment:
      "çok yumuşak 170 boyum 50 kilo bel kısmı ve basen kısmı bol bi beden daha küçük alın ben 36 beden aldım 34 tam olurdu aylar boyunca bekledim 36 alıp tadilata verdim istediğim gibi olmadı kargo hızlıydı",
    rate: 5,
    date: "1 Kasım 2021",
  },
];

const ProductReviews = (props) => {
  return (
    <div className="product-reviews-container">
      <div className="title"> Ürün Değerlendirmeleri </div>
      <div className="product-reviews-content">
        <div className="product-reviews-header">
          <div className="product-reviews-rate">
            <div className="rate">4.2</div>
            <Rate disabled allowHalf defaultValue={4} />
            <ChevronDownIcon className="w-5 text-gray-400 mt-1" />
          </div>
          <div className="product-reviews-count">
            <span>506 Değerlendirme</span>
            <span className="seperator"></span>
            <span>400 Yorum</span>
          </div>
          <div className="flex-1"></div>
        </div>
        <div className="product-reviews-content-container">
          {commentsData.map((comment, index) => {
            return (
              <div key={index} className="product-reviews-content-item">
                <div className="comment">
                  <Rate disabled allowHalf defaultValue={5} />
                  {comment.comment}
                </div>
                <div className="comment-author">
                  <span className="comment-author-name"> {comment.name} </span>
                  <span className="comment-author-date"> {comment.date} </span>
                  <span className="comment-seller-name">
                    <b>Vatkalı</b> satıcısından alındı.
                  </span>
                  <span className="product-buy">
                    <CheckCircleIcon className="w-4" /> Ürünü satın aldı
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="more-comment">
          <a href="/"> DAHA FAZLA YORUM GÖSTER</a>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
