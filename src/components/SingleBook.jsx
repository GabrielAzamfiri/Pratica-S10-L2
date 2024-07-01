import { Component } from "react";
import { Card, Col } from "react-bootstrap";


class SingleBook extends Component {
  state = {
 
  };
 
  render() {
    return (
      <Col sm={6}   key={`book-${this.props.book.asin}`}>
        <Card onClick={() => this.props.selected(this.props.book)} className={this.props.selectedStile ? "border border-info bg-black" : "border-none"}>
          <Card.Img variant="top" src={this.props.book.img}  />
          <Card.Body>
            <Card.Title className="text-truncate">{this.props.book.title}</Card.Title>
            <Card.Text>Price: {this.props.book.price}$ </Card.Text>
          
          </Card.Body>
        </Card>
        
      
      </Col>
    );
  }
}
export default SingleBook;
