/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Logo from '../Img/portfolio.png';
import certificados from '../Img/LOGOS ISO.png';
import {Link} from 'react-router-dom';

const Header = () =>{
  return (
    <header className="container pt-4 pb-3">
    <div className="row no-gutters">
        <div className="col-12 col-md-10">
            <Link to="/">
                <img src={Logo} alt="logo-farmex" className="w-25 mr-2 " />
            </Link>
        </div>
        <div className="col-12 col-md-2">
            <div className="ml-3 mt-2" style={{ display: 'flex',flexDirection: 'row'}}>
                
            </div>
        </div>
    </div>
</header>

  )
}
export default Header