import { LocationCity } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import './index.css';

const Temp = () =>{
    const[data,setData]= useState("");
    const [search,setSearch]= useState("Mumbai");
    

useEffect(()=>{
        const fetchApi = async()=>{
            const url= `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b14425a6554d189a2d7dc18a8e7d7263`;
            const response = await fetch(url);
            const resjsn = await response.json();
            setData(resjsn);
           // console.log(resjsn);
        };
        fetchApi();
    },[search])



    return(
        <>
            <div className="box" >
                
                
                <div className="input">
                    <input type ="search" className= "inputFeild"  onChange= {(event)=>{setSearch(event.target.value) }}/>
                </div>
                
            {!data ? (
                <p> No data found</p>) : (
                    <div>
                    <div className="info">
                    <h2 className="location">
                    <i class="fas fa-street-view">{search}</i></h2>
                    <h1 className="temp">
                        {data.main.temp}
                    </h1>
                    <h3 className="tempmin-max"> Min: Max:</h3>
                </div>
            
            
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
            </div>
            )}    
                
            
            
            </div>
           
            
        </>
    )
}
export default Temp ;