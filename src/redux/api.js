import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: 'search',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://google-search3.p.rapidapi.com/api/v1'
  }),
  endpoints: (builder) => ({
    getSearch: builder.query({
      query: (query) => ({
        url: `https://google-search3.p.rapidapi.com/api/v1/${query.type}/q=${query.q}`,
        headers: {
          'X-User-Agent': 'desktop',
          'X-Proxy-Location': 'EU',
          'X-RapidAPI-Key': '3d9d850c3amshf2153efaaf103d6p19cd0ajsna1ac1ab60411',
          'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
        }
      })
    })
  })
});

export const {useGetSearchQuery} = api
// export default Api;