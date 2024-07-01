import { Component } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    ricerca: "",
   
    selectedBook:""

  };
  selezionato = (selectedbook) => {
    this.setState({  selectedBook: selectedbook});
  };

  componentDidUpdate(prevProps, prevState) {
    
    console.log("PREV props", prevState.selectedBook);
    console.log("THIS props", this.state.selectedBook);
   
  }
  render() {
    return (
      <Container>
        <Row>
          <Col md={6}>
            <Row>
              <InputGroup size="default" className="my-5">
                <InputGroup.Text id="inputGroup-sizing-default">Cerca Libro</InputGroup.Text>
                <Form.Control aria-label="default" aria-describedby="inputGroup-sizing-default" value={this.state.ricerca} onChange={e => this.setState({ ricerca: e.target.value })} />
              </InputGroup>

              {/* faccio un filtro che controlla se nel titolo dei vari libri è incusa la striga che ho in state.ricerca */}
              {/* se passa la condizione mi faccio un map del nuovo array e ci creo le carte */}
              {this.props.category
                .filter(libro => libro.title.toLowerCase().includes(this.state.ricerca.toLowerCase()))
                .map(book => {
                  // la condizione passa anche con stringa vuota.. quindi non serve mettere un ? con le 2 condizioni
                  // farà sempre un map su array pieno o array filtrato
                  return <SingleBook book={book} key={book.asin} selected={this.selezionato} selectedStile={this.state.selectedBook===book}/>;
                })}
            </Row>
          </Col>
          <Col md={6}>
          {this.state.selectedBook && <CommentArea idBook={this.state.selectedBook.asin} selectedBook={this.state.selectedBook}/>}
          </Col>
        </Row>
      </Container>
    );
  }
}
export default BookList;
