# IMDB Movie Website Clone

A React-based movie website that replicates IMDB's core features, including movie listings, details, and streaming capabilities.

## Features

- 🎬 Movie browsing with categories (Popular, Top Rated, Upcoming)
- 🔍 Movie search functionality
- 📺 Watch Now section for streaming movies
- 🎥 Movie details with cast, ratings, and reviews
- 🎨 Modern and responsive UI design
- 🌙 Dark theme interface

## Tech Stack

- React.js
- React Router for navigation
- TMDB API for movie data
- CSS3 for styling
- React Responsive Carousel

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/React.js-IMDB-movie-website.git
```

2. Install dependencies
```bash
cd React.js-IMDB-movie-website
npm install
```

3. Start the development server
```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── components/         # Reusable components
├── pages/             # Page components
├── data/              # Static data files
└── App.js            # Main application component
```

## Contributing

We welcome contributions to improve this project! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Add comments for complex logic
- Update documentation for new features
- Write meaningful commit messages
- Test your changes before submitting

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [TMDB](https://www.themoviedb.org/) for providing the movie data API
- [Create React App](https://create-react-app.dev/) for the project setup
- All contributors who have helped improve this project

## Using FFmpeg for Video Conversion

### Converting MKV to MP4

To convert `.mkv` files to `.mp4` instantly without quality loss:

```bash
ffmpeg -i input.mkv -c copy output.mp4
```

The `-c copy` flag tells FFmpeg to copy the video and audio without re-encoding, making the process fast and lossless.

### Internet Archive Upload Instructions

1. Check the IA version:
```bash
ia --version
```

2. Configure your archive.org credentials:
```bash
ia configure
```

3. Upload a file:
```bash
ia upload my-video-identifier path/to/yourfile.mp4 \
  --metadata="title:My Video" \
  --metadata="mediatype:movies" \
  --metadata="collection:opensource_movies"
```

## If Upload Fails Midway

If the upload process fails midway, you can simply re-run the same command. Internet Archive won't re-upload the completed chunks, especially if it's the same filename and identifier.

### For WSL (Linux) Users

```bash
ia upload name input.mp4 --retries 20 --verbose
```