import {QueryClient,} from 'react-query'
import request, {RequestDocument} from "graphql-tag";

type AnyOBJ = {[key: string]: any};

export const getClient = (() => {
  let client: QueryClient | null = null;
  return () => {
    // 캐시 처리 - react query 의 좋은점
    if (!client) client = new QueryClient({
      defaultOptions: {
        queries: {
          cacheTime: 1000 * 60 * 60 * 24,
          startTime: 1000,
          refetchOnMount: false,
          refetchOnReconnect: false,
          refetchOnWindowFocus: false
        }
      }
    });
    return client;
  }
})()

const BASE_API = '/'

export const restFetcher = async ({
  method,
  path,
  body,
  params
}: {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
  path: string,
  body?: AnyOBJ,
  params?: AnyOBJ
}) => {
  try {
    let url = `${BASE_API}${path}`
    const fetchOptions: RequestInit = {
      method,
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': BASE_API
      }
    }

    if (params) {
      const searchParams = new URLSearchParams(params);
      url += '?' + searchParams.toString();
    }

    if (body) fetchOptions.body = JSON.stringify(body);

    const res = await fetch(url, fetchOptions)
    return await res.json()
  }catch (err) {
    console.log(err)
  }
}

export const graphqlFetcher = (query: RequestDocument, variables = {}) => request((BASE_API, query, variables))

export const QueryKeys = {
  PRODUCTS: 'products',
}