import React from "react";

export default function Nav() {
  return (
    <nav
      className="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg"
      color-on-scroll="100"
      id="sectionsNav"
    >
      <div className="container">
        <div className="navbar-translate">
          <a className="navbar-brand">Simple Profile</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                rel="tooltip"
                title=""
                data-placement="bottom"
                href="https://twitter.com/"
                target="_blank"
                data-original-title="Follow us on Twitter"
                rel="nofollow"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                rel="tooltip"
                title=""
                data-placement="bottom"
                href="https://www.facebook.com/"
                target="_blank"
                data-original-title="Like us on Facebook"
                rel="nofollow"
              >
                <i className="fa fa-facebook-square"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                rel="tooltip"
                title=""
                data-placement="bottom"
                href="https://www.instagram.com/"
                target="_blank"
                data-original-title="Follow us on Instagram"
                rel="nofollow"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
