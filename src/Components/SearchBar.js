import React, { useCallback, useState } from 'react';

function SearchBar(props) {
	const {searchPlayList} = props;
	const [searchTerm, setSearchTerm] = useState('');

	const handleTextChange = useCallback((event) => {
		setSearchTerm(event.target.value);
	}, []);

	const handleSearch = useCallback(() => {
		searchPlayList(searchTerm);
	}, [searchPlayList, searchTerm]);

	return (
		<div className="SearchBar">
			<input type="text" placeholder="Search..." onChange={handleTextChange} />
			<button className="SearchButton" onClick={handleSearch}>
				Search
			</button>
		</div>
	)
}

export default SearchBar;
