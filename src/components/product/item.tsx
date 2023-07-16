import {Link} from "react-router-dom";

const ProductItem = ({
  id,
  title,
  price,
  category,
  description,
  image,
  rating
}: Product) => (
  <li className="product-item">
    <Link to={`/products/${id}`}>
      <span className="product-item__category">{category}</span>
      <p className="product-item__title">{title}</p>
    </Link>
    <img className="product-item__image" src={image} alt="main-image" />
    <span className="product-item_price">{price}</span>
    <span className="product-item__rating">{rating.rate}</span>
  </li>
)

export default ProductItem;