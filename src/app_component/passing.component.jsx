import React from "react";
//import { useState } from "react";
//import { getWeather } from '../App'
import PageLoader from "./loading.component";

function UsePageLoader(props){
if(props.loading){
    return(
        <PageLoader/>
    )
 } 

else{
    return(  
      function error() {
        return(
          <div className="alert-danger" type="alert">
             Please type a city name
          </div>
      );
      }
    )
 }
}

export default UsePageLoader;