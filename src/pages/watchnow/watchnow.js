import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import movieData from '../../data/movies.json';
import './watchnow.css';

class WatchNow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movieData.movies || [],
      searchQuery: ''
    };
  }

  handleMoviePress = (movie) => {
    this.props.navigate(`/stream/${movie.id}`);
  };

  handleSearch = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  getFilteredMovies = () => {
    const { movies, searchQuery } = this.state;
    if (!searchQuery.trim()) return movies;
    
    return movies.filter(movie => 
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  render() {
    const filteredMovies = this.getFilteredMovies();

    return (
      <div className="movie__list">
        <div className="list__header">
          <h2 className="list__title">WATCH NOW</h2>
          <div className="search__container">
            <input
              type="text"
              className="search__input"
              placeholder="Search movies..."
              value={this.state.searchQuery}
              onChange={this.handleSearch}
            />
          </div>
        </div>
        <div className="list__cards">
          {filteredMovies.length > 0 ? (
            filteredMovies.map(movie => (
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
            ))
          ) : (
            <div className="no__results">
              No movies found matching "{this.state.searchQuery}"
            </div>
          )}
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
