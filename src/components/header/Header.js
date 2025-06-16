import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxB38rEbrXpMDBxRT_DS_OzSvzwfJa2dYJAA&s" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                <Link to="/watchnow" style={{textDecoration: "none"}}><span>Watch Now</span></Link>
                <a href="https://github.com/vishnu1100/React.js-IMDB-movie-website" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none",color:"white",fontSize:20 }}>Contribute</a>

               
                
            </div>
        </div>
    )
}

export default Header