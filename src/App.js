import './Styles/ovstyle.css';
import React, { Component } from 'react';
import uniqid from "uniqid";
import {Overview} from "./components/Overview";
//setting the header states
class Generalinfo extends Component {
  constructor(){
    super();
    this.state = {
      name:"",
      phone:"",
      email:"",
      listofinfo : [],
      id: uniqid(),
      isVisible: true
    };
  }
  handleChangename = (e) => {
    this.setState({
        name: e.target.value,
        id: this.state.name.id
    });
  };
  handleChangephone= (e) => {
    this.setState({
       phone: e.target.value, 
    });
  };
  handleChangeemail= (e) => {
    this.setState({
       email: e.target.value,
    });
  };
  
  onSubmitTask = (e) => {
    e.preventDefault();
    if (this.state.email==""||this.state.name==""||this.state.phone==""){
      alert("Please complete form fully or enter NA.");
      return;
    }
    else {
    this.setState({
      listofinfo: this.state.listofinfo.concat(this.state.name,this.state.phone,this.state.email),
      isVisible:false
    });
    }
  };

  render() {
    const {name,phone,email,listofinfo} = this.state;
    return (
    <div>
       { this.state.isVisible &&<div className="personalinfo">
      Personal Info 
    </div>}
      <form onSubmit={this.onSubmitTask}>
      {this.state.isVisible &&
      <input
        onChange={this.handleChangename}
        value={name}
        type="text"
        id="nameInput"
        placeholder = "Name"
      />
      }
      {this.state.isVisible &&
      <input
        onChange={this.handleChangephone}
        value={phone}
        type="text"
        id="nameInput"
        placeholder = "Phone"
      />
      }
      {this.state.isVisible &&
      <input
        onChange={this.handleChangeemail}
        value={email}
        type="text"
        id="nameInput"
        placeholder = "Email"
      />
      }
     
      {this.state.isVisible &&
          <button type="submit">
            Submit Info
          </button>
      }
      </form>
      <Overview listofinfo={listofinfo} />
    </div>
    );
  }
}


export default Generalinfo;
