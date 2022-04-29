// Styles
import styles from "./PricePlans.module.scss";
// Datas
import { pricePlans } from "../../datas";
import PricePlanBox from "../price-plan-box/PricePlanBox";

function PricePlans() {
  return (
    <div className={styles.price_plans_container}>
      <div className={styles.price_plans_boxs_container}>
        {pricePlans.map((plan) => (
          <PricePlanBox key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
}

export default PricePlans;
