// components/Navbar.js
import HeroSection from "@/app/components/Hero-Section/HeroSection";
import Navbar from "@/app/components/NavBar/Navbar";
import OurServices from "@/app/components/OurServices/OurServices";
import WhyChooseUs from "@/app/components/WhyChooseUs/WhyChooseUs";
import Portfolio from "@/app/components/Portfolio/Portfolio";
import Contact from "@/app/components/Contact/Contact";
import SparklesCore from "@/app/components/Hero-Section/SparklesCore";
// import ZaanvarLanding from "./ZaanvarLanding/ZaanvarLanding";

const HomeAllPages = () => {
  return (
    <>
      <div className="">
        <Navbar />
        {/* <Hero /> */}
        {/* <ZaanvarLanding /> */}
        <HeroSection />
        <WhyChooseUs />
        <OurServices />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
};

export default HomeAllPages;
