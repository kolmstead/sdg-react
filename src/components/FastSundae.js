import React from 'react';

function FastSundaeTrackList() {
    return (

      <div id="track-list">
        <ul>
          <li className="track-item">01 Fast Sundae<i className="material-icons playSong" id="track1" data-track={1}>play_arrow</i></li>
          <li className="track-item">02 Burden of Babylon<i className="material-icons playSong" id="track2" data-track={2}>play_arrow</i></li>
          <li className="track-item">03 Mysterious Way<i className="material-icons playSong" id="track3" data-track={3}>play_arrow</i></li>
          <li className="track-item">04 Two White Shirts<i className="material-icons playSong" id="track4" data-track={4}>play_arrow</i></li>
          <li className="track-item">05 Hearts<i className="material-icons playSong" id="track5" data-track={5}>play_arrow</i></li>
          <li className="track-item">06 Falling Away<i className="material-icons playSong" id="track6" data-track={6}>play_arrow</i></li>
          <li className="track-item">07 Kolob<i className="material-icons playSong" id="track7" data-track={7}>play_arrow</i></li>
          <li className="track-item">08 Palmyra<i className="material-icons playSong" id="track8" data-track={8}>play_arrow</i></li>
          <li className="track-item">09 Jennyology<i className="material-icons playSong" id="track9" data-track={9}>play_arrow</i></li>
          <li className="track-item">10 Childish Things<i className="material-icons playSong" id="track10" data-track={10}>play_arrow</i></li>
          <li className="track-item">11 Room Enough<i className="material-icons playSong" id="track11" data-track={11}>play_arrow</i></li>
          <li className="track-item">12 O Zion<i className="material-icons playSong" id="track12" data-track={12}>play_arrow</i></li>
          <li className="track-item">13 Seventh Day<i className="material-icons playSong" id="track13" data-track={13}>play_arrow</i></li>
        </ul>
        <div>
          <audio id="audioBox" controls="controls" style={{display: 'block'}} autoPlay>
          </audio></div>
      </div>
    );
}

export { FastSundaeTrackList };