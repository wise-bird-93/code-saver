import React, { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import "./ViewPaste.css"
import {useDispatch, useSelector} from 'react-redux'
import { addToPastes, updateToPastes } from "../Redux/PasteSlice"
import toast from "react-hot-toast"

export default function ViewPaste() {
    
    const {id} = useParams();
    const allPastes = useSelector((state) => state.paste.pastes);
    const paste = allPastes.filter((p) => p._id === id)[0];

    return(
        <>
            <div className="ViewContainer">
                <div className="Viewtitle">
                <input id="titletext" type="text"
                placeholder="title"
                value={paste.title}
                disabled
                onChange={(e) => setTitle(e.target.value)} />

                
            </div>
            <div className="Viewtext">
                <textarea 
                 value={paste.content}
                 disabled
                 placeholder="Code here..."
                 onChange={(e) => setValue(e.target.value)}></textarea>
            </div>
            </div>
        </>
    )
}