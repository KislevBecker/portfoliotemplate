import React from "react";
// import BotonCatalogo from '../../Components/BotonCatalogo';
import desarrollo from "../../Img/desarrollo.png";
import sql from "../../Img/sql.png";
import redes from "../../Img/redes.png";
import electricas from "../../Img/electricas.png";

const SeccionCatalogo = () => {
  return (
    <>
      <div className="row mt-5">
        <h2 className="text-coinsa">Servicios</h2>
      </div>
      <div className="row mb-5">
        <div className="col-md-3">
          <div
            className="card"
            style={{ height: "15rem", borderRadius: "14px" }}
          >
            <div className="card-body">
              <img src={desarrollo} className="w-100 center" />
            </div>
            <div className="card-footer text-center">
              Desarrollo y diseño web
            </div>
          </div>
        </div>
        <div className="col-md-3">
        <div
            className="card"
            style={{ height: "15rem", borderRadius: "14px" }}
          >
            <div className="card-body">
            <img src={sql} className="w-75 center" />
            </div>
            <div className="card-footer text-center">
            Manejo de base de datos sql server
            </div>
          </div>
          </div>
        <div className="col-md-3">
        <div
            className="card"
            style={{ height: "15rem", borderRadius: "14px" }}
          >
            <div className="card-body">
            <img src={redes} className="w-100 center" />
            </div>
            <div className="card-footer text-center">
            Diseño y gestión de redes
            </div>
          </div>
        </div>
        <div className="col-md-3">
        <div
            className="card"
            style={{ height: "15rem", borderRadius: "14px" }}
          >
            <div className="card-body">
            <img src={electricas} className="w-50 center" />
            </div>
            <div className="card-footer text-center">
            Instalaciones electricas
            </div>
          </div>
</div>
      </div>
    </>
  );
};
export default SeccionCatalogo;
