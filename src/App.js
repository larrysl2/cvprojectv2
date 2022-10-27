import { isVisible } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react';
import uniqid from "uniqid";
import Overview from "./components/Overview";

class Generalinfo extends Component {
  constructor(){
    super();
    this.state = {
      name:"",
      email:"",
      phone:"",
      listofinfo : [],
      id: uniqid(),
      isVisible: true
    };
  }
  handleChangename = (e) => {
    this.setState({
        name: e.target.value,

    });
  };
  handleChangeemail= (e) => {
    this.setState({
        
        email: e.target.value
    });
  };
  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      listofinfo: this.state.listofinfo.concat(this.state.name,this.state.email),
      isVisible:false
      
    });
    //on click set state to seen. then in html. if seen set styledisply to none instead of block
  };

  render() {
    const {name,email,listofinfo} = this.state;
    return (
    <div>
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
        onChange={this.handleChangeemail}
        value={email}
        type="text"
        id="nameInput"
        placeholder = "Email"
      />
      }
      {this.state.isVisible &&
          <button type="submit">
            Add Name
          </button>
  }
      </form>
      <Overview listofinfo={listofinfo} />
    </div>
    );
  }
}
export default Generalinfo;
