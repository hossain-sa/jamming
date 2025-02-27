import React, { useCallback } from 'react';

function Track(props) {
	const {track, addTrack, removeTrack, isSearchResult, isRemoval} = props;

	const handleAdd = useCallback((event)=> {
		addTrack(track);
	}, [addTrack, track]);

	const handleRemove = useCallback((event) => {
		removeTrack(track);
	}, [removeTrack, track]);

	return (
		<div className="Track">
			<div className="Track-information">
				<h3>{track.name}</h3>
				<p>{track.artist} | {track.album}</p>
			</div>
			<div className="Track-action">
				{isRemoval && (<button className="remove-tract" onClick={handleRemove}>
					-
				</button>)}
				{isSearchResult && (<button className="add-track" onClick={handleAdd}>
					+
				</button>)}
			</div>
		</div>
	)
}

export default Track;