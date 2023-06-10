import React from "react";
export default class Search extends React.Component {
    state = {
        search: "avengers",
        type: "all",
    };

    searchInput = (e) => {
        if (e.key === "Enter") {
            this.props.handleSearch(this.state.search, this.state.type);
            e.target.value = "";
        }
    };
    changeState = (e) => {
        this.setState({ search: e.target.value });
    };
    handleFilter = (e) => {
        this.setState(
            () => ({ type: e.target.dataset.type }),
            () => {
                this.props.handleSearch(this.state.search);
            }
        );
    };
    render() {
        return (
            <div className="wrapper-input">
                <input
                    className="search-input"
                    type="search"
                    placeholder="Search"
                    name="search"
                    onChange={this.changeState}
                    onKeyDown={this.searchInput}
                />
                <div className="wrapper-radio">
                    <label>
                        <input
                            type="radio"
                            name="type"
                            data-type="all"
                            onChange={this.handleFilter}
                            checked={this.state.type === "all"}
                        />
                        All
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="type"
                            onChange={this.handleFilter}
                            data-type="movie"
                            checked={this.state.type === "movie"}
                        />
                        Movies
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="type"
                            onChange={this.handleFilter}
                            data-type="series"
                            checked={this.state.type === "series"}
                        />
                        Series
                    </label>
                </div>
            </div>
        );
    }
}
