
export interface FetchMessageParams {
    hash: string
}

export interface MessagePayload {
    hash: string
    topic: string
    payload: Uint8Array
    created_at: string
}

export interface PartialMessagePayload {
    hash: string
    topic: string
}

export interface ListMessagesParams {
    limit: number
    offset: number
}

export interface ListMessagesResponse {
    payload: [PartialMessagePayload]
    elapsed: number
}

export interface FetchMessageResponse {
    payload: MessagePayload
    elapsed: number
}

export interface ListMessagesByTopicParams {
    topic: string
    limit: number
    offset: number
}

export interface ListMessagesByTopicResponse {
    payload: [PartialMessagePayload]
    elapsed: number
}

export interface ListTopicsParams {
    limit: number
    offset: number
}

export interface ListTopicsResponse {
    topics: [string]
    elapsed: number
}