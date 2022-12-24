// import React from "react";
import React, { Component } from 'react';
import { useState } from 'react';
import '../Styles/ovstyle.css'
const Overview = (props) => {
  const { listofinfo }= props;
  return (
    <div className="personalinfodiv">
      <div className="Name">{listofinfo[0]}</div>
      <div className="phoneemail">{listofinfo[1]} {listofinfo[2]}</div>
    </div> 
  );
};
const EE = (props) =>{
  const {listofschools,Editsubmissions,Deleteitem}=props;
  return(
    <div className="eeinfodiv">
      <div className="schooname">{listofschools.map((x) => {
        return <div key={x.id}>
          <div className="schoolnamebox">
                <div className = "schoolname" key={x.schoolname}>{x.schoolname} </div>
                <div className = "date" key={x.dateofstudy}>{x.dateofstudy}-{x.enddateofstudy} </div>
                </div>
                <div className = "title" key={x.titleofstudy}>{x.titleofstudy} </div>
                <button onClick={()=>(Editsubmissions(x))}>Edit</button> 
                <button onClick={()=>(Deleteitem(x.id))}>Delete</button>
                </div>;
      })}</div> 
    </div>
  )
}
const PE = (props) =>{
  const {companylist,Editsubmission,Deleteitem}=props;
  return(
    <div className="eeinfodiv">
      <div className="schooname">{companylist.map((x) => {
        return <div key={x.id}>
          <div className="companenamebox">
                <div className = "companyname" key={x.companyname}>{x.companyname} </div>
                <div className = "positionbox">
                <div className = "positiontitle" key={x.positiontitle}>{x.positiontitle} </div>
                <div className = "Dates" key={x.startdate}>{x.startdate}-{x.enddate} </div>
                </div>
                <li className = "maintasks" key={x.maintasks}>{x.maintasks} </li>
                </div>
                <button onClick={()=>(Editsubmission(x))}>Edit</button> 
              
                <button onClick={()=>(Deleteitem(x.id))}>Delete</button>
                </div>;
      })}</div>
      
    </div>
  )
}
//want to create another component similar to EXPE that stores the educationl info and personal info in a div. and then export that div using the export function in practicalE
const ExperienceComponent = (props)=>{
  
  return(
    <div className="eeinfodiv">
      <h1>Practical Experience</h1>
      <div className="schooname">{props.companylist.map((x) => {
        return <div key={x.id}>
          <div className="companenamebox">
                <div className = "companyname" key={x.companyname}>{x.companyname} </div>
                <div className = "positionbox">
                <div className = "positiontitle" key={x.positiontitle}>{x.positiontitle} </div>
                <div className = "Dates" key={x.startdate}>{x.startdate}-{x.enddate} </div>
                </div>
                <li className = "maintasks" key={x.maintasks}>{x.maintasks} </li>
                </div>
                </div>;
      })}</div>
    </div>
  )
}

export {Overview, EE,PE,ExperienceComponent};
//draw out parent nodes. find where you insert a new parent node and lift that state up so others can access