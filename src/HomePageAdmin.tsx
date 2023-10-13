import React from "react";
import Sidebar from "./components/SidebarAdmin";
import Mnsj from "./components/MnsjAdmin";
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
      <h1 className="title">Panel Principal</h1>
      <div className="Mensaje">
      <Mnsj/>
      </div>
        <Table>
        </Table>
      </div>
  );
};

export default HomePageAdmin;
