import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import movieData from '../../data/movies.json';
import './StreamPage.css';

class StreamPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      isPlaying: false,
      isFullscreen: false
    };
  }

  componentDidMount() {
    const movie = movieData.movies.find(m => m.id === parseInt(this.props.movieId));
    if (movie) {
      this.setState({ movie });
    }
  }

  togglePlayPause = () => {
    this.setState({ isPlaying: !this.state.isPlaying });
    const video = document.getElementById('movie-player');
    if (this.state.isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };

  toggleFullscreen = () => {
    const video = document.getElementById('movie-player');
    if (!document.fullscreenElement) {
      video.requestFullscreen();
      this.setState({ isFullscreen: true });
    } else {
      document.exitFullscreen();
      this.setState({ isFullscreen: false });
    }
  };

  render() {
    const { movie, isPlaying } = this.state;

    if (!movie) {
      return <div className="stream-container">Movie not found</div>;
    }

    return (
      <div className="stream-container">
        <div className="video-container">
          <video
            id="movie-player"
            src={movie.streamUrl}
            className="video-player"
            controls={false}
            onClick={this.togglePlayPause}
          />
          <div className="video-controls">
            <button onClick={this.togglePlayPause} className="control-button">
              {isPlaying ? '⏸️' : '▶️'}
            </button>
            <button onClick={this.toggleFullscreen} className="control-button">
              {this.state.isFullscreen ? '⤓' : '⤢'}
            </button>
          </div>
        </div>

        <div className="movie-info">
          <h1 className="movie-title">{movie.title}</h1>
          <p className="movie-year">{movie.year}</p>
          <p className="movie-genre">{movie.genre}</p>
          <p className="movie-description">{movie.description}</p>
        </div>
      </div>
    );
  }
}

// Wrapper component to use useParams hook
const StreamPageWrapper = (props) => {
  const { id } = useParams();
  return <StreamPage {...props} movieId={id} />;
};

export default StreamPageWrapper; 