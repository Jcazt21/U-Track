import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./AsignaturasPage.css";
import ProfileSidebar from "./components/ProfileSidebar";
import estudiantes from "./components/estudiantes.json"; // Asegúrate de que la ruta al archivo JSON es correcta
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Materia {
  seccion: string;
  asignatura: string;
  horario: string;
  curso: string;
  docente: string;
}

const AsignaturasPage: React.FC = () => {
  const [materias, setMaterias] = useState<Materia[]>([]);

  useEffect(() => {
    const usuarioId = localStorage.getItem("usuarioId"); // Asumiendo que almacenaste el usuarioId en localStorage durante el inicio de sesión

    if (usuarioId) {
      const estudiante = estudiantes.estudiantes.find(
        (est) => est.usuarioId.toString() === usuarioId
      );

      if (estudiante) {
        setMaterias(estudiante.materias);
      }
    }
  }, []);

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
            {materias.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.seccion}</TableCell>
                <TableCell>{item.asignatura}</TableCell>
                <TableCell>{item.horario}</TableCell>
                <TableCell className="text-right">{item.curso}</TableCell>
                <TableCell>{item.docente}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AsignaturasPage;
