
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
		<div className="track">
			<div className="track-info">
				<h3>{track.name}</h3>
				<p>{track.artist} | {track.album}</p>
			</div>
			<div className="track-action">
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