import React, {useCallback} from "react";
import TrackList from './Tracklist';

function Playlist(props) {
	const {playListTracks, removeTrack, changeName} = props;

	const handleNameChange = useCallback((event) => {
		changeName(event.target.value);
	},[changeName]);
	return (
		<div className="Playlist">
			<div className="single-line">
				<input onChange={handleNameChange} defaultValue={"New Playlist"} />
				<button className="Playlist-save" onClick={handleNameChange}>Save</button>
			</div>
			<TrackList tracks={playListTracks} isRemoval={true} removeTrack={removeTrack} />
		</div>
	)
}

export default Playlist;