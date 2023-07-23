// import {useCallback, useEffect, useRef, useState} from 'react';
import {useQuery} from "react-query";
import {graphqlFetcher, QueryKeys} from "../../queryClient";
import ProductItem from "../../components/product/item";
import GET_PRODUCTS, {Products} from "../../graphql/products";
// import useInfiniteScroll from "../../hook/useInfiniteScroll";

const ProductList = () => {
  const {data} = useQuery<Products>(QueryKeys.PRODUCTS, () => graphqlFetcher(GET_PRODUCTS))

  // 무한 스크롤 주석처리
  // const observerRef = useRef<IntersectionObserver>();
  // const fetchMoreRef = useRef<HTMLDivElement>(null);
  // const [intersecting, setIntersecting] = useState(false);
  //
  // // hook 으로 뺏을경우
  // const intersecting2 = useInfiniteScroll(fetchMoreRef);
  //
  // const getObserver = useCallback(() => {
  //   if (!observerRef.current) {
  //     observerRef.current = new IntersectionObserver(entries => {
  //       setIntersecting(entries.some((entry) => entry.isIntersecting));
  //       setIntersecting(entries[0]?.isIntersecting);
  //     });
  //   }
  //   return observerRef.current;
  // }, [observerRef.current]);
  //
  // useEffect(() => {
  //   if (fetchMoreRef.current) getObserver()?.observe(fetchMoreRef.current);
  // }, [fetchMoreRef.current])
  //
  // const {data, isSuccess, isFetchingNextPage, fetchNextPage, hasNextPage} = useInfiniteQuery<Product[]>
  // (QueryKeys.PRODUCTS,
  //   ({pageParams = ''}) => graphqlFetcher(GET_PRODUCTS, {cursor: pageParams}),
  //   {
  //     getNextPageParam: (lastPage, pages) => {
  //       lastPage.products.at(-1)?.id
  //     }
  //   }
  // )
  //
  // useEffect(() => {
  //   if (!intersecting || !isSuccess || !hasNextPage || isFetchingNextPage) return;
  //   fetchNextPage();
  // }, [intersecting]);

  return (
    <div>
      <h2>상품목록</h2>
      <ul className="products">
        {data?.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
        {/*<div ref={fetchMoreRef} />*/}
      </ul>
    </div>
  )

}

export default ProductList;