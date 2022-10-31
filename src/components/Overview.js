import React from "react";
import '../Styles/ovstyle.css'
const Overview = (props) => {
  const { listofinfo } = props;

  return (
   
    <div className="personalinfodiv">
      <div className="Name">{listofinfo[0]}</div>
      <div className="phoneemail">{listofinfo[1]} {listofinfo[2]}</div>
    </div>
    
  );
};
const EE = (props) =>{
  const {listofschools}=props;
  return(
    <div className="eeinfodiv">
      <div className="schooname">{listofschools.map((x) => {
        return <li>{x.titleofstudy}{x.schoolname}{x.dateofstudy}</li>;
      })}</div>
      
    </div>
    
  )
}
export {Overview, EE};