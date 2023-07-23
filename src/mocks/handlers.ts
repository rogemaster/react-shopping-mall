import { graphql } from 'msw'
import {v4 as uuid} from 'uuid';
import {QueryKeys} from "../queryClient";
import {GET_PRODUCT} from "../graphql/products";

const mock_products = Array.from({ length: 20 }).map((_, i) => ({
  id: uuid(),
  imageUrl: '',
  price: 100000 * i,
  title: `임시상품 ${i+1}`,
  description: `임시상품 상세설명 ${i+1}`,
  createdAt: new Date(1689865421 + (i*1000*60*60*10)).toString()
}));

export const handlers = [
  graphql.query(QueryKeys.PRODUCTS, (req, res, ctx) => {
    return res(
      ctx.data({
        products: mock_products
      }),
    )
  }),
  graphql.query(GET_PRODUCT, (req, res, ctx) => {
    return res(ctx.data(mock_products[0]))
  })
]