import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import movieData from '../../data/movies.json';
import './watchnow.css';

class WatchNow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movieData.movies || []
    };
  }

  handleMoviePress = (movie) => {
    this.props.navigate(`/stream/${movie.id}`);
  };

  render() {
    return (
      <div className="movie__list">
        <h2 className="list__title">WATCH NOW</h2>
        <div className="list__cards">
          {this.state.movies.map(movie => (
            <div 
              key={movie.id}
              className="cards"
              onClick={() => this.handleMoviePress(movie)}
            >
              <img 
                className="cards__img" 
                src={movie.poster} 
                alt={movie.title}
              />
              <div className="cards__overlay">
                <div className="card__title">{movie.title}</div>
                <div className="card__runtime">{movie.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

// Wrapper component to use useNavigate hook
const WatchNowWrapper = (props) => {
  const navigate = useNavigate();
  return <WatchNow {...props} navigate={navigate} />;
};

export default WatchNowWrapper;
