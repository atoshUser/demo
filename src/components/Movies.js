import Movie from "./Movie";
import "./Movies.css";
export default function Movies(props) {
    const { movies } = props;

    return (
        <ul className="hero-list">
            {movies.map((element) => (
                <Movie key={element.imdbID} {...element} />
            ))}
        </ul>
    );
}
