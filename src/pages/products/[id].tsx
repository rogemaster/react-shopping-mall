import {graphqlFetcher, QueryKeys} from "../../queryClient";
import {useQuery} from "react-query";
import {useParams} from "react-router-dom";
import ProductDetail from "../../components/product/detail";
import GET_PRODUCTS, {GET_PRODUCT, Product} from "../../graphql/products";

const ProductDetailPage = () => {
  const {id} = useParams()
  const {data} = useQuery<Product>([QueryKeys.PRODUCTS, id], () => graphqlFetcher(GET_PRODUCT, {id}))

  // if (!data) return null;

  return (
    <>
      <h2>상품상세</h2>
      <ProductDetail item={data} />
    </>
  );
}

export default ProductDetailPage;