import React from "react";
import "./HireBanner.css";

const HireBanner = () => {
  return (
    <section id="hire" className="hire-banner-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="hire-banner-card">
              <div className="row align-items-center">
                {/* Left Side - Text Content */}
                <div className="col-lg-6 col-md-7 col-sm-12">
                  <div className="hire-banner-text">
                    <h2 className="hire-banner-heading">
                      Hire the best developers and designers around!
                    </h2>
                  </div>
                </div>

                {/* Right Side - Button with Sparkles */}
                <div className="col-lg-6 col-md-5 col-sm-12">
                  <div className="hire-banner-button-wrapper">
                    {/* Top Sparkles */}
                    <div className="sparkle-group sparkle-top">
                      <div className="sparkle-line sparkle-1"></div>
                      <div className="sparkle-line sparkle-2"></div>
                      <div className="sparkle-line sparkle-3"></div>
                      <div className="sparkle-line sparkle-4"></div>
                    </div>

                    {/* Button */}
                    <button className="btn hire-banner-btn">
                      Hire Top Developers
                    </button>

                    {/* Bottom Sparkles */}
                    <div className="sparkle-group sparkle-bottom">
                      <div className="sparkle-line sparkle-1"></div>
                      <div className="sparkle-line sparkle-2"></div>
                      <div className="sparkle-line sparkle-3"></div>
                      <div className="sparkle-line sparkle-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireBanner;

