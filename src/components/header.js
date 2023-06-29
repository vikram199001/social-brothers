import React from "react";
import { Image } from "react-bootstrap";
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {

    const history = useNavigate();
    const location = useLocation();
    
    const path = location.pathname;
  
    return  <div className="topnav">
              <div className="d-flex">
                <div className="w-50 d-flex justify-content-start">
                  <span className="logo-item"><Image src={require("../assets/logo.png")}/></span>
                </div>
                <div className="w-50 d-flex justify-content-end pt-4 nav-items">
                  <span className="p-4" style={{cursor: 'pointer'}} onClick={() => history('/')}>
                    Home
                    {path === '/' ? <p className="active-link mt-2"></p>: ''}
                  </span>
                  <span className="p-4" style={{cursor: 'pointer'}} onClick={() => history('/blog-list')}>
                    Blog
                    {path === '/blog-list' ? <p className="active-link mt-2"></p>: ''}
                  </span>
                </div>
              </div>
              {path === '/blog-list' ? <div className="d-md-flex justify-content-center blog-heading d-none "><span>Blog</span></div> : ""}
            </div>
}


export default Header;