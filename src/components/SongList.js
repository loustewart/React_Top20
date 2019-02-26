import React from 'react';
import SongDetail from './SongDetail.js';

const SongList = (props) => {
  const songDetails = props.songs.feed.entry.map((song, index) => {
    return <SongDetail key={index} song={song}>
    <pre>
    {index + 1} {song["im:name"].label} by {song["im:artist"].label}
    </pre>
    </SongDetail>

  })

  return (
  <div className="song-list">
    <ul>
      {songDetails}
    </ul>
  </div>
  )
}




export default SongList;
