/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { ExternalLink } from 'react-external-link';


const Contactanos=()=>{
return(
  <>
    <h2 className="text-coinsa mt-5">Contáctame</h2>
    <div className="row mb-5">
      <div className="col-md-4">
        <div className="card" >
        <ExternalLink className="anchor" href="tel:+50433802586">
        <div className="card-body text-center">
        <i class="fas fa-phone-alt fa-7x"></i>            
          </div>
          <div className="card-footer text-center">
            LLamadas y mensajes de whatsapp al <br />
            +504 3380-2586</div>
        </ExternalLink>

        </div>
      </div>
      <div className="col-md-4">
        <div className="card" >
        <ExternalLink className="anchor" href="mailto:info@gmail.hn">
        <div className="card-body text-center">
        <i class="fas fa-envelope fa-7x"></i>
           </div>
           <div className="card-footer text-center">
             Envíame un correo a:<br />
             info@gmail.hn
             </div>
          
          </ExternalLink>

        </div>
      </div>
      <div className="col-md-4">
        <div className="card" >
        <ExternalLink className="anchor" href="https://linkedin.com">
        <div className="card-body text-center">
        <i class="fab fa-linkedin fa-7x"></i>
            </div>
            <div className="card-footer text-center">Encuentrame en LinkedIn: <br />
            https://linkedin.com
            </div> 
  
          </ExternalLink>
        </div>
      </div>
    </div>
  </>
)
}
export default Contactanos