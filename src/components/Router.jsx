import { createBrowserRouter } from 'react-router'
import { routes } from '../config/router.config'

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            ...routes.map(({ path, Component }) => (
                {
                    path,
                    element: <Component />
                }
            ))
        ]
    }, {
        path: '*',
        element: <Home />
    }
])

export default Router
