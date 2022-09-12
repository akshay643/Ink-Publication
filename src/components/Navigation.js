import React from 'react'
import './Navigation.css'
import menu from './images/unnamed.png'

function Navigation() {
  return (
    <nav className="navbar " style={{ backgroundColor: '#e47373' }}>
      <div className="container-fluid">
        <a className="navbar-brand text-white fs-2 ms-4 pt-3" href="#">
          Ink Publication
        </a>
        <button
          className="navbar-toggler border-0 menu-button"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <img className="w-50 " src={menu}></img>
        </button>
        <div
          className="offcanvas offcanvas-end bg-light"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              MENU
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <h3 className="menu-item">Home</h3>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <h3 className="menu-item">Publication Process</h3>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle d-inline-block"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <h3 className="d-inline menu-item">Journals</h3>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      SCOPUS DISCONTINUED JOURNALS
                    </a>
                  </li>
                  <hr className="dropdown-divider" />

                  <li>
                    <a className="dropdown-item" href="#">
                      WEB OF SCIENCE
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      GOOGLE SCHOLAR JOURNALS
                    </a>
                  </li>
                  <hr className="dropdown-divider" />
                  <li>
                    <a className="dropdown-item" href="#">
                      HEC JOURNALS
                    </a>
                  </li>
                  <hr className="dropdown-divider" />
                  <li>
                    <a className="dropdown-item" href="#">
                      SCOPUS JOURNALS
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  <h3 className="menu-item">Payment Method</h3>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
