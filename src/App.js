import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./spongebob.json";
import "./App.css";

class App extends Component {
  state = {
    cards,
    score: 0,
    highscore: 0,
    characters: []
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
      });
    }

      this.state.cards.forEach(card => {
        card.count = 0;
      });

    this.setState({score: 0, characters: []});
    console.log("You Lose")
  }

  clickCounter = id => {
  
    const { characters } = this.state;

    if (characters.includes(id)) {
      this.gameOver();
      return;
    }

    const addNewCharacterToArray = [...characters, id];

    this.setState({characters: addNewCharacterToArray, score: this.state.score+ 1});


    this.setState({cards: cards.sort(() => Math.random() - 0.5)});

    return true;

  }

  render() {
    console.log('the cahracterarray', this.state.characters);
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
        {this.state.cards.map(card => (
          <Card
            clickCounter={this.clickCounter}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;