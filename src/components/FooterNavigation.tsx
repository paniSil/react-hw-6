import { Link } from 'react-router'

const FooterNavigation = () => {
  return (
    <div className="footer">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </div>
  )
}

export default FooterNavigation
