import React, { Component } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

class GifListContainer extends Component {
  state = {
    gifs: []
  };

  componentDidMount() {
    this.fetchGifs();
  }

  fetchGifs = (query = "cats") => {
    const apiKey = "YOUR_GIPHY_API_KEY";
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=3`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ gifs: data.data });
      })
      .catch(error => console.error("Error fetching gifs:", error));
  };

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;