import React, { useCallback, useState } from 'react';

import Playlist from './Components/Playlist';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import Spotify from './api/Spotify';
import track from './Components/Track';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playList, setPlayList] = useState("New Playlist");
  const [playListTracks, setPlayListTracks] = useState([
    {id: 1, name: "Some song", artist: "some singer", "album": "some album"},
    {id: 2, name: "Another song", artist: "Another singer", "album": "Another album"},
  ]);

  const savePlayList = useCallback(() => {
    const trackUris = playListTracks.map((track) => track.uri);
    Spotify.savePlayList(playList, trackUris).then(() => {
      setPlayList("New Playlist");
      setPlayListTracks([]);
    })
  }, [playList, playListTracks]);

  const changePlayListName = (newName) => {
    setPlayList(newName);
  }

  const searchPlayList = useCallback((searchTerm) => {
    Spotify.search(searchTerm).then(setSearchResults);
  }, []);

  const addTrack = useCallback((track) => {
    if(playListTracks.some((savedTrack) => savedTrack.id === track.id)) return;

    setPlayListTracks((previousTracks) => [...previousTracks, track]);
  }, [playListTracks]);

  const removeTrack = useCallback(() => {
    setPlayListTracks((previousTracks) => previousTracks.filter(currentTrack => currentTrack.id !== track.id));
  }, []);


  return (
    <div>
      <h1>Jamming App</h1>
      <div className="App">
        <div>
          <SearchBar searchPlayList={searchPlayList} />

          <div className="playlist">
            <SearchResults searchResults={searchResults} addTrack={addTrack} />
            <Playlist playList={playList} playListTracks={playListTracks} savePlayList={savePlayList} changeName={changePlayListName} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
