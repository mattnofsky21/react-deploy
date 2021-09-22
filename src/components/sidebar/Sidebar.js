import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import {  FiExternalLink } from 'react-icons/fi';

class Sidebar extends Component {
    render() {
       
        return (
            <div className="sidebar">
                <img className="sidebar-logo" src="../images/logo3.jpg"/>
                <h1><Link smooth to="/#start" className="h1_links">SL Hitoyoshi</Link></h1>
                <p style={{color:'black',fontWeight:'bold'}} className="gmail">nostalgic steam locomotive</p>
                <ul className="sidebar-nav">
                    <li className="sidebar-nav-items"><Link smooth to="/#about" className="links">Story</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#history" className="links" >History</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#interest" className="links">Detail</Link></li>
                    {/* <li className="sidebar-nav-items"><a href="http://www.bloggingpeek.com" target="_blank" rel="opener noreferrer" className="links"> Blog<FiExternalLink/></a></li> */}
                </ul>
    
                <div className="flip-card-back">
                    <ul className="sidebar-nav">
                        <li className="sidebar-nav-icons"><a href="https://www.linkedin.com/in/sachin-mittal-476174158?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BoRhF2EUsQJ%2BygJpLEZb%2FFA%3D%3D" rel="opener noreferrer" target="_blank" class="fa fas fa-linkedin fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://github.com/mittalsam98" rel="opener noreferrer" target="_blank" class="fa fas fa-github fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://twitter.com/Sachin_Mittal98" rel="opener noreferrer" target="_blank" className="fa fas fa-twitter fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://www.instagram.com/decent_sachin.mittal/" rel="opener noreferrer" target="_blank" class="fa fas fa-instagram fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="mailto:mittalsam98@gmail.com" rel="opener noreferrer" target="_blank" class="fa fas fa-envelope fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="https://www.facebook.com/profile.php?id=100011989067867" rel="opener noreferrer" target="_blank" class="fa fas fa-facebook fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="" rel="" target="" class=""></a></li>
                    </ul>
                </div>
              
            </div>
        )
    }
}

export default Sidebar