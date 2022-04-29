import Image from "next/image";
import Link from "next/link";
// Styles
import styles from "./OurTeamBox.module.scss";

function OurTeamBox({ team }) {
  return (
    <div className={styles.our_team_box_container}>
      <div className={styles.image_container}>
        <Image
          src={team.image}
          alt="team image"
          className={styles.image}
          width="400px"
          height="250px"
        />
      </div>
      <h3 className={styles.name}>{team.name}</h3>
      <div className={styles.position}>{team.position}</div>
      <div className={styles.media}>
        <Link href={team.media.twitter}>
          <a>
            <i className="fa-brands fa-twitter"></i>
          </a>
        </Link>
        <Link href={team.media.facebook}>
          <a>
            <i className="fa-brands fa-facebook"></i>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default OurTeamBox;
