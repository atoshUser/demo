import React from "react";
export default class Search extends React.Component {
    state = {
        search: "",
    };

    searchInput = (e) => {
        if (e.key === "Enter") {
            this.props.handleSearch(this.state.search);
            e.target.value = "";
        }
    };
    changeState = (e) => {
        this.setState({ search: e.target.value });
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
            </div>
        );
    }
}
