const ProductDetail = ({
  item: {
   title,
   price,
   category,
   description,
   image,
   rating: {rate}
  }
}) => (
  <div className="product-detail">
    <span className="product-detail__category">{category}</span>
    <p className="product-detail__title">{title}</p>
    <img className="product-detail__image" src={image} alt="detail-image" />
    <p className="product-detail_description">{description}</p>
    <span className="product-detail_price">{price}</span>
    <span className="product-detail__rating">{rate}</span>
  </div>
)

export default ProductDetail;