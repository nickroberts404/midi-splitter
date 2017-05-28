import React from 'react';

export default function ChannelCell (props) {
	return (
		<div
			className={'cell output-channel' + (props.active ? ' active' : '')}
			onClick={() => props.updateChannel(props.outputIndex, props.channel)}
		>
		</div>
	)
}