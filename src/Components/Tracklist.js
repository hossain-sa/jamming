import Track from './Track';

function TrackList(props) {
	const { tracks, addTrack, removeTrack, isRemoval, isSearchResult } = props;
	return (
		<div className="TrackList">
			{
				tracks.map((track) => (
					<Track track={track} key={track.id} addTrack={addTrack} removeTrack={removeTrack} isRemoval={isRemoval} isSearchResult={isSearchResult} />
				))
			}
		</div>
	)
}

export default TrackList;