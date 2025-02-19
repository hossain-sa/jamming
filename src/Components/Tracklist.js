import Track from './Track';

function TrackList(props) {
	const { tracks } = props;
	return (
		<div className="track-list">
			{
				tracks.map((track) => (
					<Track track={track} key={track.id} addTrack={addTrack} removeTrack={removeTrack} />
				))
			}
		</div>
	)
}

export default TrackList;