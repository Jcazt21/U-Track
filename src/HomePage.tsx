import React from "react";
import Sidebar from "./components/Sidebar";
import ProfileSidebar from "./components/ProfileSidebar";
import Mnsj from "./components/Mnsj";
import "./HomePage.css";
import data from "./assets/data.json"; // Asegúrate de que la ruta sea correcta
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
  return (
    <div className="home-page">
      <Sidebar />
      <ProfileSidebar />
      <h1 className="title">Panel Estundiantil</h1>
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
              <TableHead>Horario</TableHead>
              <TableHead className="text-right">Curso</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.seccion}</TableCell>
                <TableCell>{item.asignatura}</TableCell>
                <TableCell>{item.horario}</TableCell>
                <TableCell className="text-right">{item.curso}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default HomePage;
