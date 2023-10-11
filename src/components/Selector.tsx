import React, { useState } from 'react';


function Selector() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(""); // El estado para la opción seleccionada

  const handleChange = (select) => {
    setOpcionSeleccionada(select.target.value);
  };

  return (
    <div>
      <select value={opcionSeleccionada} onChange={handleChange}>
        <option value="">Seleccionar Asignatura...</option>
        <option value="Asignatura">Desarrollo de Software III</option>
        <option value="Asignatura">Aseguramiento de la Calidad</option>
        <option value="Asignatura">Diseño de Software</option>
      </select>
    </div>
  );
}

export default Selector;