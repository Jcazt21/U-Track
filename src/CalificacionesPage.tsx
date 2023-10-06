import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./CalificacionesPage.css";
import ProfileSidebar from "./components/ProfileSidebar";
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

const CalificacionesPage: React.FC = () => {
  return (
    <div className="Calificaciones">
      <h1>Calificaciones</h1>
      <Sidebar />
      <ProfileSidebar />
      <div className="TableCalificaciones">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-medium">Asignatura</TableHead>
              <TableHead>Trimestre</TableHead>
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

export default CalificacionesPage;
