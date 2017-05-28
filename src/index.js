import React, { Component, PropTypes } from 'react';
import Grid from './components/Grid';

export default class Splitter extends Component {
	constructor(props) {
		super(props);
		const outputs = getOutputs(props.midi).map(o => Object.assign(o, {channels: [1]}));
		this.state = {outputs}
	}

	componentWillMount() {
		this.props.midiboy.on('midi', this.sendMidi.bind(this))
		this.props.midi.onstatechange = this.updateMidiState.bind(this)
	}

	updateChannel(output, channel) {
		this.setState({outputs: this.state.outputs.map((o, i) => {
			if (i === output) {
				const active = o.channels.indexOf(channel) >= 0;
				o.channels = active
					? o.channels.filter(c => c !== channel)
					: o.channels.concat([channel])
			} 
			return o;
		})});
	}

	sendMidi(msg) {
		this.state.outputs.forEach(o => {
			o.send(msg)
		})
	}

	updateMidiState(a, b) {
		console.log('updating midi state');
		console.log(a, b)
	}

	render() {
		const { outputs } = this.state;
		return (
			<div className="midi-splitter">
				<Grid
					outputs={outputs}
					updateChannel={this.updateChannel.bind(this)}
				/>
			</div>
		);
	}
}

Splitter.propTypes = {
}

// Places every output into an array.
function getOutputs(midi) {
	var outputs = [];
	midi.outputs.forEach(i => outputs.push(i));
	return outputs;
}