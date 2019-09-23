import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: "lightblue",
      marginBottom: "1.45rem",
    }}
  >
    <div class='header'
      style={{
        background: "lightblue",
        marginBottom: "1.45rem",
      }}
    >
      <div class="menu"
        style={{
          margin: "0 auto",
          maxWidth: 960,
          display: "flex",
          justifyItems: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0, flex: 1 }}>
          <Link
            to="/"
            style={{
              color: "red",
              textDecoration: "none",
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <div>
          <nav>
            <ul style={{ display: "flex", flex: 1 }}>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                    
                  }}
                >
                  <Link style={{ color: `red` }} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header