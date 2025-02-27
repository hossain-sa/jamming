import TrackList from './Tracklist';

function Playlist(props) {
	const {playListTracks, removeTrack, changeName} = props;

	const handleNameChange = (event) => {
		event.preventDefault();
		changeName(event.target.value);
	}
	return (
		<div className="Playlist">
			<input onChange={handleNameChange} defaultValue={"New Playlist"} />
			<TrackList tracks={playListTracks} removeTrack={removeTrack} />

			<button className="Playlist-save" onClick={handleNameChange}>Save Name</button>
		</div>
	)
}

export default Playlist;