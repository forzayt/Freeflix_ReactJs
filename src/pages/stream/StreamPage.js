import React, { Component } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import movieData from '../../data/movies.json';
import './StreamPage.css';

class StreamPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
    this.playerRef = React.createRef();
  }

  componentDidMount() {
    const movie = movieData.movies.find(m => m.id === parseInt(this.props.movieId));
    if (movie) {
      this.setState({ movie }, () => {
        this.player = videojs(this.playerRef.current, {
          controls: true,
          autoplay: true,
          preload: 'auto',
          fluid: true,
          responsive: true,
          playbackRates: [0.5, 1, 1.5, 2]
        });
      });
    }
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    const { movie } = this.state;

    if (!movie) {
      return <div className="stream-container">Movie not found</div>;
    }

    return (
      <div className="stream-page">
        <div className="stream-header">
          <button className="back-button" onClick={this.props.onBack}>
            ← Back
          </button>
          <h1 className="movie-title">{movie.title}</h1>
        </div>
        <div className="stream-container">
          <div data-vjs-player>
            <video
              ref={this.playerRef}
              className="video-js vjs-big-play-centered"
              playsInline
            >
              <source src={movie.streamUrl} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    );
  }
}

// Wrapper component to use useParams hook
const StreamPageWrapper = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  return <StreamPage {...props} movieId={id} onBack={() => navigate(-1)} />;
};

export default StreamPageWrapper; 