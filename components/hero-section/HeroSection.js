import Image from "next/image";
// Styles
import styles from "./HeroSection.module.scss";
// Components
import HeroContent from "../hero-content/HeroContent"
// Assets
import heroImg from "../../public/images/computer-team.jpg"

function HeroSection() {
  return (
    <div className={styles.hero_section_container}>
      <div className={styles.left_side}>
        <HeroContent />
      </div>
      <div className={styles.right_side}>
        <Image src={heroImg} alt="hero-img" />
      </div>
    </div>
  );
}

export default HeroSection;
