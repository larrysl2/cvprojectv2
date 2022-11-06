import React, { Component } from 'react';
import uniqid from "uniqid";
import {EE} from "./Overview";

export class schoolparts{
    constructor(schoolname,titleofstudy,dateofstudy,id){
        this.schoolname=schoolname;
        this.titleofstudy=titleofstudy;
        this.dateofstudy=dateofstudy;
        this.id=id;
    }
}
class Educationalexperience extends Component {
  constructor(){
    super();
    this.state={
        id:"",
        schoolname:"",
        titleofstudy:"",
        dateofstudy:"",
        // id: uniqid(),
        listofschools:[],
        isVisible: false,
        editstate:false
      }
  }

  schoolnameinput=(e)=>{
    this.setState({
        id:e.target.value,
        schoolname : e.target.value
    });
  };
 titleofstudyinput=(e)=>{
    this.setState({
        titleofstudy : e.target.value
    });
  };
  dateofstudyinput=(e)=>{
    this.setState({
        dateofstudy : e.target.value
    });
  };
  Submiteducationalform=(e)=>{
    e.preventDefault();
    if (this.state.schoolname==""||this.state.titleofstudy==""||this.state.dateofstudy==""){
        alert("Please complete form fully or enter NA");
        return;
    }
    else{
        var schoolinfo = new schoolparts(this.state.schoolname,this.state.titleofstudy,this.state.dateofstudy,this.state.id);
    this.setState({
        listofschools: this.state.listofschools.concat(schoolinfo),
        isVisible:false,
        schoolname:"",
        titleofstudy:"",
        dateofstudy:"",
        editstate:false,
        id:""
    });
    }
  };
  Editsubmissions=()=>{
    this.setState({
        schoolname:this.state.schoolname,
        titleofstudy:this.state.titleofstudy,
        dateofstudy:this.state.dateofstudy,
        editstate:true
        
    });
  }
  Submitedit=()=>{
    //somehow take the edited version and replace in the array at the point where the button was clicked. So some kind of swap
  }
  //takes the current values and sets the state to them which then can be used to update the input fields?
  Displayform=(e)=>{
    this.setState({
        isVisible:true,
        editstate:false
    });
  }
  
  Deleteitem=(id)=>{
    this.setState((prevState)=>({
        listofschools:prevState.listofschools.filter((education) => education.id!=id),
    }))
  };
  onChange=(e)=>{
    this.setState(
        {[e.target.name]:e.target.value}
    );
  }
  render(){
    const{schoolname,titleofstudy,dateofstudy,listofschools}=this.state;
    return(
      <div>
        Educational Experience
        <div>
            <button onClick={this.Displayform}>Add Educational Experience</button>
            <form onSubmit={this.Submiteducationalform}>
            { this.state.isVisible && <input onChange={this.schoolnameinput} value ={schoolname} type="text" placeholder='School' id='schoolname' />}
            { this.state.isVisible && <input onChange={this.titleofstudyinput} value ={titleofstudy} type="text" placeholder='Title of Study' id='major' />}
            { this.state.isVisible &&<input onChange={this.dateofstudyinput} value ={dateofstudy} type="text" placeholder='Start date' id='dateofstudy' />}
            { this.state.isVisible && <button>Submit Educational Experience </button>}
            </form>
            <form onSubmit={this.Editsubmissions}>
            { this.state.editstate && <input value={this.state.schoolname} onChange={(value) => this.onChange(value)} type="text" placeholder='School' id='schoolname' />}
            { this.state.editstate && <button>Submit Educational Experience Edit</button>}
            </form>
        </div>
        <EE listofschools={listofschools} Editsubmissions={this.Editsubmissions} Deleteitem={this.Deleteitem}/>
      </div>
    )
  }
}

export default Educationalexperience;