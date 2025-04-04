import Navigation from './components/Navigation'
import Router from './components/Router'
import RouterProvider from 'react-router'
import './App.css'

function App() {

  return (
    <>
      {/* <Navigation /> */}
      <RouterProvider router={Router} />
    </>
  )
}

export default App
