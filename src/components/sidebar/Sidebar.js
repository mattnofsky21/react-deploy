import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';

class Sidebar extends Component {
    render() {
       
        return (
            <div className="sidebar">
                <img className="sidebar-logo" />
                <h1><Link smooth to="/#start" className="h1_links">SL Hitoyoshi</Link></h1>
                <p style={{color:'black',fontWeight:'bold'}} className="gmail">nostalgic steam locomotive</p>
                <ul className="sidebar-nav">
                <button><li className="sidebar-nav-items"><Link smooth to="/#about" className="links">Story</Link></li></button>
                    <br/>
                    <button><li className="sidebar-nav-items"><Link smooth to="/#history" className="links" >History</Link></li></button>
                    <br/>
                    <button><li className="sidebar-nav-items"><Link smooth to="/#interest" className="links">Detail</Link></li></button>
                    {/* <li className="sidebar-nav-items"><a href="http://www.bloggingpeek.com" target="_blank" rel="opener noreferrer" className="links"> Blog<FiExternalLink/></a></li> */}
                </ul>         
            </div>
        )
    }
}

export default Sidebar