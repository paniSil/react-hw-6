import { createBrowserRouter, RouterProvider } from 'react-router'
import NotFound from './components/pages/NotFound'
import Layout from './components/Layout'
import { routes } from './config/router.config'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      ...routes.map(({ path, Component }) => ({
        path,
        element: <Component />
      }))
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
