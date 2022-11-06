import React from "react";
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
        return <div key={x.schoolname}><li key={x.titleofstudy}>{x.titleofstudy} </li>
                <li key={x.schoolname}>{x.schoolname} </li>
                <li key={x.dateofstudy}>{x.dateofstudy} </li>
                <button onClick={Editsubmissions}>Edit</button>
                <button onClick={()=>(Deleteitem(x.id))}>Delete</button>
                </div>;
        
      })}</div>
      
    </div>
  )
}
export {Overview, EE};