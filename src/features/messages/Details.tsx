
import React from 'react'

import { useFetchMessageQuery } from '../api/messagesApi'
import { useParams } from 'react-router-dom'

const MessageDetailsComponent: React.FC = () => {

    const params = useParams()
    const hash: string | undefined = params.hash
    const { data: response, isLoading, isFetching } = useFetchMessageQuery({ hash: hash! })

    if (isLoading || isFetching) {
        return <div>Loading ...</div>
    }

    if (response) {
        return (
            <div>
                <p>Hash</p>
                <p>{response.payload.hash}</p>

                <p>Topic</p>
                <p>{response.payload.topic}</p>

                <p>Payload</p>
                <p>{response.payload.payload}</p>

                <p>Timestamp</p>
                <p>{response.payload.created_at}</p>

                <p>Elapsed</p>
                <p>{response.elapsed}</p>
            </div>
        )
    }

    return (
        <div>Details Empty</div>
    )
}

const MessageDetails = (): JSX.Element => {
    return (
        <div>
            <MessageDetailsComponent />
        </div>
    )
}

export default MessageDetails