// src/components/WhyChooseUs.js
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import "../../Styles/WhyChooseUs/WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us container-fluid bg-white py-5" id="">
      <div className="container ">
        <div className="row align-items-center justify-content-between">
          {/* Left Images */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="image-stack">
              <Image
                src="/whyChoose1.svg"
                alt="Team"
                width={500}
                height={100}
                className="img-fluid top-image"
              />
              <Image
                src="/whyChoose2.svg"
                alt="Consultant"
                width={200}
                height={100}
                className="img-fluid overlay-image"
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="col-md-6">
            <h3 className="section-title">
              WHY CHOOSE US ? <br />
              {/* <span className="highlight">Choosing Our Consultancy</span> */}
            </h3>

            <ul className="features-list ps-0 mt-4">
              <li>
                <FaCheckCircle className="check-icon" />
                We believe in transforming innovative ideas into powerful
                software solutions.
              </li>
              <li>
                <FaCheckCircle className="check-icon" />
                As a forward-thinking software company, we specialize in
                creating custom applications.
              </li>
              <li>
                <FaCheckCircle className="check-icon" />
                Our mission is to simplify the complexities of technology and
                deliver cutting-edge software.
              </li>
              <li>
                <FaCheckCircle className="check-icon" />
                We are committed to driving growth and efficiency for businesses
                of all sizes.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
