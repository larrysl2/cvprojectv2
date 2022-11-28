import React, { Component } from 'react';
import '../Styles/ovstyle.css'
import {PE} from "./Overview";
import {EXPPE} from "./Overview";
import { listofschools } from './educationalexperience';
//setting the experience
export class practicalparts{
    constructor(companyname,positiontitle,maintasks,startdate,enddate){
        this.companyname=companyname;
        this.positiontitle=positiontitle;
        this.maintasks=maintasks;
        this.startdate=startdate;
        this.enddate=enddate;
    }
}

class Practicalexperience extends Component {
  constructor(){
    super();
    this.state={
        id:0,
        companyname:"",
        positiontitle:"",
        maintasks:"",
        startdate:"",
        enddate:"",
        companylist:[],
        isVisible: false,
        editstate:false
      }
  }

  companynameinput=(e)=>{
    this.setState({
        companyname : e.target.value
    });
  };
 positiontitleinput=(e)=>{
    this.setState({
        positiontitle : e.target.value
    });
  };
  maintasksinput=(e)=>{
    this.setState({
        maintasks : e.target.value
    });
  };
  startdateinput=(e)=>{
    this.setState({
        startdate : e.target.value
    });
  };
  enddateinput=(e)=>{
    this.setState({
        enddate : e.target.value
    });
  };
  Submitcompanyform=(e)=>{
    e.preventDefault();
    if (this.state.companyname==""||this.state.positiontitle==""||this.state.maintasks==""||this.state.startdate==""){
        alert("Please complete form fully");
        return;
    }
    else{
        let companyinfo = new practicalparts(this.state.companyname,this.state.positiontitle,this.state.maintasks,this.state.startdate,this.state.enddate);
    this.setState({
        companylist: this.state.companylist.concat(companyinfo),
        isVisible:false,
        id:this.state.id+1
    })
    }
  };

  Editsubmission=(x)=>{
    this.setState({
        editstate:true,
        id:x.id,
        companyname:x.companyname,
        positiontitle:x.positiontitle,
        maintasks:x.maintasks,
        startdate:x.startdate,
        enddate:x.enddate
    })
  
  };

  Submitedit=(e)=>{
    e.preventDefault();
    var companyinfo = new practicalparts(this.state.companyname,this.state.positiontitle,this.state.maintasks,this.state.startdate,this.state.enddate);
    const newlistofcompanies = this.state.companylist.slice();
    newlistofcompanies.splice(this.state.id,1,companyinfo);
    console.log(e)
    this.setState({
        companylist:newlistofcompanies,
        editstate:false,
    });
  }

  Displayform=()=>{
    this.setState({
        isVisible:true,
        editstate:false,
        companyname:"",
        positiontitle:"",
        maintasks:"",
        startdate:"",
        enddate:""
    });
  }

  editcompanyname(value){
    this.setState({
         companyname: value
    });
    }

editpositiontitle(value){
    this.setState({
        positiontitle: value
    });
}

editmaintasks(value){
    this.setState({
         maintasks: value,
    });
}
editstartdate(value){
    this.setState({
         startdate: value,
    });
}
editenddate(value){
    this.setState({
         enddate: value,
    });
}

  Deleteitem=(id)=>{
    this.setState((prevState)=>({
        companylist:prevState.companylist.filter((education) => education.id!=id),
    }))
  };

  render(){
    const{companyname,positiontitle,maintasks,startdate,enddate,companylist,listofschools}=this.state;
    return(
      <div >
        <div className="PE">Practical Experience</div>
        <div>
            <button onClick={this.Displayform}>Add Educational Experience</button>
            <form onSubmit={this.Submitcompanyform}>
            { this.state.isVisible && <input onChange={this.companynameinput} value ={companyname} type="text" placeholder='Company Name' id='companyname' />}
            { this.state.isVisible && <input onChange={this.positiontitleinput} value ={positiontitle} type="text" placeholder='Position Title' id='Position Title' />}
            { this.state.isVisible &&<input onChange={this.maintasksinput} value ={maintasks} type="text" placeholder='Main Tasks' id='maintasks' />}
            { this.state.isVisible &&<input onChange={this.startdateinput} value ={startdate} type="month" placeholder='Start date' id='startdate' />}
            { this.state.isVisible &&<input onChange={this.enddateinput} value ={enddate} type="month" placeholder='End date' id='enddate' />}
            { this.state.isVisible && <button>Submit Educational Experience </button>}
            </form>
            <form onSubmit={this.Submitedit}>
            { this.state.editstate && <input value={this.state.companyname} onChange={e => this.editcompanyname(e.target.value)} type="text" placeholder='Company Name' id='companyname' />}
            { this.state.editstate && <input value={this.state.positiontitle} onChange={e => this.editpositiontitle(e.target.value)} type="text" placeholder='Position Title' id='Position Title' />}
            { this.state.editstate && <input value={this.state.maintasks} onChange={e => this.editmaintasks(e.target.value)} type ="text" placeholder='Main Tasks' id='maintasks' />}
            { this.state.editstate && <input value={this.state.startdate} onChange={e => this.editstartdate(e.target.value)} type="month" placeholder='Date of Study' id='editdate' />}
            { this.state.editstate && <input value={this.state.enddate} onChange={e => this.editenddate(e.target.value)} type="month" placeholder='Date of Study' id='editdate' />}
            { this.state.editstate && <button>Submit Practical Experience Edit</button>}
            </form>
        </div>
        <PE companylist={companylist} Editsubmission={this.Editsubmission} Deleteitem={this.Deleteitem}/>
        <div className="exportpage">
        <EXPPE companylist={companylist} listofschools={listofschools}/>
        </div>
      </div>
    )
  }
}

export default Practicalexperience;