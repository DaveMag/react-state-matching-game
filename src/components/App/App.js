import React, { Component } from "react";
import OptionsPanel from "../OptionsPanel";
import Board from "../Board";
import { createTiles, indexOfSelected } from "../../misc/utils";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numTiles: 36,
      playing: false,
      previousTileIndex: null,
      tiles: [],
      toBeCleared: null,
    };
  }

  startGame = (numTiles) => {
    this.setState((state) => ({
      playing: true,
      previousTileIndex: null,
      toBeCleared: null,
      tiles: createTiles(state.numTiles, this.handleTileClicked),
    }));
  };

  handleTileClicked = ({ id, color }) => {
    this.setState((state) => {
      const tiles = state.tiles;
      const toBeCleared = state.toBeCleared;
      const selectTileIndex = [ indexOfSelected, tiles, id, color] ;
      const previousTileIndex = state.previousTileIndex;

      if (previousTileIndex !== null) {
        const previousTile = [...previousTileIndex];
        const selectTile = selectTileIndex.tiles;

      } else {
        previousTileIndex = selectTileIndex;
      }

      if(previousTile.id !== selectedTile.id && previousTile.color === this.color) {
        selectedTile.matched= true,
        previousTile.matched= true,
        previousTileIndex= null
      } else {
        toBeCleared = [previousTileIndex = null, selectedTileIndex, ]
      }

      selectTile.selected = true;

      return {
        toBeCleared,
        tiles,
        previousTileIndex
      };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">Turbo-Matcher</header>
        <OptionsPanel
          playing={this.state.playing}
          numTiles={this.state.numTiles}
          startGame={this.startGame}
        />
        <Board numTiles={this.state.numTiles} tiles={this.state.tiles} />
      </div>
    );
  }
}

export default App;
