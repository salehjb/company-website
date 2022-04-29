// Styles
import styles from "./OurTeam.module.scss";
// Datas
import { ourTeam } from "../../datas";
// Components
import OurTeamBox from "../our-team-box/OurTeamBox";

function OurTeam() {
  return (
    <div className={styles.our_team_container}>
      <h2>Our Team</h2>
      <div className={styles.our_team_infos}>
        {ourTeam.map((team) => (
          <OurTeamBox key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
