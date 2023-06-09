import React from "react";
import "../index.css";
import Movies from "./Movies";
import Loader from "./Loader";
import Search from "./Search";
export default class Main extends React.Component {
    state = {
        movies: [],
    };

    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=329ffa13&s=Avengers")
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search }));
    }

    handleSearch = (str) => {
        fetch(`http://www.omdbapi.com/?apikey=329ffa13&s=${str}`)
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search }));
    };
    render() {
        return (
            <div className="hero">
                <Search handleSearch={this.handleSearch} />
                {this.state.movies.length ? (
                    <Movies movies={this.state.movies} />
                ) : (
                    <Loader />
                )}
            </div>
        );
    }
}
