
import React, { MouseEventHandler, useCallback, useState } from 'react'

import {
    useListMessagesQuery
} from '../api/messagesApi'
import { Link, useNavigate } from 'react-router-dom'


interface initalState {
    limit: number
    offset: number
}

const MessageListViewComponent: React.FC = () => {

    const navigate = useNavigate()

    const [state, setState] = useState<initalState>({
        limit: 10,
        offset: 0
    })

    const { data,
        isFetching,
        isLoading,
        isError,
    } = useListMessagesQuery({
        limit: state.limit,
        offset: state.offset
    }, {
        refetchOnMountOrArgChange: true,
        skip: false
    })

    if (isLoading || isFetching) return <div>Loading...</div>

    function handleOnClick(key: string) {
        navigate(`/messages/${key}`)
    }

    if (data) {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Hash</th>
                            <th>Topic</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data!.payload.map((message) => {
                                return (
                                    <tr>
                                        <td><Link to={`/messages/${message.hash}`}>{message.hash}</Link></td>
                                        <td>{message.topic}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }

    return null
}

const ListMessages = (): JSX.Element => {
    return (
        <div>
            <MessageListViewComponent />
        </div>
    )
}

export default ListMessages