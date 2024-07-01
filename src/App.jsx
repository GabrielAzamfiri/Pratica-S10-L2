import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";

// **************file di libri****************
import fantasy from "../src/data/books/fantasy.json";
import horror from "../src/data/books/horror.json"
import history from "../src/data/books/history.json"
import scifi from "../src/data/books/scifi.json"
import romance from "../src/data/books/romance.json"

class App extends Component {
  state = {
    categoria: "fantasy",
    horror:[...horror],
    history:[...history] ,
    scifi: [...scifi],
    fantasy:[...fantasy],
    romance:[...romance] 
  };
  
  // funzione che modifica lo state categoria grazie al eventKey
  selectCategory = eventKey => {
   this.setState({ categoria: eventKey })
   };
  render() {
    return (
      <div className="App">
        {/* do la funzione selectCategory come props cosi da chiamarla dentro TopBar e farle avere eventKey come dato */}
        <TopBar setCategory={this.selectCategory} />
        <Welcome category={this.state.categoria}/>
        {/* passo come props lo state.catogoria cosi da avere l'array di film in base alla selezione del dropdown */}
        <BookList category={this.state[this.state.categoria]} />
        <MyFooter />
      </div>
    );
  }
}

export default App;
