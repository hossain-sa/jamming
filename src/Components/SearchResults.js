import TrackList from './Tracklist';

function SearchResults(props) {
	const {searchResults, addTrack} = props;
	return (
		<div className="SearchResults">
			<TrackList tracks={searchResults} addTrack={addTrack} />
		</div>
	)
}

export default SearchResults;