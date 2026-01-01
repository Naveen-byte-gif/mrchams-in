// components/Navbar.js
import HeroSection from "@/app/components/Hero-Section/HeroSection";
import Navbar from "@/app/components/NavBar/Navbar";
import OurServices from "@/app/components/OurServices/OurServices";
import WhyChooseUs from "@/app/components/WhyChooseUs/WhyChooseUs";
import Portfolio from "@/app/components/Portfolio/Portfolio";
import Contact from "@/app/components/Contact/Contact";
import Projects from "@/app/components/Projects/Projects";
import WayOfBuilding from "@/app/components/WayOfBuilding/WayOfBuilding";
import DesignApproach from "@/app/components/DesignApproach/DesignApproach";
import DevelopmentProcess from "@/app/components/DevelopmentProcess/DevelopmentProcess";
import HireBanner from "@/app/components/HireBanner/HireBanner";
import Footer from "@/app/components/Footer/Footer";
import AboutUs from "@/app/components/AboutUs/AboutUs";

const HomeAllPages = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <HeroSection />
        <AboutUs />
        <WayOfBuilding />
        <DevelopmentProcess />
        <DesignApproach />
        {/* <WhyChooseUs /> */}
        {/* <OurServices /> */}
        <Projects />
        {/* <Portfolio /> */}
        {/* <Contact /> */}
        <HireBanner />
        <Footer />
      </div>
    </>
  );
};

export default HomeAllPages;
