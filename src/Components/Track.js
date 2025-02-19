
function Track(props) {
	const {track, addTrack, removeTrack} = props;
	return (
		<div className="track">
			<div className="track-info">
				<h3>{track.name}</h3>
				<p>{track.artist} | {track.album}</p>
			</div>
			<div className="track-action">
				<button className="remove-tract" onClick={removeTrack}>
					-
				</button>
				<button className="add-track" onClick={addTrack}>
					+
				</button>
			</div>
		</div>
	)
}

export default Track;