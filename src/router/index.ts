
import { createBrowserRouter } from 'react-router-dom'

import App from '../App'

import Details from '../features/messages/Details'

const router = createBrowserRouter([
    {
        path: '/',
        element: App()
    },
    {
        path: '/messages/:hash',
        element: Details()
    },
])

export default router