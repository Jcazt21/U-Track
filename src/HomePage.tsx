import React from "react";
import Sidebar from "./components/Sidebar";
import ProfileSidebar from "./components/ProfileSidebar";
import Mnsj from "./components/Mnsj";
import "./HomePage.css";
import estudiantes from "./components/estudiantes.json"; // Importa el archivo JSON de estudiantes
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const HomePage: React.FC = () => {
  // Asumiendo que quieres acceder al primer estudiante en el array
  const estudiante = estudiantes.estudiantes[0];
  const { nombre, indice, materias } = estudiante;

  return (
    <div className="home-page">
      <Sidebar />
      <ProfileSidebar />
      <h1 className="title">Panel Estudiantil</h1>{" "}
      <div className="Mensaje">
        <Mnsj />
      </div>
      <h2 className="titleTable">Horario</h2>
      <div className="Table">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-medium">Sección</TableHead>
              <TableHead>Asignatura</TableHead>
              <TableHead>Horario</TableHead>
              <TableHead className="text-right">Curso</TableHead>
              <TableHead>Docente</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {materias.map((materia, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{materia.seccion}</TableCell>
                <TableCell>{materia.asignatura}</TableCell>
                <TableCell>{materia.horario}</TableCell>
                <TableCell className="text-right">{materia.curso}</TableCell>
                <TableCell>{materia.docente}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default HomePage;
