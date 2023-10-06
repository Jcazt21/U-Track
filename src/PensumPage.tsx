import React, { useState } from "react";
import Sidebar from "./components/Sidebar"; // Asegúrate de importar el componente Sidebar correctamente
import ProfileSidebar from "./components/ProfileSidebar";
import "./PensumPage.css"; // Puedes crear un archivo CSS específico para esta página si es necesario
import 'bootstrap/dist/css/bootstrap-grid.min.css'

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import '@react-pdf-viewer/core/lib/styles/index.css'


const PensumPage: React.FC = () => {

    const [pdfFile, setPDFFile] = useState(null)
    const [viewPdf, setViewPdf] = useState(null)

    const fileType = ['application/pdf']
    const handleChange = (e) => {
      let selectedFile = e.target.files[0]
      if(selectedFile) {
        if(selectedFile && fileType.includes(selectedFile.type)) {
          
          let reader = new FileReader()
          reader.readAsDataURL(selectedFile)
          reader.onload = (e) => {
          setPDFFile(e.target.result)
          }
        }
        else {
          setPDFFile(null)
        }
        
      }
      else {
        console.log("porfavor seleccionar")
      }
      
    }
    
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(pdfFile !== null){
      setViewPdf(pdfFile)
    }
    else{
      setViewPdf(null)
    }

  }
  const newplugin = defaultLayoutPlugin()

    return (
      <div className="Pensum-page">
        <Sidebar />
        <ProfileSidebar />
        <div className="content">
        <h2>Visualizar Pensum</h2>
        <h2></h2>
        <h2></h2>
        <h2></h2>
          <form onSubmit={handleSubmit}>
            <input type="file" className="form-control" onChange={handleChange}/>
            <h2></h2>
            <button type="submit" className="btn btn-success" >Ver Pensum</button>
          </form>

          <h2></h2>
          <h2></h2>
          <h2></h2>
          <h2></h2>

          <div className="pdf-container">
          
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              {viewPdf && <>
                      <Viewer fileUrl={viewPdf} plugins={[newplugin]}/>
              </>}
              {!viewPdf && <>Visualiza tu Pensum</>}

            </Worker>

          </div>

        </div>
      </div>
    );

  

};
export default PensumPage;
