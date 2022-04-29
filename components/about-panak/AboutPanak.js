import Image from "next/image";
// Styles
import styles from "./AboutPanak.module.scss";
// Assets
import logo from "../../public/images/logo-white.svg";

function AboutPanak() {
  return (
    <div className={styles.about_panak_container}>
      <div className={styles.left_side}>
        <Image src={logo} alt="logo" width="150" height="150" />
      </div>
      <div className={styles.right_side}>
        <h2>About Panak</h2>
        <div>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <div className={styles.overlay}></div>
    </div>
  );
}

export default AboutPanak;
