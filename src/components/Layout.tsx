import HeaderNavigation from './HeaderNavigation'
import FooterNavigation from './FooterNavigation'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
      <HeaderNavigation />
      <Outlet />
      <FooterNavigation />
    </>
  )
}

export default Layout
