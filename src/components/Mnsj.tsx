import { FunctionComponent, useEffect, useState } from "react";
import styles from "./Mnsj.module.css";
import estudiantes from "./estudiantes.json";

const Mnsj: FunctionComponent = () => {
  const [nombre, setNombre] = useState("");

  useEffect(() => {
    const usuarioId = localStorage.getItem("usuarioId"); // Asumiendo que almacenaste el usuarioId en localStorage durante el inicio de sesión

    if (usuarioId) {
      const estudiante = estudiantes.estudiantes.find(
        (est) => est.usuarioId.toString() === usuarioId
      );

      if (estudiante) {
        setNombre(estudiante.nombre);
      }
    }
  }, []);

  return (
    <div className={styles.mnsj}>
      <div className={styles.txtFrase}>
        “La educación es el arma más poderosa que puedes usar para cambiar el
        mundo.”
      </div>
      <h1 className={styles.txtMnsjestudiante}>Buen día {nombre}!</h1>
    </div>
  );
};

export default Mnsj;
