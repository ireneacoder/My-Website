import React from 'react'
import './PopupDialog.css'
import { FiX } from "react-icons/fi";


const PopupDialog = (props) => {


    return (
        <div className='container'>

            <div className="dialog-wrapper" onClick={props.closeDialog}></div>
            <div className="dialog-container">
                <div className="inner-container">
                    <img className='dialog-image' src={props.imgurl} />

                    <div className="icon-container" onClick={props.closeDialog}>

                        <FiX className='closeBtn' />
                    </div>

                   
                </div>


            </div>





        </div>
    )
}

export default PopupDialog