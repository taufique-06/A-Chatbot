import React from "react";

const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="appTitle">Taufique's Chat</div>
            <div className="user">
                <img src="" alt="" />
                <span>Taufique</span>
                <button>logout</button>
            </div>
        </div>
    )
}

export default Navbar;