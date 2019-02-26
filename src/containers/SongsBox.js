import React from 'react';
import SongList from '../components/SongList.js';
import Request from '../helpers/request.js';
import Header from '../components/Header.js';

class SongsBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
  }


  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    const request = new Request();
    request.get(url).then((data) => this.setState({songs: data}))
  }

  render() {
    if (this.state.songs.length === 0) {
      return null
    }

    return (
      <div>
        <Header/>
        <SongList songs={this.state.songs}/>
      </div>
    );
  }
}


export default SongsBox;
