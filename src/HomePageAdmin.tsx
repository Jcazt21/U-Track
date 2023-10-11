import React from "react";
import Sidebar from "./components/SidebarAdmin";
import "./HomePageAdmin.css";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const HomePageAdmin: React.FC = () => {
  return (
    <div className="home-page">
      <Sidebar />
      <h1 className="title">Perfil</h1>
      <div className="Mensaje">
      </div>
        <Table>
        </Table>
      </div>
  );
};

export default HomePageAdmin;
