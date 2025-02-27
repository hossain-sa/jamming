
function Track(props) {
	const {track, addTrack, removeTrack} = props;

	const handleAdd = (event) => {
		event.preventDefault();
		addTrack(track);
	}

	const handleRemove = (event) => {
		event.preventDefault();
		removeTrack(track);
	}

	return (
		<div className="Track">
			<div className="Track-information">
				<h3>{track.name}</h3>
				<p>{track.artist} | {track.album}</p>
			</div>
			<div className="Track-action">
				<button className="remove-tract" onClick={handleRemove}>
					-
				</button>
				<button className="add-track" onClick={handleAdd}>
					+
				</button>
			</div>
		</div>
	)
}

export default Track;