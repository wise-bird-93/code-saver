import React from "react"
import { NavLink } from "react-router-dom"
import "./NavBar.css"
import logo from "./CodeVault logo1.png"

export default function NavBar() {
    return(
        <>
            <div className="NavContainer">
                <div className="Navlogo">
                    <img src={logo} alt="" />
                    CodeVault
                </div>
                
                <NavLink className={({isActive}) => 
                    isActive ? "activebuttons" : "navbuttons"} to={"/"}>
                    Home
                </NavLink>

                <NavLink className={({isActive}) => 
                    isActive ? "activebuttons" : "navbuttons"} to={"/pastes"}>
                    Codes
                </NavLink>
            </div>
            
        </>
    )
}