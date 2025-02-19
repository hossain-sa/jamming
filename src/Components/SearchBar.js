import React, { useState } from 'react';

function SearchBar(props) {
	const {searchPlayList} = props;
	const [searchTerm, setSearchTerm] = useState('');

	const handleTextChange = (event) => {
		event.preventDefault();
		setSearchTerm(event.target.value);
	}

	const handleSearch = () => {
		searchPlayList(searchTerm);
	}

	return (
		<div className="search-bar">
			<input type="text" placeholder="Search..." onChange={handleTextChange} />
			<button className="search-button" onClick={handleSearch}>
				Search
			</button>
		</div>
	)
}

export default SearchBar;
