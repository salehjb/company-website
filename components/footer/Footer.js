import Image from "next/image";
// Styles
import styles from "./Footer.module.scss";
// Assets
import logo from "../../public/images/logo-white.svg";
// Datas
import { footerLinks } from "../../datas";

function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.left_side}>
        <div className={styles.logo}>
          <div className={styles.logo_container}>
            <Image src={logo} alt="logo" width="50" height="50" />
          </div>
          <div className={styles.description}>
            Making the world a better place through constructing elegant
            hierarchies.
          </div>
          <div className={styles.medias}>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-github"></i>
          </div>
        </div>
      </div>
      <div className={styles.right_side}>
        {footerLinks.map((object, index) => (
          <div key={index} className={styles.links_container}>
            {Object.values(object).map((items, index) => (
              <div key={index}>
                <h2>{Object.keys(object)[index]}</h2>
                <ul>
                  {items.map((item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
