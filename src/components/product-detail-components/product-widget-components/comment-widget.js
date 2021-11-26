import React from "react";
import { Rate } from "antd";
import { CheckCircleIcon } from "@heroicons/react/solid";

const CommentWidget = () => {
  return (
    <div className="widget">
      <div className="widget-title"> ÖNE ÇIKAN YORUM </div>
      <div className="widget-content widget-comment">
        <div className="comment">
          <Rate disabled allowHalf defaultValue={5} />
          çok yumuşak 170 boyum 50 kilo bel kısmı ve basen kısmı bol bi beden
          daha küçük alın ben 36 beden aldım 34 tam olurdu aylar boyunca
          bekledim 36 alıp tadilata verdim istediğim gibi olmadı kargo hızlıydı
        </div>
        <div className="comment-author">
          <span className="comment-author-name"> Berfin Kış </span>
          <span className="comment-author-date"> 1 Kasım 2021 </span>
        </div>
        <div className="product-buy">
          <CheckCircleIcon className="w-5" /> Ürünü satın aldı
        </div>
      </div>
      <div className="more-comment">
        <a href="/"> DAHA FAZLA YORUM</a>
      </div>
    </div>
  );
};

export default CommentWidget;
