import { FunctionComponent } from "react";
import styles from "./Mnsj.module.css";
import user from "./user.json";

const Mnsj: FunctionComponent = () => {
  return (
    <div className={styles.mnsj}>
      <div className={styles.txtFrase}>
        “La educación es el arma más poderosa que puedes usar para cambiar el
        mundo.”
      </div>
      <h1 className={styles.txtMnsjestudiante}>Buen día {user[0].name}!</h1>
    </div>
  );
};

export default Mnsj;
