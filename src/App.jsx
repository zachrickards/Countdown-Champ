import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor (props) {
		super(props);

		this.state = {
			deadline: 'July 15, 2017',
			newDeadline: ''
		}
	}

	changeDeadline () {
		this.setState({deadline: 'November 15, 2017'})
	}

	render() {
		return (
			<div className="App">
				<div className="App-title">
					Countdown to {this.state.deadline}
				</div>
				<div>
					<div className="Clock-days">14 Days</div>
					<div className="Clock-hours">30 Hours</div>
					<div className="Clock-minutes">15 Minutes</div>
					<div className="Clock-seconds">20 Seconds</div>
				</div>
				<div>
					<input 
						onChange={event => console.log('event', event)}
						placeholder='new date'/>
					<button onClick={() => this.changeDeadline()}>Submit</button>
				</div>
			</div>
		)
	}
}

export default App;