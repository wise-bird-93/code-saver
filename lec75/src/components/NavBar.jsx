import React from "react"
import { NavLink } from "react-router-dom"
import "./NavBar.css"

export default function NavBar() {
    return(
        <>
            <div className="NavContainer">
                <NavLink className={({isActive}) => 
                    isActive ? "activebuttons" : "navbuttons"} to={"/"}>
                    Home
                </NavLink>

                <NavLink className={({isActive}) => 
                    isActive ? "activebuttons" : "navbuttons"} to={"/pastes"}>
                    Pastes
                </NavLink>
            </div>
            
        </>
    )
}