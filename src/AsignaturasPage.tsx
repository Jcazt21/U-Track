import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./AsignaturasPage.css";
import ProfileSidebar from "./components/ProfileSidebar";
import data from "./assets/data.json";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AsignaturasPage: React.FC = () => {
  return (
    <div className="Asignaturas">
      <h1>Asignaturas</h1>
      <Sidebar />
      <ProfileSidebar />
      <div className="TableAsignaturas">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-medium">Seccion</TableHead>
              <TableHead>Asignatura</TableHead>
              <TableHead>Horario</TableHead>
              <TableHead className="text-right">Curso</TableHead>
              <TableHead>Docente</TableHead>
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
                  <TableCell>{item.horario}</TableCell>
                  <TableCell className="text-right">{item.curso}</TableCell>
                  <TableCell>{item.docente}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AsignaturasPage;
