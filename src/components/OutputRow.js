import React from 'react';
import ChannelCell from './ChannelCell';

const channels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
export default function OutputRow (props) {
	return (
		<div className="output-row">
			<div className="row-title output-name">{props.output.name}</div>
			<div className="cells output-channels">
				{channels.map(i => <ChannelCell
					channel={i}
					outputIndex={props.index}
					updateChannel={props.updateChannel}
					active={props.output.channels.indexOf(i) >= 0}
					/>)}
			</div>
		</div>
	)
}