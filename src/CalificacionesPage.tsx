import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./CalificacionesPage.css";
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

interface Calificacion {
  asignatura: string;
  trimestre: string;
  calificacion: string;
  alpha: string;
}

const CalificacionesPage: React.FC = () => {
  const [calificaciones, setCalificaciones] = useState<Calificacion[]>([]);

  useEffect(() => {
    const usuarioId = localStorage.getItem("usuarioId"); // Asumiendo que almacenaste el usuarioId en localStorage durante el inicio de sesión

    if (usuarioId) {
      const estudiante = estudiantes.estudiantes.find(
        (est) => est.usuarioId.toString() === usuarioId
      );

      if (estudiante) {
        const califs = estudiante.materias.flatMap((materia) =>
          materia.calificaciones.map((calificacion) => ({
            asignatura: materia.asignatura,
            ...calificacion,
          }))
        );
        setCalificaciones(califs);
      }
    }
  }, []);

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
            {calificaciones.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.asignatura}</TableCell>
                <TableCell>{item.trimestre}</TableCell>
                <TableCell>{item.calificacion}</TableCell>
                <TableCell className="text-right">{item.alpha}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CalificacionesPage;
