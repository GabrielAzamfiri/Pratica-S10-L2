import { Component } from "react";
import { Button, Card, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  selezionato = () => {
    this.setState({ selected: !this.state.selected });
  };
  render() {
    return (
      <Col sm={4}   key={`book-${this.props.book.asin}`}>
        <Card onClick={this.selezionato} className={this.state.selected ? "border border-info bg-black" : "border-none"}>
          <Card.Img variant="top" src={this.props.book.img}  />
          <Card.Body>
            <Card.Title className="text-truncate">{this.props.book.title}</Card.Title>
            <Card.Text>Price: {this.props.book.price}$ </Card.Text>
            <Button variant="primary">Take a look</Button>
          </Card.Body>
        </Card>
        
        {this.state.selected && <CommentArea idBook={this.props.book.asin}/>}
      </Col>
    );
  }
}
export default SingleBook;
