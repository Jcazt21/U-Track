import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./components/SidebarProfesor";
import Selector from "./components/Selector";
import "./GestionAsignaturaPage.css";
import calificaciones from "./assets/calificaciones.json";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const GestionAsignaturaPage: React.FC = () => {
  return (
    <div className="Calificaciones">
      <h1>Registro Calificaciones</h1>
      <div className="selector-container"><Selector /></div>
      <Sidebar />
      <div className="TableCalificaciones">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-medium">ID</TableHead>
              <TableHead>Estudiante</TableHead>
              <TableHead>Calificacion</TableHead>
              <TableHead className="text-right">Alpha</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {calificaciones.map(
              (
                item,
                index // declaramos el data.map para que funncione el json.
              ) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    {item.asignatura}
                  </TableCell>
                  <TableCell>{item.trimestre}</TableCell>
                  <TableCell>{item.calificacion}</TableCell>
                  <TableCell className="text-right">{item.alpha}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default GestionAsignaturaPage;
