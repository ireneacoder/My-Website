
import { useState } from 'react';
import './nav.css'
import { FaHome } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaIdBadge } from "react-icons/fa";


export default function Nav() {



    return (
        <>
            <div className='vertical'>


                <a href='#' className='cutt ' >
                    <FaHome size={28} />
                    <div className='navbutton' >Home</div>
                </a>

                <a href='#bio' className='cutt '>
                    <FaCopy size={28} />
                    <div className='navbutton' >Bio</div>
                </a>

                <a href='#project' className='cutt '>
                    <FaProjectDiagram size={28} />
                    <div className='navbutton' >Projects</div>
                </a>

                <a href='#contact' className='cutt contact'>
                    <FaIdBadge size={28} />
                    <div className='navbutton' >Contact</div>
                </a>




            </div>
        </>
    )
}