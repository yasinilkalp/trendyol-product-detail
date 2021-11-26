import React from "react";

const ProductFeatured = (props) => {
  return (
    <div className="product-featured-content">
      <div className="product-featured-title">
        <span>Öne Çıkan Bilgiler</span>
      </div>
      <ul className="product-featured-list">
        <li className="return-info">
          15 gün içinde ücretsiz iade. Detaylı bilgi için{" "}
          <a className="product-description-link" href="/">
            tıklayın
          </a>
          .
        </li>
        <li>
          Bu ürün <span className="product-description-market-place">Vatkalı</span>{" "}
          tarafından gönderilecektir.
        </li>
        <li>
          Ürün Detayları: İki ön cepli, siyah düğmeli, önü fermuarlı, paçası
          lazer kesim bol paça suni deri pantolon. İç kısmı şardonludur. Ürün
          tam kalıptır.
        </li>
        <li>Kumaş Bilgisi: %100 suni deri</li>
        <li>Model Boy : 175cm</li>
        <li>Ürün boy : 102cm</li>
        <li>Numune Beden : 34</li>
        <li>Beden Tablosu</li>
        <li>34 beden - 31cm</li>
        <li>36 beden - 33cm</li>
        <li>38 beden - 35cm</li>
        <li>40 beden - 37cm</li>
        <li>ÜRÜN BAKIM VE KULLANIM TALİMATI</li>
        <li>
          Gazete dergi, renkli poşet vs. üzerindeki mürekkep ürüne geçip kalıcı
          leke bırakabileceğinden ürünün üzerine bırakmayınız.
        </li>
        <li>
          Kesinlikle ütü yaklaştırmayınız ve elektrikli ısıtıcı gibi ısı
          kaynaklarından uzak tutunuz.
        </li>
        <li>
          Özellikle açık renkli derilerin koyu renkli boya veren bir ürün ile
          teması halinde lekelenme olabilmektedir. Bu leke, derinin kendisinden
          değil temas eden boya ve renk veren üründen kaynaklandığını
          unutmayınız.
        </li>
        <li>
          İade veya değişim için göndereceğiniz ürünü mutlaka şeffaf boya
          vermeyen baskısız bir poşetle gönderiniz.
        </li>
        <li>
          Haftalık olarak ürün yüzeyindeki toz veya kiri, nemli veya
          gerektiğinde saf sabunlu su ile ıslatılmış beyaz ve yumuşak pamuklu
          bir bezle alınız, durulayınız ve kurulayınız.
        </li>
        <li>
          Bu üründen en fazla 10 adet sipariş verilebilir. 10 adetin üzerindeki
          siparişleri Trendyol iptal etme hakkını saklı tutar.
        </li>
        <li>
          Kampanya fiyatından satılmak üzere 100 adetten fazla stok sunulmuştur.
        </li>
        <li>
          İncelemiş olduğunuz ürünün satış fiyatını satıcı belirlemektedir.
        </li>
        <li>Listelenen fiyat 27 Kasım 2021 tarihine kadar geçerlidir.</li>
      </ul>
      <div className="all-features">
        <div className="opacity-layout"></div>
        <a href="/" className="button-all-features">
          ÜRÜNÜN TÜM ÖZELLİKLERİ
        </a>
      </div>
    </div>
  );
};

export default ProductFeatured;
