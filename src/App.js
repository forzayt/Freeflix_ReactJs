import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from 'react';
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import WatchNow from './pages/watchnow/watchnow';
import StreamPage from './pages/stream/StreamPage';
import DynamicBackground from './components/DynamicBackground/DynamicBackground';

function App() {
  const [backgroundImage, setBackgroundImage] = useState('https://image.tmdb.org/t/p/original/9yBVqNruk6YfxthWN7moQP9PwB.jpg');

  return (
    <div className="App">
        <DynamicBackground backgroundImage={backgroundImage} />
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home setBackgroundImage={setBackgroundImage} />}></Route>
                <Route path="movie/:id" element={<Movie setBackgroundImage={setBackgroundImage} />}></Route>
                <Route path="movies/:type" element={<MovieList setBackgroundImage={setBackgroundImage} />}></Route>
                <Route path="/main" element={<WatchNow setBackgroundImage={setBackgroundImage} />}></Route>
                <Route path="stream/:id" element={<StreamPage setBackgroundImage={setBackgroundImage} />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
