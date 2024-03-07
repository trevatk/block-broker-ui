
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type {
    FetchMessageParams,
    FetchMessageResponse,
    ListTopicsParams,
    ListTopicsResponse
} from './types'

export const messagesApi = createApi({
    reducerPath: 'messageApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://', mode: 'cors' }),
    endpoints: (builder) => ({
        fetchMessage: builder.query<FetchMessageResponse, FetchMessageParams>({
            query: (params) => `messages/${params.hash}`
        }),
        listTopics:  builder.query<ListTopicsResponse, ListTopicsParams>({
            query: (params) => `messages/topics?limit=${params.limit}&offset=${params.offset}`
        })
    })
})

export const {
    useFetchMessageQuery,
    useListTopicsQuery
} = messagesApi