import React, { useState } from 'react';

import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playList, setPlayList] = useState("New Playlist");
  const [playListTracks, setPlayListTracks] = useState([]);



  return (
    <div>
      <h1>Jamming App</h1>
      <div className="App">
        <div>
          <SearchBar searchPlayList={searchPlayList} />

          <div className="playlist">
            <SearchResults searchResults={searchResults} addTrack={addTrack} />
            <Playlist playList={playList} playListTracks={playListTracks} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
