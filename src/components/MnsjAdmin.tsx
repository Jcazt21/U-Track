import { FunctionComponent } from "react";
import './Mnsj.moduleProfe.css';
import User2 from "./userAdmin.json";

const Mnsj: FunctionComponent = () => {
  return (
    <div className="mnsj">
      <div className="txtFrase">
        “La educación es el arma más poderosa que puedes usar para cambiar el mundo.”
      </div>
      <h1 className="txtMnsjProfesor">Buen día {User2[0].name}</h1>
    </div>
  );
};

export default Mnsj;
