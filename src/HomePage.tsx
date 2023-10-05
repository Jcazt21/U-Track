import React from "react";
import Sidebar from "./components/Sidebar";
import Mnsj from "./components/Mnsj";
import "./HomePage.css";
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
      <div className="Mensaje">
        <Mnsj />
      </div>
      <div className="Table">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/4">Seccion</TableHead>
              <TableHead>Asignatura</TableHead>
              <TableHead>Horario</TableHead>
              <TableHead className="text-right">Curso</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">IDS-302</TableCell>
              <TableCell>Diseño de Software</TableCell>
              <TableCell>Lu 8-10, Mi 8-10</TableCell>
              <TableCell className="text-right">GC302</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">IDS-302</TableCell>
              <TableCell>Diseño de Software</TableCell>
              <TableCell>Lu 8-10, Mi 8-10</TableCell>
              <TableCell className="text-right">GC302</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">IDS-302</TableCell>
              <TableCell>Diseño de Software</TableCell>
              <TableCell>Lu 8-10, Mi 8-10</TableCell>
              <TableCell className="text-right">GC302</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">IDS-302</TableCell>
              <TableCell>Aseguramiento de la Calidad de Software</TableCell>
              <TableCell>Lu 8-10, Mi 8-10</TableCell>
              <TableCell className="text-right">GC302, GC212</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">IDS-302</TableCell>
              <TableCell>Diseño de Software</TableCell>
              <TableCell>Lu 8-10, Mi 8-10</TableCell>
              <TableCell className="text-right">GC302</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">IDS-302</TableCell>
              <TableCell>Diseño de Software</TableCell>
              <TableCell>Lu 8-10, Mi 8-10</TableCell>
              <TableCell className="text-right">GC302</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">IDS-302</TableCell>
              <TableCell>Diseño de Software</TableCell>
              <TableCell>Lu 8-10, Mi 8-10</TableCell>
              <TableCell className="text-right">GC302</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default HomePage;
