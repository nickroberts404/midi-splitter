import React from 'react';
import OutputRow from './OutputRow';

const channels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
export default function Grid (props) {
	return (
		<div className="splitter-table">
			<div className="header-row">
				<div className="row-title">Channels</div>
				<div className="cells">{channels.map(i => <div className="cell">{i}</div>)}</div>
			</div>
			{props.outputs.map((o, i) => <OutputRow
				key={o.name}
				output={o} 
				index={i}
				updateChannel={props.updateChannel}
				/>)}
		</div>
	)
}