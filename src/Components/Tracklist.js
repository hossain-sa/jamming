import Track from './Track';

function TrackList(props) {
	const { tracks } = props;
	const addTrack = (track) => {
		props.addTrack(track);
	}
	const removeTrack = (track) => {
		props.removeTrack(track);
	}
	return (
		<div className="TrackList">
			{
				tracks.map((track) => (
					<Track track={track} key={track.id} addTrack={addTrack} removeTrack={removeTrack} />
				))
			}
		</div>
	)
}

export default TrackList;