import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import { useRecoilState } from "recoil";
import React,{useState} from 'react'
import style from "./Navbar.module.css";

import {User} from './atom'



function Navbar() {
   
    const [user,setUser]=useRecoilState(User)


    return (
        <>
            <nav className={style.navBar}>
                <div className={style.left}>
                    <p >Home Task Management</p>
                    <p>Workspace Visible</p>
                    USER:<h1>{user} </h1> 

                    

                </div>

                <div className={style.right}>


                    <Avatar ></Avatar>



                </div>
            </nav>
        </>
    );
}

export default Navbar;