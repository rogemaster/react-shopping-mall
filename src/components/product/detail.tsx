const ProductDetail = ({
  item: {
   title,
   price,
   description,
   imageUrl
  }
}) => (
  <div className="product-detail">
    <p className="product-detail__title">{title}</p>
    <img className="product-detail__image" src={imageUrl} alt="detail-image" />
    <p className="product-detail_description">{description}</p>
    <span className="product-detail_price">{price}</span>
  </div>
)

export default ProductDetail;