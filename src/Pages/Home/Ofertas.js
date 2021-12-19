/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { ExternalLink } from 'react-external-link';
import jabon from '../../Img/p1.png';
import gel from '../../Img/p2.png';



const Ofertas=()=>{
return(
  <>
    <h2 className="text-coinsa mt-5">Portafolio</h2>
    <div className="row" style={{marginBottom: '150px'}}>
      <div className="col-md-6">
        <div className="card" style={{height: '20rem'}}>
          <div className="card-body">
            <img src={jabon} className="w-100 center" />
            
          </div>
          <div className="card-footer text-center bg-radial"><h5>Aplicación web para ingreso, edición, eliminación y listado de recordatorios
</h5>          <p>Desarrollado con vuejs, .Netcore y sql server<br/>
<ExternalLink className="text-white" href="https://notesremindertest.netlify.app/">Ver enlace <i class="fas fa-arrow-right text-white"></i></ExternalLink>
</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card" style={{height: '20rem'}}>
          <div className="card-body">
          <img src={gel} className="w-50 center" />
           </div>
           <div className="card-footer text-center bg-radial"><h5>Aplicación de escritorio para generación de reportes
</h5>          <p>Desarrollado con c#, imprime una factura simple en pdf</p>
          </div>

        </div>
      </div>
    </div>
  </>
)
}
export default Ofertas