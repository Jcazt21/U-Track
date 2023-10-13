import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import "./Seleccion.css";
import ProfileSidebar from "./components/ProfileSidebar";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import seleccion from "./seleccion.json"; // Importa el archivo JSON de selección

const columns: GridColDef[] = [
  { field: "id", headerName: "X", width: 80 },
  {
    field: "Asignatura",
    headerName: "Asignatura",
    width: 150,
  },
  {
    field: "Horario",
    headerName: "Horario",
    width: 151,
  },
  {
    field: "docente",
    headerName: "Docente",
    type: "string", // Cambiado de 'number' a 'string' para que coincida con el tipo de datos en el archivo JSON
    width: 110,
  },
  {
    field: "seccion",
    headerName: "Seccion",
    width: 110,
  },
];

const Seleccion: React.FC = () => {
  const [rows, setRows] = useState([]); // Establece el estado para las filas

  useEffect(() => {
    setRows(seleccion.asignaturas); // Actualiza el estado con los datos del archivo JSON
  }, []);

  return (
    <div className="Seleccion">
      <Sidebar />
      <ProfileSidebar />
      <div className="TablaSeleccion">
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
          />
        </Box>
      </div>
      <button className="saveBtn">Guardar</button>
      <button className="cancelBtn">Cancelar</button>
    </div>
  );
};

export default Seleccion;
