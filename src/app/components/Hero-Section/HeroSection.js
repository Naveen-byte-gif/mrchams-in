import React from "react";
import "../../Styles/HeroSection/HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <section
        className="position-relative text-center"
        // style={{ marginTop: "100px" }}
      >
        <img
          src={"/Hero-banner.svg"}
          alt="Hero Background"
          className="img-fluid w-100 pageHeroBackground"
        />
        <div className="productTitleContainer">
          <p className="productTitle">“YOUR VISION, OUR CODE.”</p>
          {/* <p className="heroDec">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            pretium purus at blandit consequat.
          </p> */}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
