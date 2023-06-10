import React from "react";
import "../index.css";
import Movies from "./Movies";
import Loader from "./Loader";
import Search from "./Search";
export default class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };

    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=329ffa13&s=avengers")
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            );
    }

    handleSearch = (str, type = "all") => {
        this.setState({ loading: true });
        this.test = `${type}` === "all" ? "" : `${type}`;
        fetch(
            `http://www.omdbapi.com/?apikey=329ffa13&s=${str}&type=${this.test}`
        )
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            );
    };
    render() {
        return (
            <div className="hero">
                <Search handleSearch={this.handleSearch} />
                {this.state.loading ? (
                    <Loader />
                ) : (
                    <Movies movies={this.state.movies} />
                )}
            </div>
        );
    }
}
