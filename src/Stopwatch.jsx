import React, { Component } from 'react';
import './App.css';

class Stopwatch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hours: 0,
			minutes: 0,
			seconds: 0
		}
	}

	componentWillMount () {
		this.convertTime(this.props.time);
	}

	componentDidMount () {
		setInterval(() => this.convertTime(this.props.time), 1000);
	}

 	leading0 (num) {
		return num < 10 ? '0' + num : num;
	}

	convertTime (time) {
		console.log(time);
		if (time > 0) {
			const remainingTime = time - Date.parse(new Date());

			const seconds = Math.floor((remainingTime / 1000) % 60);
			const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
			const hours = Math.floor(remainingTime / (1000 * 60 * 60) % 24);

			this.setState({hours, minutes, seconds});
		} else {
			const seconds = 0;
			const minutes = 0;
			const hours = 0;
			
			this.setState({hours, minutes, seconds});
		}
	}

	render() {
		return (
			<div className="Stop-watch">
				<span>{this.leading0(this.state.hours)}:</span>
				<span>{this.leading0(this.state.minutes)}:</span>
				<span>{this.leading0(this.state.seconds)}</span>
			</div>
		)
	}
}

export default Stopwatch;