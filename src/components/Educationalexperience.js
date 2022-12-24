import React, { Component } from 'react';
import '../Styles/ovstyle.css'
import {EE} from "./Overview";


//setting the educational experience
export class schoolparts{
    constructor(schoolname,titleofstudy,dateofstudy,enddateofstudy,id){
        this.schoolname=schoolname;
        this.titleofstudy=titleofstudy;
        this.dateofstudy=dateofstudy;
        this.enddateofstudy=enddateofstudy;
        this.id=id;
    }
}
//on delete maybe use splice and add in an empty object so its not losing its positions
//on edit use the stateid to find location but keep edit location. 
class Educationalexperience extends Component {
  constructor(){
    super();
    this.state={
        id:0,
        editID:0,
        schoolname:"",
        titleofstudy:"",
        dateofstudy:"",
        enddateofstudy:"",
        listofschools:[],
        isVisible: false,
        editstate:false
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
  enddateofstudyinput=(e)=>{
    this.setState({
        enddateofstudy : e.target.value
    });
  };
  Submiteducationalform=(e)=>{
    e.preventDefault();
    if (this.state.schoolname==""||this.state.titleofstudy==""||this.state.dateofstudy==""||this.state.enddateofstudy==""){
        alert("Please complete form fully or enter NA");
        return;
    }
    else{
        let schoolinfo = new schoolparts(this.state.schoolname,this.state.titleofstudy,this.state.dateofstudy,this.state.enddateofstudy,this.state.id);
    this.setState({
        listofschools: this.state.listofschools.concat(schoolinfo),
        isVisible:false,
        id:this.state.id+1,
        // editID:this.state.editID+1
        
    })
    console.log(this.state.id);
    }
  };

  Editsubmissions=(x)=>{
    this.setState({
        editstate:true,
        // id:x.id,
        editID:x.id,
        schoolname:x.schoolname,
        titleofstudy:x.titleofstudy,
        dateofstudy:x.dateofstudy,
        enddateofstudy:x.enddateofstudy
    })
  
  };

  Submitedit=(e)=>{
    e.preventDefault();
    var schoolinfo = new schoolparts(this.state.schoolname,this.state.titleofstudy,this.state.dateofstudy,this.state.enddateofstudy,this.state.editID);
    const newlistofschools = this.state.listofschools.slice();
    newlistofschools.splice(this.state.editID,1,schoolinfo);
    // console.log(this.state.id)
    this.setState({
        listofschools:newlistofschools,
        editstate:false,
    });
  }

  Displayform=()=>{
    this.setState({
        isVisible:true,
        editstate:false,
        schoolname:"",
        titleofstudy:"",
        dateofstudy:"",
        enddateofstudy:""
    });
  }

  editschoolname(value){
    this.setState({
         schoolname: value
    });
    }

edittitle(value){
    this.setState({
         titleofstudy: value
    });
}

editdate(value){
    this.setState({
         dateofstudy: value,
    });
}
endeditdate(value){
  this.setState({
       enddateofstudy: value,
  });
}

  Deleteitem=(id)=>{
    this.setState((prevState)=>({
        listofschools:prevState.listofschools.filter((education) => education.id!=id),
    }))
  };

  render(){
    const{titleofstudy,dateofstudy,enddateofstudy}=this.state;
    const schoolname = this.state.schoolname;
    const listofschools = this.state.listofschools;
    return(
      <div >
        <div className="EE">Educational Experience</div>
        <div>
            <button onClick={this.Displayform}>Add Educational Experience</button>
            <form onSubmit={this.Submiteducationalform}>
            { this.state.isVisible && <input onChange={this.schoolnameinput} value ={schoolname} type="text" placeholder='School' id='schoolname' />}
            { this.state.isVisible && <input onChange={this.titleofstudyinput} value ={titleofstudy} type="text" placeholder='Title of Study' id='major' />}
            { this.state.isVisible &&<input onChange={this.dateofstudyinput} value ={dateofstudy} type="month"  placeholder='Start date' id='dateofstudy' />}
            { this.state.isVisible &&<input onChange={this.enddateofstudyinput} value ={enddateofstudy} type="month"  placeholder='end date' id='enddateofstudy' />}
            { this.state.isVisible && <button>Submit Educational Experience </button>}
            </form>
            <form onSubmit={this.Submitedit}>
            { this.state.editstate && <input value={this.state.schoolname} onChange={e => this.editschoolname(e.target.value)} type="text" placeholder='School' id='editschoolname' />}
            { this.state.editstate && <input value={this.state.titleofstudy} onChange={e => this.edittitle(e.target.value)} type="text" placeholder='Title of Study' id='edittitle' />}
            { this.state.editstate && <input value={this.state.dateofstudy} onChange={e => this.editdate(e.target.value)} type="month"  placeholder='Date of Study' id='editdate' />}
            { this.state.editstate && <input value={this.state.enddateofstudy} onChange={e => this.endeditdate(e.target.value)} type="month"  placeholder='endDate of Study' id='endeditdate' />}
            { this.state.editstate && <button>Submit Educational Experience Edit</button>}
            </form>
        </div>
        <div id='ee'>
        <EE listofschools={listofschools} Editsubmissions={this.Editsubmissions} Deleteitem={this.Deleteitem}/>
        </div>
      </div>
    )
  }
}

export default Educationalexperience;