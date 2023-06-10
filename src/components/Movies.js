import Movie from "./Movie";
import "./Movies.css";
export default function Movies(props) {
    const { movies = [] } = props;
    console.log(movies);
    return (
        <ul className="hero-list">
            {movies.length ? (
                movies.map((element) => (
                    <Movie key={element.imdbID} {...element} />
                ))
            ) : (
                <h2> Nothing not found</h2>
            )}
        </ul>
    );
}
