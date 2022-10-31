import React, { Component } from 'react';
import uniqid from "uniqid";
import {EE} from "./Overview";

export class schoolparts{
    constructor(schoolname,titleofstudy,dateofstudy){
        this.schoolname=schoolname;
        this.titleofstudy=titleofstudy;
        this.dateofstudy=dateofstudy;
    }
}
class Educationalexperience extends Component {
  constructor(){
    super();
    this.state={
        schoolname:"",
        titleofstudy:"",
        dateofstudy:"",
        listofschools:[]
      }
  }

  schoolnameinput=(e)=>{
    this.setState({
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
        var schoolinfo = new schoolparts(this.state.schoolname,this.state.titleofstudy,this.state.dateofstudy);
    this.setState({
        listofschools: this.state.listofschools.push(schoolinfo)
    });
    }
  };
  render(){
    const{schoolname,titleofstudy,dateofstudy,listofschools}=this.state;
    return(
      <div>
        Educational Experience
        <div>
            <form onSubmit={this.Submiteducationalform}>
                <input onChange={this.schoolnameinput} value ={schoolname} type="text" placeholder='School' id='schoolname' />
                <input onChange={this.titleofstudyinput} value ={titleofstudy} type="text" placeholder='Title of Study' id='major' />
                <input onChange={this.dateofstudyinput} value ={dateofstudy} type="text" placeholder='Start date' id='dateofstudy' />
                <button>Submit Educational Experience </button>
            </form>
        </div>
        <EE listofschools={listofschools} />
      </div>
    )
  }
}

export default Educationalexperience;