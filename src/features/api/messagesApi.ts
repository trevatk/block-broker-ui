
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type {
    FetchMessageParams,
    FetchMessageResponse,
    ListMessagesParams,
    ListMessagesResponse,
    ListMessagesByTopicParams,
    ListMessagesByTopicResponse,
    ListTopicsParams,
    ListTopicsResponse
} from './types'

export const messagesApi = createApi({
    reducerPath: 'messageApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/v1/', mode: 'cors' }),
    endpoints: (builder) => ({
        fetchMessage: builder.query<FetchMessageResponse, FetchMessageParams>({
            query: (params) => ({
                url: `messages/${params.hash}`
            }),
            // transformResponse: (response: { data: FetchMessageResponse }, meta, arg) => response.data
        }),
        listMessages: builder.query<ListMessagesResponse, ListMessagesParams>({
            query: (params) => ({
                url: `messages?limit=${params.limit}&offset=${params.offset}`,
            }),
            // transformResponse: (response: { data: ListMessagesResponse }, meta, arg) => response.data
        }),
        listMessagesByTopic: builder.query<ListMessagesByTopicResponse, ListMessagesByTopicParams>({
            query: (params) => `messages/topics/${params.topic}?limit=${params.limit}&offset=${params.offset}`
        }),
        listTopics:  builder.query<ListTopicsResponse, ListTopicsParams>({
            query: (params) => `messages/topics?limit=${params.limit}&offset=${params.offset}`
        }),
    })
})

export const {
    useFetchMessageQuery,
    useListMessagesQuery,
    useLazyListMessagesByTopicQuery,
    useListTopicsQuery
} = messagesApi