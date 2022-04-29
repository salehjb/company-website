// Styles
import styles from "./PricePlanBox.module.scss";

function PricePlanBox({ plan }) {
  return (
    <div className={styles.price_plan_box_container}>
      {plan.name === "Startup" && (
        <div className={styles.popular}>
          <span className={styles.popular_text}>Most Popular</span>
        </div>
      )}
      <h2 className={styles.name}>{plan.name}</h2>
      <div className={styles.price}>
        <span>${plan.price}</span>/month
      </div>
      <div className={styles.description}>{plan.description}.</div>
      <ul className={styles.features}>
        {plan.features.map((feature) => (
          <div key={feature} className={styles.feature_container}>
            <i className="fa-solid fa-check"></i>
            <li>{feature}</li>
          </div>
        ))}
      </ul>
      <button
        className={
          plan.name === "Startup"
            ? styles.get_started_first_button
            : styles.get_started_second_button
        }
      >
        Get started
      </button>
    </div>
  );
}

export default PricePlanBox;
