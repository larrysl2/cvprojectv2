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
                {/* pass in id into edit submissions then set the id state in edit submissions then use that to be updated.  */}
                <button onClick={()=>(Deleteitem(x.id))}>Delete</button>
                </div>;
        
      })}</div>
      
    </div>
  )
}

const EXPPE = (props)=>{
  const{companylist}=props;
  return(

    <div className="eeinfodiv">
      <div className="schooname">{companylist.map((x) => {
        return <div key={x.id}>
          <div className="companenamebox">
            <h1>Practical Experience</h1>
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
export {Overview, EE,PE,EXPPE};