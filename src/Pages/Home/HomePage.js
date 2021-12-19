import React from 'react';
import Catalogo from './Catalogo';
import Contactanos from './Contactanos';
import Ofertas from './Ofertas';


const HomePage=()=>{
return(
  <>
    <div className="container">
      <Catalogo />
      <Ofertas /> 
      <Contactanos />
    </div>
  </>
)
}
export default HomePage