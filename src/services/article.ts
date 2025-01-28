import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const rapidApiKey = process.env.RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/extract?url=https%3A%2F%2Ftime.com%2F6266679%2Fmusk-ai-open-letter%2F' || rapidApiKey,
        prepareHeaders: (headers) => {
            // if you are cloning this than add your own API key from rapid API
            headers.set('X-RapidAPI-Key', 'f48cc35d74msh58b95d6fe875849p1700c8jsnbdb88a51aac7');
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            // encodeURIComponent() function encodes special characters that may be present in the parameter values
            // If we do not properly encode these characters, they can be misinterpreted by the server and cause errors or unexpected behavior. Thus that RTK bug
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        }),
    }),
})

//export const { useLazyGetSummaryQuery } = articleApi