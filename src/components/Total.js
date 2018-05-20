import React, { Component } from "react";
import * as service from '../services/post';


class Total extends Component {
  constructor(props){
    super(props);
    this.state={
      stepname:"",
      userUnit:"",
      userId:"",
      inputfield: "no value"
    };
    this.handleClick = this.handleClick.bind(this);
    this.testRequest = this.testRequest.bind(this);

    this.updateStepName = this.updateStepName.bind(this);
    this.updateUserUnit = this.updateUserUnit.bind(this);
    this.updateUserId = this.updateUserId.bind(this);
  }

  handleClick() {
    alert(this.state.stepName +"/"+this.state.userUnit + "/"+ this.state.userId);
  }
  testRequest(){
    const result = service.getTitle("innnnnput");
    result.then(function(response){
      console.log(response);
      alert(response.data.data);
    });
  }

  updateStepName (event){
    this.setState({stepName: event.target.value});
  }
  updateUserUnit (event){
    this.setState({userUnit: event.target.value});
  }
  updateUserId (event){
    this.setState({userId: event.target.value});
  }

  render() {
    return (
      <div>
        <h2>실제 마이그레이션 트리거 </h2>


        <p> 전체 마이그레이션 (user-> calendar -> schedule) <button className="ui button active" onClick={this.handleClick}>Trigger</button> </p>
        <select className="ui dropdown" value={this.state.value} onChange={this.updateStepName}>
          <option value="">단계별(step)</option>
          <option value="user">user</option>
          <option value="calendar">calendar</option>
          <option value="schedule">schedule</option>
        </select>
        <select className="ui dropdown" value={this.state.value} onChange={this.updateUserUnit}>
          <option value="">User 단위</option>
          <option value="1">14~15년</option>
          <option value="2">15~16</option>
          <option value="3">16~17</option>
          <option value="90">전체</option>
        </select>
        <form className="ui form">
          <textarea placeholder="Tell us more" rows="3">
          </textarea>
        </form>


        <br/><br/>

        <p> 사용자 별 마이그레이션 (user-> calendar -> schedule) <button className="ui button active" onClick={this.handleClick}>Trigger</button> </p>
        <div className="ui input">
          <input type="text" placeholder="사용자ID" value={this.state.value} onChange={this.updateUserId}/>
        </div>
        <select className="ui dropdown" value={this.state.value} onChange={this.updateStepName}>
          <option value="">단계별(step)</option>
          <option value="all">전체</option>
          <option value="user">user</option>
          <option value="calendar">calendar</option>
          <option value="schedule">schedule</option>
        </select>
        <select className="ui dropdown" value={this.state.value} onChange={this.updateUserUnit}>
          <option value="">User 단위</option>
          <option value="1">14~15년</option>
          <option value="2">15~16</option>
          <option value="3">16~17</option>
          <option value="90">전체</option>
        </select>
        <form className="ui form">
          <textarea placeholder="Tell us more" rows="3">
          </textarea>
        </form>


        <p> 전체 마이그레이션 (user-> calendar -> schedule) <button className="ui button active" onClick={this.testRequest}>Trigger</button> </p>
        <form className="ui form">
          <textarea placeholder="Tell us more" rows="3">
          </textarea>
        </form>

      </div>
    );
  }
}

export default Total;
