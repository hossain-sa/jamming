import TrackList from './TrackList';

function Playlist(props) {
	const {playListTracks, removeTrack} = props;

	return (
		<div className="Playlist">
			<TrackList tracks={playListTracks} removeTrack={removeTrack} />
		</div>
	)
}

export default Playlist;