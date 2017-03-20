import React, { Component } from 'react';
import Clock from './Clock';
import Stopwatch from './Stopwatch'
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
	constructor (props) {
		super(props);

		this.state = {
			deadline: 'July 15, 2017',
			newDeadline: '',
			time: 0,
			newTime: ''
		}
	}

	changeDeadline () {
		this.setState({deadline: this.state.newDeadline});
	}

	changeTime () {
		this.setState({time: this.state.newTime});
	}

	resetTime () {
		this.setState({newTime: 0});
		this.setState({time: this.state.newTime});
	}

	render() {
		return (
			<div className="App">
				<div className="App-title">
					Countdown to {this.state.deadline}
				</div>
				<div>
					<Clock deadline={this.state.deadline}/>
				</div>
				<Form inline>
					<FormControl
						className="Deadline-input"
						onChange={event => this.setState({newDeadline: event.target.value})}
						placeholder='new date'/>
					<Button onClick={() => this.changeDeadline()}>Submit</Button>
				</Form>
				<div className="App-title">
					Stopwatch
				</div>
				<div>
					<Stopwatch time={this.state.time}/>
				</div>
				<Form inline>
					<FormControl
						className="Stopwatch-input"
						onChange={event => this.setState({newTime: event.target.value * 1000 + Date.parse(new Date())})}
						placeholder='new time in seconds'/>
					<Button onClick={() => this.changeTime()}>Submit</Button>
					<Button onClick={() => this.resetTime()}>Reset</Button>
				</Form>
			</div>
		)
	}
}

export default App;