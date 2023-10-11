import React from "react";
import Sidebar from "./components/SidebarProfesor";
import Mnsj from "./components/MnsjProfe";
import "./HomePageProfe.css";
import data from "./assets/dataHorarioProfe.json"; // importamos el json con su ruta
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const HomePageProfe: React.FC = () => {
  return (
    <div className="home-page">
      <Sidebar />
      <h1 className="title">Panel Profesoral</h1>
      <h2 className="titleTable">Horario</h2>
      <div className="Mensaje">
        <Mnsj />
      </div>
      <div className="Table">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-medium">Seccion</TableHead>
              <TableHead>Asignatura</TableHead>
              <TableHead>Departamento</TableHead>
              <TableHead>Horario</TableHead>
              <TableHead>No. Estudiantes</TableHead>
              <TableHead className="text-right">Curso</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map(
              (
                item,
                index // declaramos el data.map para que funncione el json.
              ) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.seccion}</TableCell>
                  <TableCell>{item.asignatura}</TableCell>
                  <TableCell>{item.Departamento}</TableCell>
                  <TableCell>{item.horario}</TableCell>
                  <TableCell>{item.Estudiantes}</TableCell>
                  <TableCell className="text-right">{item.curso}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default HomePageProfe;
