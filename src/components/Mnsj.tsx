import { FunctionComponent } from "react";
import styles from "./Mnsj.module.css";

const Mnsj: FunctionComponent = () => {
  return (
    <div className={styles.mnsj}>
      <div className={styles.txtFrase}>
        “La educación es el arma más poderosa que puedes usar para cambiar el
        mundo.”
      </div>
      <h1 className={styles.txtMnsjestudiante}>Buen dia estudiante!</h1>
    </div>
  );
};

export default Mnsj;
