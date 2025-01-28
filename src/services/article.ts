import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidApiKey = process.env.RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      // if you are cloning this than add your own API key from rapid API
      headers.set(
        "X-RapidAPI-Key",
        "46d0a98eefmsh52203bbdf0b3dfap1bba50jsn41f26e2422ea"
      );
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      // encodeURIComponent() function encodes special characters that may be present in the parameter values
      // If we do not properly encode these characters, they can be misinterpreted by the server and cause errors or unexpected behavior. Thus that RTK bug
      query: (params) =>
        `summarize?url=${encodeURIComponent(params.articleUrl)}&lang=en&engine=2`,
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
