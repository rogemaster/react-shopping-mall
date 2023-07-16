import {QueryClient,} from 'react-query'

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

const BASE_API = 'https://fakestoreapi.com'

export const fetcher = async ({
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

export const QueryKeys = {
  PRODUCTS: 'products',
}