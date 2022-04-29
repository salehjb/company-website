import Link from "next/link";
// Styles
import styles from "./HeroContent.module.scss";

function HeroContent() {
  return (
    <div className={styles.hero_content_container}>
      <h1 className={styles.header_text}>
        <span className={styles.first_span}>Data to enrich your</span>
        <span className={styles.second_span}>online business</span>
      </h1>
      <div className={styles.description}>
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </div>
      <div className={styles.links}>
        <Link href="/">
          <a className={styles.first_link}>Get started</a>
        </Link>
        <Link href="/">
          <a className={styles.second_link}>Live demo</a>
        </Link>
      </div>
    </div>
  );
}

export default HeroContent;
