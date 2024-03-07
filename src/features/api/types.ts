
export interface FetchMessageParams {
    hash: string
}

export interface MessagePayload {
    uid: string
    topic: string
    payload: Uint8Array
    createdAt: Date
}

export interface FetchMessageResponse {
    payload: MessagePayload
}

export interface ListTopicsParams {
    limit: number
    offset: number
}

export interface ListTopicsResponse {
    topics: [string]
}