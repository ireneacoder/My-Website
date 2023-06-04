import Button from "../button/button";
import './achievement.css'
import { useState } from "react";
import PopupDialog from "../PopupDialog/PopupDialog";

export default function Achievement(props) {

    const [showDialog, setShowDialog] = useState(false);

    const closeDialog = () => {
        setShowDialog(false);
    }

    return (
        <>

            {showDialog && <PopupDialog imgurl={props.imgurl} closeDialog={closeDialog} />}

            <div className="rect">
                <div className="postdata">
                    <div className='post' >{props.title}</div>
                    <div className='data'>{props.desc}</div>
                </div>

                <Button onClick={setShowDialog} text='Certificate'/>

            </div>

        </>


    )
}

