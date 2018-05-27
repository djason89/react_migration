import React, { Component } from "react";
import * as service from '../services/post';


class Unit extends Component {
  constructor(props){
    super(props);
    this.state={
        resultk1:"",
        resultk2:""

    };
  }

  handleClick = async(event) => {
    console.log(event);
    alert(event);
  }
  testRequest1 = async (id) => {
    const migrationResult = await service.getTitle(id);
    this.setState({resultk1:migrationResult.data.data});
  }

  testRequest2 = async (id) => {
    const migrationResult = await service.getTitle(id);
    this.setState({resultk2:migrationResult.data.data});
  }

  render() {

		return (
      <div>
  			<h2>Unit Dashboard</h2>
  			<p>사용자 활성화</p>
        <div className="ui input">
          <input type="text" placeholder="사용자ID" value={this.value} onChange={ event => this.userId=event.target.value}/>
        </div>
        <button className="ui button active" onClick={() => this.testRequest1(this.userId)}>Trigger</button>
        <div className="ui form">
          <textarea placeholder="Tell us more" rows="3" value={this.state.resultk1}/>
        </div>
        <br/><br/>

        <p>사용자 비활성화</p>
        <div className="ui input">
          <input type="text" placeholder="사용자ID" value={this.value} onChange={ event => this.userId=event.target.value}/>
        </div>
        <button className="ui button active" onClick={() => this.testRequest2(this.userId)}>Trigger</button>
        <div className="ui form">
          <textarea placeholder="Tell us more" rows="3" value={this.state.resultk2}/>
        </div>
			</div>
    );
	}
}


export default Unit;
