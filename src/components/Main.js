import React from "react";
import "../index.css";
import Movies from "./Movies";
export default class Main extends React.Component {
    state = {
        movies: [],
    };

    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=329ffa13&s=Iron man")
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search }));
    }
    render() {
        return (
            <div className="hero">
                <Movies movies={this.state.movies} />
            </div>
        );
    }
}
