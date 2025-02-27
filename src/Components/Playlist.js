import React, {useCallback} from "react";
import TrackList from './Tracklist';

function Playlist(props) {
	const {playListTracks, removeTrack, changeName} = props;

	const handleNameChange = useCallback((event) => {
		changeName(event.target.value);
	},[changeName]);
	return (
		<div className="Playlist">
			<input onChange={handleNameChange} defaultValue={"New Playlist"} />
			<TrackList tracks={playListTracks} isRemoval={true} removeTrack={removeTrack} />

			<button className="Playlist-save" onClick={handleNameChange}>Save Name</button>
		</div>
	)
}

export default Playlist;