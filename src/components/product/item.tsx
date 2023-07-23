import {Link} from "react-router-dom";
import {Products} from "../../graphql/products";

const ProductItem = ({
  id,
  title,
  price,
  description,
  imageUrl,
  createAt
}: Products) => (
  <li className="product-item">
    <Link to={`/products/${id}`}>
      <p className="product-item__title">{title}</p>
    </Link>
    <img className="product-item__image" src={imageUrl} alt="main-image" />
    <span className="product-item_price">{price}</span>
  </li>
)

export default ProductItem;