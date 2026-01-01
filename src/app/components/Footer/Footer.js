import React from "react";
import Image from "next/image";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer-section">
      <div className="container">
        <div className="row footer-content">
          {/* Left Column - Logo and Description */}
          <div className="col-lg-4 col-md-6 col-12 footer-column footer-left">
            <div className="footer-logo-wrapper">
              <div className="footer-logo-icon">
                <Image
                  src="/mrChams-Logo.svg"
                  alt="Location Icon"
                  width={60}
                  height={60}
                  className="footer-location-img"
                />
              </div>
              <span className="footer-logo-text">MRCHAMS</span>
            </div>
            <p className="footer-description">
              We are a leading software solutions company, delivering innovative
              and reliable technology services to help businesses grow.
            </p>
          </div>

          {/* Middle Column - Contact Information */}
          <div className="col-lg-4 col-md-6 col-12 footer-column footer-middle">
            <h3 className="footer-heading">Contact us</h3>
            <p className="footer-description">
              Reach out to our team for any inquiries or support:
            </p>
            <div className="footer-contact-info">
              <a href="tel:+918885102116" className="footer-phone">
                +91 8885 102 116
              </a>
              <a href="tel:+919248176187" className="footer-phone">
                +91 9248 176 187
              </a>
              <a href="mailto:support@mrchams.com" className="footer-email">
                support@mrchams.com
              </a>
            </div>
          </div>

          {/* Right Column - Office Address */}
          <div className="col-lg-4 col-md-12 col-12 footer-column footer-right">
            <div className="footer-location-icon-wrapper">
              <div className="footer-location-icon">
                <Image
                  src="/Google maps.png"
                  alt="Location Icon"
                  width={60}
                  height={60}
                  className="footer-location-img"
                  style={{ margin: 0, padding: 0, display: 'block' }}
                />
              </div>
            </div>
            <h3 className="footer-heading">OFFICE ADDRESS</h3>
            <p className="footer-address">KPHB, Hyderabad</p>
          </div>
        </div>

        {/* Social Media Icons - Bottom Right */}
        <div className="footer-social-wrapper">
          <div className="footer-social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="Facebook"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="Instagram"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C18.105 2.291 18.927 2.523 19.642 2.848C20.448 3.22 21.101 3.671 21.752 4.322C22.403 4.973 22.854 5.626 23.226 6.432C23.551 7.147 23.783 7.969 23.841 9.224C23.899 10.49 23.911 10.87 23.911 14.074C23.911 17.278 23.899 17.658 23.841 18.924C23.783 20.179 23.551 21.001 23.226 21.716C22.854 22.522 22.403 23.175 21.752 23.826C21.101 24.477 20.448 24.928 19.642 25.3C18.927 25.625 18.105 25.857 16.85 25.915C15.584 25.973 15.204 25.985 12 25.985C8.796 25.985 8.416 25.973 7.15 25.915C5.895 25.857 5.073 25.625 4.358 25.3C3.552 24.928 2.899 24.477 2.248 23.826C1.597 23.175 1.146 22.522 0.774 21.716C0.449 21.001 0.217 20.179 0.159 18.924C0.101 17.658 0.089 17.278 0.089 14.074C0.089 10.87 0.101 10.49 0.159 9.224C0.217 7.969 0.449 7.147 0.774 6.432C1.146 5.626 1.597 4.973 2.248 4.322C2.899 3.671 3.552 3.22 4.358 2.848C5.073 2.523 5.895 2.291 7.15 2.233C8.416 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C5.775 0.132 4.905 0.333 4.14 0.63C3.305 0.957 2.592 1.368 1.879 2.081C1.166 2.794 0.755 3.507 0.428 4.342C0.131 5.107 -0.07 5.977 -0.01 7.255C0.05 8.535 0.064 8.943 0.064 12.202C0.064 15.461 0.05 15.869 -0.01 17.149C-0.07 18.427 0.131 19.297 0.428 20.062C0.755 20.897 1.166 21.61 1.879 22.323C2.592 23.036 3.305 23.447 4.14 23.774C4.905 24.071 5.775 24.272 7.053 24.332C8.333 24.392 8.741 24.406 12 24.406C15.259 24.406 15.667 24.392 16.947 24.332C18.225 24.272 19.095 24.071 19.86 23.774C20.695 23.447 21.408 23.036 22.121 22.323C22.834 21.61 23.245 20.897 23.572 20.062C23.869 19.297 24.07 18.427 24.13 17.149C24.19 15.869 24.204 15.461 24.204 12.202C24.204 8.943 24.19 8.535 24.13 7.255C24.07 5.977 23.869 5.107 23.572 4.342C23.245 3.507 22.834 2.794 22.121 2.081C21.408 1.368 20.695 0.957 19.86 0.63C19.095 0.333 18.225 0.132 16.947 0.072C15.667 0.014 15.259 0 12 0Z"
                  fill="currentColor"
                />
                <path
                  d="M12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.162 12 18.162C15.403 18.162 18.162 15.403 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.209 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.209 14.209 16 12 16Z"
                  fill="currentColor"
                />
                <circle cx="18.406" cy="5.594" r="1.44" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="Twitter"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.953 4.57C23.325 4.857 22.645 5.06 21.933 5.17C22.658 4.72 23.227 4.013 23.503 3.18C22.822 3.593 22.057 3.893 21.243 4.06C20.595 3.371 19.678 2.94 18.654 2.94C16.577 2.94 14.897 4.62 14.897 6.697C14.897 6.98 14.93 7.253 14.992 7.513C10.303 7.29 6.163 5.06 3.17 1.83C2.86 2.35 2.68 2.96 2.68 3.61C2.68 4.83 3.25 5.9 4.13 6.47C3.54 6.45 2.99 6.28 2.52 6.01V6.06C2.52 7.87 3.81 9.39 5.58 9.73C5.28 9.82 4.96 9.86 4.63 9.86C4.4 9.86 4.18 9.84 3.97 9.8C4.41 11.3 5.78 12.38 7.42 12.41C6.15 13.4 4.5 14.01 2.71 14.01C2.43 14.01 2.15 13.99 1.88 13.96C3.55 15.01 5.5 15.61 7.57 15.61C18.644 15.61 24.17 9.92 24.17 5.08C24.17 4.9 24.16 4.72 24.15 4.54C24.85 4.02 25.45 3.38 25.95 2.66C25.3 2.94 24.6 3.12 23.87 3.2C24.61 2.75 25.18 2.08 25.45 1.28C24.75 1.7 23.98 2.01 23.15 2.18C22.48 1.48 21.52 1 20.46 1C18.38 1 16.7 2.68 16.7 4.76C16.7 5.04 16.73 5.31 16.79 5.57C13.28 5.38 10.15 3.7 8.12 1.15C7.83 1.65 7.66 2.25 7.66 2.88C7.66 4.08 8.23 5.15 9.11 5.72C8.52 5.7 7.97 5.53 7.48 5.26V5.31C7.48 7.12 8.77 8.64 10.54 8.98C10.24 9.07 9.92 9.11 9.59 9.11C9.36 9.11 9.14 9.09 8.93 9.05C9.37 10.55 10.74 11.63 12.38 11.66C11.11 12.65 9.46 13.26 7.67 13.26C7.39 13.26 7.11 13.24 6.84 13.21C8.51 14.26 10.46 14.86 12.53 14.86C20.46 14.86 24.99 9.17 24.99 4.35C24.99 4.17 24.98 3.99 24.97 3.81C25.67 3.29 26.27 2.65 26.77 1.93C26.12 2.21 25.42 2.39 24.69 2.47L23.953 4.57Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="LinkedIn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.156 9.812 14.113 9.019 15.565 9.019C18.539 9.019 19.447 11.081 19.447 14.166V20.452H20.447ZM7.337 7.433C6.193 7.433 5.274 6.507 5.274 5.367C5.274 4.228 6.194 3.302 7.337 3.302C8.477 3.302 9.401 4.228 9.401 5.367C9.401 6.507 8.476 7.433 7.337 7.433ZM5.337 20.452H9.405V9H5.337V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <div className="footer-divider"></div>
          <p className="footer-copyright-text">
            © 2023 Copyright by Mrchams. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
