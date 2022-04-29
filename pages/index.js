import Image from "next/image";
// Styles
import styles from "../scss/pages-styles/home.module.scss";
// Components
import HeroSection from "../components/hero-section/HeroSection";
import AboutPanak from "../components/about-panak/AboutPanak";
import PricePlans from "../components/price-plans/PricePlans";
import OurTeam from "../components/our-team/OurTeam";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div className={styles.home_container}>
      <HeroSection />
      <AboutPanak />
      <PricePlans />
      <OurTeam />
      <Footer />
    </div>
  );
}
