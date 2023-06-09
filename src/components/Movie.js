export default function Movie(props) {
    const { Title, Year, imdbID, Type, Poster } = props;

    return (
        <li className="hero-item" key={imdbID}>
            <img className="movie-img" src={Poster} alt="card-img" />
            <div className="card-inner">
                <h2 className="movie-title">{Title}</h2>
                <div className="movie-info">
                    <span className="movie-year">{Year}</span>
                    <span className="movie-type">{Type}</span>
                </div>
            </div>
        </li>
    );
}
