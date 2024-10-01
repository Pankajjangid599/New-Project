import { Children } from "react";
import { NavLink } from "react-router-dom";
import React from "react";
const Button=({children , btnClass,width,color,height,border})=>{
    

 
    return(
        <>
       
           <button className={btnClass} style={{width:width,height:height,border:border,backgroundColor:color}}>{children}</button>
        </>
    )
}
export default Button