import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: {
      author: "",
      comment: "",
      rate: 1,
      elementId: this.props.idBook,
      createdAt: "",             
   

    },
  };

  addComment = e => {
    e.preventDefault();
    
    this.setState({ comment: { ...this.state.comment , createdAt: new Date() } }); // scrittura dello stato

    fetch("https://striveschool-api.herokuapp.com/api/comments" , {
      method: "POST",
      body: JSON.stringify(this.state.comment),
      headers: {
        "Content-Type": "application/json",
        // chiave di autenticazione
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNmFhYjNhMzhjYjAwMTVmNjNkMTEiLCJpYXQiOjE3MTk0OTUzMzksImV4cCI6MTcyMDcwNDkzOX0.5vVe16YRa1Bcku51ZRl4mQCyD5otMCjV230YZ_RzwgU",
      },
    })
      .then(resp => {
        if (resp.ok) {
          
          this.setState({
            comment: {
            
              comment: "",
              createdAt: "",
              elementId: this.props.idBook,
              rate: 1,
              updatedAt: "",
              __v: 0,
              _id: "",
            },
          });
          alert("Commento aggiunto con successo!");
        } else {
          throw new Error("Error fetching data");
        }
      })
      .catch(err => alert(err));
  };

  render() {
    return (
      <Form className="text-start" onSubmit={this.addComment}>
        <h2> Add commento </h2>
        
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci un commento"
            value={this.state.comment.comment}

            onChange={e => this.setState({ comment: { ...this.state.comment, comment: e.target.value } })} // scrittura dello stato
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSeats">
          <Form.Label>Rate Book</Form.Label>
          <Form.Select aria-label="Number of seats"  onChange={e => this.setState({ comment: { ...this.state.comment, rate: e.target.value } })}>
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
          </Form.Select>
        </Form.Group>
        <Button variant="info" type="submit">
          Invia commento
        </Button>
      </Form>
      // <form onSubmit={this.addComment}>
      //     <input type="text" value={this.state.comment} onChange={e => this.setState({comment: e.target.value})} placeholder="Add a comment..." />
      //     <button type="submit">Submit</button>
      // </form>
    );
  }
}

export default AddComment;
