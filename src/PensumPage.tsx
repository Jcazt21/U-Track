import React from "react";
import "./PensumPage.css";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import Sidebar from "./components/Sidebar";
import ProfileSidebar from "./components/ProfileSidebar";
import "@react-pdf-viewer/core/lib/styles/index.css";

const PensumPage: React.FC = () => {
  return (
    <div className="Pensum-page">
      <Sidebar />
      <ProfileSidebar />
      <div className="content">
        <h2 className="VPensum">Visualizar Pensum</h2>
        <div className="pdf-container">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <Viewer fileUrl="src/Docs/Pensum.pdf" />
          </Worker>
        </div>
      </div>
    </div>
  );
};

export default PensumPage;
