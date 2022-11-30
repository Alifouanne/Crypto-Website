import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const cryptoNewsHeadrs= {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '30eb0d7bebmshb43352e9190fe58p19a0d0jsna360f525c4e4',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }
  const baseUrl='https://bing-news-search1.p.rapidapi.com/news'
  const createRequest = (url) => ({ url, headers: cryptoNewsHeadrs });

  export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
  
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: ({newsCategory,count}) => createRequest(`${baseUrl}/search?q=${newsCategory}&safeSearch=off&textFormat=Raw&freshness=Day&count=${count}`),
      }),
    }),
  });

  export const {useGetCryptoNewsQuery}=cryptoNewsApi