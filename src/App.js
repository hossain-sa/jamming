import React, { useState } from 'react';

import Playlist from './Components/Playlist';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playList, setPlayList] = useState("New Playlist");
  const [playListTracks, setPlayListTracks] = useState([
    {id: 1, name: "Some song", artist: "some singer", "album": "some album"},
    {id: 2, name: "Another song", artist: "Another singer", "album": "Another album"},
  ]);

  const changeName = (newName) => {
    setPlayList(newName);
  }

  const searchPlayList = () => {
    return true;
  }

  const addTrack = () => {
    return true;
  }

  const removeTrack = () => {
    return true;
  }


  return (
    <div>
      <h1>Jamming App</h1>
      <div className="App">
        <div>
          <SearchBar searchPlayList={searchPlayList} />

          <div className="playlist">
            <SearchResults searchResults={searchResults} addTrack={addTrack} />
            <Playlist playList={playList} playListTracks={playListTracks} changeName={changeName} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
